import { useState } from "react";
import { foodData } from "../../../constants/data";
import HomeHeader from "./homeHeader";
import FormDrawer from "./form";

const HomeMain = () => {
    const [open, setOpen] = useState(false)
    const [data,setData] = useState(null)
    
    const handlyDrawer = (item) => {
        setOpen(true)
        setData(item)
    }

    const onCancel = () => {
        setOpen(false)
        setData(null)
    }

    return (
        <div>
            <div>
                <HomeHeader />
            </div>
            <div className='flex gap-[28px] pt-[75px] flex-wrap gap-y-[45px]'>
                {foodData.map((item) => (
                    <button onClick={() =>handlyDrawer(item)} key={item.id}>
                        <div className='rounded-2xl bg-[#1F1D2B] relative p-[24px] text-[#fff] text-center'>
                            <div className='absolute top-[-50px] left-1/2'>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    width={149}
                                    height={135}
                                    className='-translate-x-1/2
                                '
                                />
                            </div>
                            <h1 className='pt-[75px]'>{item.title}</h1>
                            <p className='py-[8px]'>{item.price}</p>
                            <p>{item.text}</p>
                        </div>
                    </button>
                ))}
            </div>
            {open && <FormDrawer open={open} onCancel={onCancel} data={data} />}
        </div>
    );
};

export default HomeMain;
