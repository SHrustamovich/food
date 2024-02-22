import {
    BookOutlined,
    BorderOuterOutlined,
    HomeOutlined,
} from "@ant-design/icons";

export const menuBar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeOutlined />,
        path: "/home",
    },
    {
        id: 2,
        title: "Order",
        icon: <BorderOuterOutlined />,
        path: "/order",
    },
    {
        id: 3,
        title: "Dashboard",
        icon: <BookOutlined />,
        path: "/dashboard",
    },
    {
        id: 4,
        title: "Message",
        icon: <BookOutlined />,
        path: "/message",
    },
    {
        id: 5,
        title: "Notification",
        icon: <BookOutlined />,
        path: "/notification",
    },
    {
        id: 6,
        title: "Settings",
        icon: <BookOutlined />,
        path: "/settings",
    },
];
