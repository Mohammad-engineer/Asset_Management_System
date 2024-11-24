import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import {useTabs} from "../../../hooks/use-tabs";
import { AccountGeneral } from '../account-general';
import {Iconify} from "../../../components/iconify/index";
import {DashboardContent} from "../../../layouts/dashboard/index.js";

// ----------------------------------------------------------------------

const TABS = [
  { value: 'general', label: 'General', icon: <Iconify icon="solar:user-id-bold" width={24} /> },
];

// ----------------------------------------------------------------------

export function AccountView() {
  const tabs = useTabs('general');

  return (
    <DashboardContent>
      {tabs.value === 'general' && <AccountGeneral />}
    </DashboardContent>
  );
}
