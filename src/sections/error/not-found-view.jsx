import {m} from 'framer-motion';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import {RouterLink} from 'src/routes/components';

import {SimpleLayout} from 'src/layouts/simple';
import {PageNotFoundIllustration} from 'src/assets/illustrations';

import {varBounce, MotionContainer} from 'src/components/animate';

// ----------------------------------------------------------------------

export function NotFoundView() {
  return (
    <SimpleLayout content={{compact: true}}>
      <Container component={MotionContainer}>
        <m.div variants={varBounce().in}>
          <Typography variant="h3" sx={{mb: 2}}>
            متاسفیم ، صفحه پیدا نشد!
          </Typography>
        </m.div>

        <m.div variants={varBounce().in}>
          <Typography sx={{color: 'text.secondary'}}>
            متأسفیم، ما نتوانستیم صفحه مورد نظر شما را پیدا کنیم. شاید شما URL را اشتباه تایپ کرده اید؟ 
            حتما املای خود را بررسی کنید
          </Typography>
        </m.div>
        <m.div variants={varBounce().in}>
          <Typography sx={{fontSize: '15rem', color: 'text.secondary'}}>
            404
          </Typography>
        </m.div>
        <Button component={RouterLink} href="/" size="large" variant="contained">
          بازگشت به صفحه اصلی
        </Button>
      </Container>
    </SimpleLayout>
  );
}
