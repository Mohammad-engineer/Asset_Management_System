import Box from '@mui/material/Box';
import {DashboardContent} from 'src/layouts/dashboard';
import {CustomBreadcrumbs} from "../../components/custom-breadcrumbs/index.js";
import {paths} from "../../routes/paths.js";
import {TabContext} from "@mui/lab";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import {JobNewEditForm} from "../job/job-new-edit-form.jsx";
import SimpleDataGrid from "../../components/datagrid/SimpleDataGrid.jsx";
import {gridData} from "../extendsLicence/data.js";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LoadingButton from "@mui/lab/LoadingButton";
import {Iconify} from "../../components/iconify/index.js";
import {ButtonGroup} from "@mui/material";
import Button from "@mui/material/Button";
import {useTheme} from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import StateSelector from "../../components/state-selector/StateSelector";

// ----------------------------------------------------------------------

export function BlankView() {
  const [value, setValue] = React.useState('1');
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const itemWizard = [
    {
      title: 'اطلاعات اصلی مجوز',
      value: '1'
    },
    {
      title: 'اهداف تشکل',
      value: '2'
    }
    ,
    {
      title: 'برنامه تشکل',
      value: '3'
    },
    {
      title: 'هیات موسس',
      value: '4'
    },
    {
      title: 'هیات مدیره',
      value: '5'
    },
    {
      title: 'آدرس تشکل / نمایندگی ها',
      value: '6'
    },
    {
      title: 'اطلاعات تماس',
      value: '7'
    },
    {
      title: 'اسناد و مدارک',
      value: '8'
    },
    {
      title: 'مستندات و پیوست ها',
      value: '9'
    }
  ]

  const renderStepWizard = (step, title) => (
    <div>
                <span style={{
                  display: 'inline-block',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  padding: '4px',
                  paddingRight: '5px',
                  background: 'rgba(0,0,0,.1)',
                  color: 'rgba(0,0,0,.35)',
                  textAlign: 'center',
                  font: '12px Arial, sans-serif',
                  marginLeft: '5px',
                  verticalAlign: 'middle'
                }}>{step}
                </span>
      {title}
    </div>
  )

  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="ابطال مجوز "
        links={[
          {name: 'داشبورد', href: paths.dashboard.root},
          {name: 'مجوزها'},
          {name: 'ابطال مجوز'},
        ]}
        sx={{mb: {xs: 3, md: 5}}}
      />
      <TabContext value={value}>
        <Box sx={{mb: 2}}>
          <AppBar position='static'>
            <Toolbar variant='dense' sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              border: `1px solid ${theme.palette.background.neutral}`,
              py: 1,
              borderRadius: '1rem'
            }}>
              <LoadingButton
                type="submit"
                variant="contained"
                size="medium"
                loading={false}
                startIcon={<Iconify icon="material-symbols:save-rounded"/>}
              >
                ذخیره
              </LoadingButton>
              <StateSelector/>
              {/*<ButtonGroup size="medium" color="inherit">*/}
              {/*    <Button>*/}
              {/*        <Iconify icon="mdi:wrench"/>*/}
              {/*    </Button>*/}
              {/*    <Button>*/}
              {/*        <Iconify icon="raphael:arrowdown"/>*/}
              {/*    </Button>*/}
              {/*</ButtonGroup>*/}
            </Toolbar>
          </AppBar>
        </Box>


        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {
              itemWizard
                .map((item) =>
                  <Tab label={renderStepWizard(item.value, item.title)} value={item.value}/>)
            }
          </TabList>
        </Box>
        <TabPanel value="1">
          <JobNewEditForm/>
        </TabPanel>
        <TabPanel value="2">
          <SimpleDataGrid columns={gridData.columns.ahdaf}
                          rows={gridData.rows.ahdaf}/>
        </TabPanel>
        <TabPanel value="3">
          <SimpleDataGrid columns={gridData.columns.barname}
                          rows={gridData.rows.barname}/>
        </TabPanel>
        <TabPanel value="4">
          <SimpleDataGrid columns={gridData.columns["heyat-moases"]}
                          rows={gridData.rows["heyat-moases"]}/>
        </TabPanel>
        <TabPanel value="5">
          <SimpleDataGrid columns={gridData.columns["heyat-modire"]}
                          rows={gridData.rows["heyat-modire"]}/>
        </TabPanel>
        <TabPanel value="6">
          <SimpleDataGrid columns={gridData.columns.address}
                          rows={gridData.rows.address}/>
        </TabPanel>
        <TabPanel value="7">
          <SimpleDataGrid columns={gridData.columns.tamas}
                          rows={gridData.rows.tamas}/>
        </TabPanel>
        <TabPanel value="8">
          <SimpleDataGrid columns={gridData.columns.asnad}
                          rows={gridData.rows.asnad}/>
        </TabPanel>
        <TabPanel value="9">
          <SimpleDataGrid columns={gridData.columns.peyvast}
                          rows={gridData.rows.peyvast}/>
        </TabPanel>
      </TabContext>
    </DashboardContent>
  );
}
