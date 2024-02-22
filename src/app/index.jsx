import AppRouters from "./AppRouters";
import AuthRouters from "./AuthRouters";

const App = () => {
    const isLoggin = true;
    return isLoggin ? <AppRouters /> : <AuthRouters />;
};

export default App;
