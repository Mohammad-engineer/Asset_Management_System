import { useState, useEffect } from 'react';
import { paths } from 'src/routes/paths';

import { DashboardContent } from 'src/layouts/dashboard';

import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { TabContext } from '@mui/lab';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import { RequestForm } from './RequestForm';
import SimpleDataGrid from '../../components/datagrid/SimpleDataGrid';
import { gridData } from '../extendsLicence/data';
import CardView from '../../components/card-view/CardView';
import { useTranslate } from 'src/locales';

// ----------------------------------------------------------------------

export function FormAndTabs({ title }) {
  const [value, setValue] = useState('1');
  const [datasource, setDatasource] = useState({ ...gridData });

  const translate = useTranslate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const savedGridData = JSON.parse(localStorage.getItem('grid-data'));
    if (savedGridData) {
      setDatasource(savedGridData);
    }
  }, []);

  const handleDataChange = (rows, gridKey) => {
    const updatedDatasource = {
      ...datasource,
      rows: {
        ...datasource.rows,
        [gridKey]: rows,
      },
    };
    setDatasource(updatedDatasource);
    localStorage.setItem('grid-data', JSON.stringify(updatedDatasource));
  };

  const itemWizard = [
    {
      title: 'property.request.goods_information',
      value: '1',
    },
    {
      title: 'property.request.List_of_requested_goods',
      value: '2',
    },
    {
      title: 'برنامه تشکل',
      value: '3',
    },
    {
      title: 'هیات موسس',
      value: '4',
    },
    {
      title: 'هیات مدیره',
      value: '5',
    },
    {
      title: 'آدرس تشکل / نمایندگی ها',
      value: '6',
    },
    {
      title: 'property.request.Contact_information',
      value: '7',
    },
    {
      title: 'property.request.Documents',
      value: '8',
    },
    {
      title: 'property.request.attachments',
      value: '9',
    },
  ];

  const renderStepWizard = (stepWizard, titleWizard) => (
    <div>
      <span
        style={{
          display: 'inline-block',
          borderRadius: '50%',
          width: '24px',
          height: '24px',
          padding: '4px',
          paddingRight: '5px',
          background: 'rgba(0,0,0,.1)',
          color: 'rgba(0,0,0,0.80)',
          textAlign: 'center',
          font: '12px Arial, sans-serif',
          marginLeft: '5px',
          verticalAlign: 'middle',
        }}
      >
        {stepWizard}
      </span>
      {/* {titleWizard} */}
      {translate.t(titleWizard)}
    </div>
  );

  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading={translate.t('property.request.title')}
        links={[
          { name: `${translate.t('property.list.dashboard')}`, href: paths.dashboard.root },
          { name: `${translate.t('property.list.assets')}` },
          { name: translate.t('property.request.title') },
        ]}
        sx={{ mb: { xs: 3, md: 5 } }}
      />
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {itemWizard.map((item) => (
              <Tab
                label={renderStepWizard(item.value, item.title)}
                key={item.value}
                value={item.value}
              />
            ))}
          </TabList>
        </Box>
        <TabPanel value="1">
          <RequestForm />
        </TabPanel>
        <TabPanel value="2">
          <SimpleDataGrid
            handleDataChange={handleDataChange}
            columns={datasource.columns.ahdaf}
            rows={datasource.rows.ahdaf}
            gridKey="ahdaf"
          />
        </TabPanel>
        <TabPanel value="3">
          <SimpleDataGrid
            handleDataChange={handleDataChange}
            columns={datasource.columns.barname}
            rows={datasource.rows.barname}
            gridKey="barname"
          />
        </TabPanel>
        <TabPanel value="4">
          <SimpleDataGrid
            handleDataChange={handleDataChange}
            columns={datasource.columns['heyat-moases']}
            rows={datasource.rows['heyat-moases']}
            gridKey="heyat-moases"
          />
        </TabPanel>
        <TabPanel value="5">
          <SimpleDataGrid
            handleDataChange={handleDataChange}
            columns={datasource.columns['heyat-modire']}
            rows={datasource.rows['heyat-modire']}
            gridKey="heyat-modire"
          />
        </TabPanel>
        <TabPanel value="6">
          <SimpleDataGrid
            handleDataChange={handleDataChange}
            columns={datasource.columns.address}
            rows={datasource.rows.address}
            gridKey="address"
          />
        </TabPanel>
        <TabPanel value="7">
          <SimpleDataGrid
            handleDataChange={handleDataChange}
            columns={datasource.columns.tamas}
            rows={datasource.rows.tamas}
            gridKey="tamas"
          />
        </TabPanel>
        <TabPanel value="8">
          <CardView columns={datasource.columns.asnad} rows={datasource.rows.asnad} />
        </TabPanel>
        <TabPanel value="9">
          <CardView columns={datasource.columns.peyvast} rows={datasource.rows.peyvast} />
        </TabPanel>
      </TabContext>
    </DashboardContent>
  );
}
