import { ConfigProvider } from "antd";

const AntdProvider = ({ children }) => {
    return (
        <ConfigProvider
            theme={{
                token: {},
                components: {
                    Tabs: {
                        itemActiveColor: "#EA7C69",
                        itemSelectedColor: "#EA7C69",
                        itemHoverColor: "#EA7C69",
                        colorPrimaryBorder: "#EA7C69",
                        inkBarColor: "#EA7C69",
                    },
                    Select: {
                        selectorBg: "#1F1D2B",
                        optionSelectedColor: "#fff",
                        colorText: "#fff",
                        colorIcon: "#166199",
                        colorIconHover: "#fff",
                    },
                    Drawer: {
                        colorBgElevated: "#1F1D2B",
                        colorText: "#fff",
                        colorIcon: "#fff",
                        colorIconHover: "red",
                    },
                    Input: {
                        hoverBg: "#2D303E",
                    },
                },
            }}>
            {children}
        </ConfigProvider>
    );
};
export default AntdProvider;
