import Dashboard from 'containers/Admin/Dashboard';
import Settings from 'containers/Admin/Settings';

const routes = [
    {
        path: '/admin/dashboard',
        component: Dashboard
    },
    {
        path: '/admin/settings',
        component: Settings
    }
];

export default routes;