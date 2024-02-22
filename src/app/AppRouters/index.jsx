import { menuBar } from "../../constants/menuRouters";

const AppRouters = () => {
    return (
        <div className='flex w-full'>
            <div></div>
            <div className=''>
                {menuBar.map((item) => (
                    <p>{item.icon}</p>
                ))}
            </div>
            <div></div>
        </div>
    );
};

export default AppRouters;
