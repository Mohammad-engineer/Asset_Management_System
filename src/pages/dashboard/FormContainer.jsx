import {Helmet} from 'react-helmet-async';

import {CONFIG} from 'src/config-global';

import {FormAndTabs} from "../../sections/formandtabs/FormAndTabs";

// ----------------------------------------------------------------------

export default function FormContainer({title}) {
  const metadata = {title: `${title} - ${CONFIG.site.name}`};
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      <FormAndTabs title={title}/>
    </>
  );
}
