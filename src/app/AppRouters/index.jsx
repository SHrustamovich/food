import { Link, Route, Routes, useLocation } from "react-router-dom";
import { Icons } from "../../constants/icons";
import { menuBar } from "../../constants/menuRouters";
import { SearchOutlined } from "@ant-design/icons";
import { routers } from "../../constants/routers";

const AppRouters = () => {
    const { pathname } = useLocation();
    const date = new Date();
    return (
        <div className='flex w-full bg-[#252836]'>
            <div className='flex flex-col items-center h-screen bg-[#1F1D2B] py-[24px] rounded-lg'>
                <div className='pb-[26px]'>
                    <Icons.logo />
                </div>
                <div className=''>
                    {menuBar.map((item) => (
                        <div className='px-[24px]' key={item.id}>
                            <Link to={item.path} className='py-[12px]'>
                                <div className='p-[16px]'>{item.icon}</div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col w-full py-[24px]'>
                <div className='flex justify-between px-[10px] text-white'>
                    <div>
                        <h1 className='capitalize'>
                            {pathname.slice(1) == "home"
                                ? "Jaegar Resto"
                                : pathname.slice(1)}
                        </h1>
                        <span>{date.toDateString()}</span>
                    </div>
                    <div className='flex gap-[3px] items-center p-[14px] border-[1px] border-solid border-[#ccc] rounded bg-[#2D303E]'>
                        <div className='pb-2'>
                            <SearchOutlined />
                        </div>
                        <input
                            type='text'
                            className='outline-none bg-[#2D303E]'
                            placeholder='Search for food, coffe, etc..'
                        />
                    </div>
                </div>
                <div className="pl-[10px] pr-[40px]">
                    <Routes>
                        {routers.map((item) => (
                            <Route
                                key={item.id}
                                path={item.path}
                                element={item.element}
                            />
                        ))}
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default AppRouters;
