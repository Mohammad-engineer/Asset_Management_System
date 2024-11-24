import axios, {endpoints} from 'src/utils/axios';

import {setSession} from './utils';
import {STORAGE_KEY} from './constant';

/** **************************************
 * Sign in
 *************************************** */
export const signInWithPassword = async ({email, password}) => {
  try {
    const params = {email, password};

    // const res = await axios.post(endpoints.auth.signIn, params);
    // const {accessToken} = res.data;

    // const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4ODY0YzcxNy01ODdkLTQ3MmEtOTI5YS04ZTVmMjk4MDI0ZGEtMCIsImlhdCI6MTcyMjI0NDQ1MCwiZXhwIjoxNzIyNTAzNjUwfQ.IRv7FSKBLSRFUy2nvMs00iA64cA4cJ3wfJZmQ4kiLgQ"
    // const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4ODY0YzcxNy01ODdkLTQ3MmEtOTI5YS04ZTVmMjk4MDI0ZGEtMCIsImlhdCI6MTcyMjc2OTA4NiwiZXhwIjoxNzIzMDI4Mjg2fQ.BQsKrl5q9DbaL0M6iWxWV8GCB8o1hpusgno8vj3OTj0"
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4ODY0YzcxNy01ODdkLTQ3MmEtOTI5YS04ZTVmMjk4MDI0ZGEtMCIsImlhdCI6MTcyMjc2OTA4NiwiZXhwIjoxNzU0MTEwMjk2fQ.cU-7jJrZPhz7ftaJCeQfpFpdVTDOleTG9WH1OTy5d28'
    if (!accessToken) {
      throw new Error('Access token not found in response');
    }

    setSession(accessToken);
  } catch (error) {
    console.error('Error during sign in:', error);
    throw error;
  }
};

/** **************************************
 * Sign up
 *************************************** */
export const signUp = async ({email, password, firstName, lastName}) => {
  const params = {
    email,
    password,
    firstName,
    lastName,
  };

  try {
    const res = await axios.post(endpoints.auth.signUp, params);

    const {accessToken} = res.data;

    if (!accessToken) {
      throw new Error('Access token not found in response');
    }

    sessionStorage.setItem(STORAGE_KEY, accessToken);
  } catch (error) {
    console.error('Error during sign up:', error);
    throw error;
  }
};

/** **************************************
 * Sign out
 *************************************** */
export const signOut = async () => {
  try {
    await setSession(null);
  } catch (error) {
    console.error('Error during sign out:', error);
    throw error;
  }
};
