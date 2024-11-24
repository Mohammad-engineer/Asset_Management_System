import { z as zod } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';

// import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
// import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from 'src/components/iconify';
import { Form, Field } from 'src/components/hook-form';

import { useAuthContext } from 'src/auth/hooks';
import { signInWithPassword } from 'src/auth/context/jwt';

// ----------------------------------------------------------------------

export const SignInSchema = zod.object({
  email: zod
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Email must be a valid email address!' }),
  password: zod
    .string()
    .min(1, { message: 'Password is required!' })
    .min(6, { message: 'Password must be at least 6 characters!' }),
});

// ----------------------------------------------------------------------

export function JwtSignInView() {
  const router = useRouter();

  const { checkUserSession } = useAuthContext();

  const [errorMsg, setErrorMsg] = useState('');

  const password = useBoolean();

  const defaultValues = {
    email: 'demo@minimals.cc',
    password: '@demo1',
  };

  const methods = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signInWithPassword({ email: data.email, password: data.password });
      await checkUserSession?.();

      router.refresh();
    } catch (error) {
      console.error(error);
      setErrorMsg(error instanceof Error ? error.message : error);
    }
  });

  const renderHead = (
    <Stack spacing={1.5} sx={{ mb: 5 }}>
      <Typography sx={{  textAlign: 'center', mb: 5 }} variant="h4" >سامانه مدیریت دارایی (اموال)</Typography>
      <Typography variant="h5" sx={{color: 'text.secondary',textAlign:'center',mb: 2 }}>ورود به سامانه</Typography>
      {/* <Stack direction="row" spacing={0.5}> */}
      {/*   <Typography variant="body2" sx={{ color: 'text.secondary' }}> */}
      {/*     {`Don't have an account?`} */}
      {/*   </Typography> */}
      {/*   <Link component={RouterLink} href={paths.auth.jwt.signUp} variant="subtitle2"> */}
      {/*     Get started */}
      {/*   </Link> */}
      {/* </Stack> */}
    </Stack>
  );

  const renderForm = (
    <Stack  spacing={3}>
      <Field.Text name="email" label="آدرس ایمیل" InputLabelProps={{ flexDirection:'row', direction:'rtl', shrink: true }} />
      <Stack spacing={1.5}>
        {/* <Link */}
        {/*   component={RouterLink} */}
        {/*   href="#" */}
        {/*   variant="body2" */}
        {/*   color="inherit" */}
        {/*   sx={{ alignSelf: 'flex-end' }} */}
        {/* > */}
        {/*   Forgot password? */}
        {/* </Link> */}

        <Field.Text
          name="password"
          label="رمز عبور"
          placeholder="6+ کاراکتر"
          type={password.value ? 'text' : 'password'}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={password.onToggle} edge="end">
                  <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        loadingIndicator="در حال ورود..."
      >
        ورود
      </LoadingButton>
    </Stack>
  );

  return (
    <>
      {renderHead}

      {/* <Alert severity="info" sx={{ mb: 3 }}> */}
      {/*   Use <strong>{defaultValues.email}</strong> */}
      {/*   {' with password '} */}
      {/*   <strong>{defaultValues.password}</strong> */}
      {/* </Alert> */}

      {!!errorMsg && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {errorMsg}
        </Alert>
      )}

      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </Form>
    </>
  );
}