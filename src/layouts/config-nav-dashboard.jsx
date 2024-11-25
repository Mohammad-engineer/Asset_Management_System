import {paths} from 'src/routes/paths';

import {CONFIG} from 'src/config-global';

import {SvgColor} from 'src/components/svg-color';

// import { lang } from './src/locales/en/common.json'
import lang  from 'src/locales/langs/en/common.json'


// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`${CONFIG.site.basePath}/assets/icons/navbar/${name}.svg`}/>;

const ICONS = {
  job: icon('ic-job'),
  blog: icon('ic-blog'),
  chat: icon('ic-chat'),
  mail: icon('ic-mail'),
  user: icon('ic-user'),
  file: icon('ic-file'),
  lock: icon('ic-lock'),
  tour: icon('ic-tour'),
  order: icon('ic-order'),
  label: icon('ic-label'),
  blank: icon('ic-blank'),
  kanban: icon('ic-kanban'),
  folder: icon('ic-folder'),
  course: icon('ic-course'),
  banking: icon('ic-banking'),
  booking: icon('ic-booking'),
  invoice: icon('ic-invoice'),
  product: icon('ic-product'),
  calendar: icon('ic-calendar'),
  disabled: icon('ic-disabled'),
  external: icon('ic-external'),
  menuItem: icon('ic-menu-item'),
  ecommerce: icon('ic-ecommerce'),
  analytics: icon('ic-analytics'),
  dashboard: icon('ic-dashboard'),
  parameter: icon('ic-parameter'),
};

// ----------------------------------------------------------------------

export const navData = [
  /**
   * Overview
   */
  {
    subheader: '',
    items: [
      {title: 'lang.property.list.myProperty' , path: paths.dashboard.goods.list, icon: ICONS.file},
      {title: 'lang.property.request.title', path: paths.dashboard.buy, icon: ICONS.blog},
      {title: 'lang.property.renewal.title', path: paths.dashboard.repair, icon: ICONS.folder},
      {title: 'lang.property.revocation.title', path: paths.dashboard.Abandonment, icon: ICONS.disabled},
    ],
  },
  /**
   * Management
   */
  // {
  //   subheader: 'Management',
  //   items: [
  //     {
  //       title: 'کاربران',
  //       path: paths.dashboard.group.root,
  //       icon: ICONS.user,
  //       children: [
  //         { title: 'لیست', path: paths.dashboard.group.root },
  //         { title: 'ایجاد', path: paths.dashboard.group.five },
  //         { title: 'حساب کاربری', path: paths.dashboard.group.six },
  //       ],
  //     },
  //   ],
  // },
];
