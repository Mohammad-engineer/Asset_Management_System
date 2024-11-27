import { lazy, Suspense } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { CONFIG } from 'src/config-global';
import { DashboardLayout } from 'src/layouts/dashboard';
import { LoadingScreen } from 'src/components/loading-screen';
import { AuthGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

const FormPage = lazy(() => import('src/pages/dashboard/FormContainer'));
const Account = lazy(() => import('src/pages/dashboard/account'));
const GoodsList = lazy(() => import('src/pages/dashboard/goods/list'));
const GoodsListEdit = lazy(() => import('src/pages/dashboard/goods/edit'));

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
      { index: true, element: <Navigate to="goods/list" replace /> },
      { path: 'buy', element: <FormPage key="buy" title="درخواست خرید دارایی" /> },
      { path: 'repair', element: <FormPage key="repair" title="درخواست تعمیر دارایی" /> },
      { path: 'Abandonment', element: <FormPage key="Abandonment" title="درخواست اسقاط دارایی" /> },
      { path: 'account', element: <Account /> },
      {
        path: 'goods',
        children: [
          { index: true, element: <GoodsList /> },
          { path: 'list', element: <GoodsList /> },
          { path: ':id/edit', element: <GoodsListEdit /> },
        ],
      },
    ],
  },
];
