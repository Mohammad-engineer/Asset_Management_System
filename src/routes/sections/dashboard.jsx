import {lazy, Suspense} from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import {CONFIG} from 'src/config-global';
import {DashboardLayout} from 'src/layouts/dashboard';
import {LoadingScreen} from 'src/components/loading-screen';
import {AuthGuard} from 'src/auth/guard';

// ----------------------------------------------------------------------

const FormPage = lazy(() => import('src/pages/dashboard/FormContainer'));
const Account = lazy(() => import('src/pages/dashboard/account'));
const PageTashakol = lazy(() => import('src/pages/dashboard/tashakol/list'));
const PageEditTashakol = lazy(() => import('src/pages/dashboard/tashakol/edit'));

// ----------------------------------------------------------------------

const layoutContent = (
  <DashboardLayout>
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  </DashboardLayout>
);

export const dashboardRoutes = [
  {
    path: 'dashboard',
    element: CONFIG.auth.skip ? <>{layoutContent}</> : <AuthGuard>{layoutContent}</AuthGuard>,
    children: [
      {index: true, element: <Navigate to="tashakol/list" replace />},
      {path: 'sodoor', element: <FormPage key='sodoor' title='درخواست صدور مجوز' />},
      {path: 'tamdid', element: <FormPage key='tamdid' title='درخواست تمدید مجوز' />},
      {path: 'ebtal', element: <FormPage key='ebtal' title='درخواست ابطال مجوز' />},
      {path: 'account', element: <Account />},
      {
        path: 'tashakol',
        children: [
          {index: true, element: <PageTashakol />},
          {path: 'list', element: <PageTashakol />},
          {path: ':id/edit', element: <PageEditTashakol />},
        ],
      },
    ],
  },
];
