import {
    DashboardPage,
    HomePage,
    MessagePage,
    NotificationPage,
    OrderPage,
    SettingsPage,
} from "../pages";

export const routers = [
    {
        id: 1,
        path: "/home",
        element: <HomePage />,
    },
    {
        id: 2,
        path: "/order",
        element: <OrderPage />,
    },
    {
        id: 3,
        path: "/dashboard",
        element: <DashboardPage />,
    },
    {
        id: 4,
        path: "/settings",
        element: <SettingsPage />,
    },
    {
        id: 5,
        path: "/messega",
        element: <MessagePage />,
    },
    {
        id: 6,
        path: "/notification",
        element: <NotificationPage />,
    },
];
