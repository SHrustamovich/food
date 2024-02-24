import { ConfigProvider } from "antd";

const AntdProvider = ({ children }) => {
    return (
        <ConfigProvider
            theme={{
                token: {},
                components: {},
            }}>
            {children}
        </ConfigProvider>
    );
};
export default AntdProvider;
