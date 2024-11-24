import { _mock } from 'src/_mock';

// To get the user from the <AuthContext/>, you can use

// Change:
// import { useMockedUser } from 'src/auth/hooks';
// const { user } = useMockedUser();

// To:
// import { useAuthContext } from 'src/auth/hooks';
// const { user } = useAuthContext();

// ----------------------------------------------------------------------

export function useMockedUser() {
  const user = {
    id: '8864c717-587d-472a-929a-8e5f298024da-0',
    displayName: 'محمدرضا میرباقری',
    email: 'demoMohamad@gmail.com',
    photoURL: _mock.image.avatar(24),
    phoneNumber: _mock.phoneNumber(0),
    country: _mock.countryNames(0),
    address: 'سرافراز نبش 5 پلاک 40',
    state: 'ایران',
    city: 'تهران',
    zipCode: '94116',
    about: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز',
    role: 'admin',
    isPublic: true,
  };

  return { user };
}
