import {z as zod} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {isValidPhoneNumber} from 'react-phone-number-input/input';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

import {fData} from 'src/utils/format-number';

import {toast} from 'src/components/snackbar';
import {Form, Field, schemaHelper} from 'src/components/hook-form';

import {useMockedUser} from 'src/auth/hooks';

// ----------------------------------------------------------------------

export const UpdateUserSchema = zod.object({
  displayName: zod.string().min(1, {message: 'Name is required!'}),
  email: zod
    .string()
    .min(1, {message: 'Email is required!'})
    .email({message: 'Email must be a valid email address!'}),
  photoURL: schemaHelper.file({
    message: {required_error: 'اضافه کردن تصویر الزامی است'},
  }),
  phoneNumber: schemaHelper.phoneNumber({isValidPhoneNumber}),
  country: schemaHelper.objectOrNull({
    message: {required_error: 'Country is required!'},
  }),
  address: zod.string().min(1, {message: 'Address is required!'}),
  state: zod.string().min(1, {message: 'State is required!'}),
  city: zod.string().min(1, {message: 'City is required!'}),
  zipCode: zod.string().min(1, {message: 'Zip code is required!'}),
  about: zod.string().min(1, {message: 'About is required!'}),
  // Not required
  isPublic: zod.boolean(),
});

export function AccountGeneral() {
  const {user} = useMockedUser();

  const defaultValues = {
    displayName: user?.displayName || '',
    email: user?.email || '',
    photoURL: null,
    phoneNumber: user?.phoneNumber || '',
    country: user?.country || '',
    address: user?.address || '',
    state: user?.state || '',
    city: user?.city || '',
    zipCode: user?.zipCode || '',
    about: user?.about || '',
    isPublic: user?.isPublic || false,
  };

  const methods = useForm({
    mode: 'all',
    resolver: zodResolver(UpdateUserSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: {isSubmitting},
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      toast.success('Update success!');
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12} md={8}>
          <Card sx={{p: 3}}>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(2, 1fr)',
              }}
            >
              <Field.Text disabled name="displayName" label="نام"/>
              <Field.Text disabled name="email" label="ایمیل"/>
              <Field.Phone disabled name="phoneNumber" label="شماره تلفن"/>
              <Field.Text  disabled name="address" label="آدرس"/>
              <Field.CountrySelect disabled name="country" label="کشور" placeholder="انتخاب کشور"/>
              <Field.Text disabled name="city" label="شهر"/>
            </Box>

            <Stack spacing={3} alignItems="flex-end" sx={{mt: 3}}>
              <Field.Text disabled name="about" multiline rows={4} label="درباره من"/>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                ذخیره تغییرات
              </LoadingButton>
            </Stack>
          </Card>
        </Grid>
        <Grid xs={12} md={4}>
          <Card
            sx={{
              pt: 10,
              pb: 5,
              px: 3,
              textAlign: 'center',
            }}
          >
            <Field.UploadAvatar
              name="photoURL"
              maxSize={3145728}
              helperText={
                <Typography
                  variant="caption"
                  sx={{
                    mt: 3,
                    mx: 'auto',
                    display: 'block',
                    textAlign: 'center',
                    color: 'text.disabled',
                  }}
                >
                  فرمت های مجاز *.jpeg, *.jpg, *.png, *.gif
                  <br/> حداکثر اندازه تصویر {fData(3145728)}
                </Typography>
              }
            />

            <Button variant="soft" color="error" sx={{mt: 3}}>
              حذف حساب کاربری
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Form>
  );
}
