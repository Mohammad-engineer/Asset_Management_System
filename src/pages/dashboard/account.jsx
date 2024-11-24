import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import {AccountView} from "../../sections/user/view/index";

// ----------------------------------------------------------------------

const metadata = { title: ` مدیریت حساب کاربری - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {metadata.title}</title>
      </Helmet>
      <AccountView />
    </>
  );
}
