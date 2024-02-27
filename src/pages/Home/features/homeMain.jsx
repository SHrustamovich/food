import { foodData } from "../../../constants/data";
import HomeHeader from "./homeHeader";

const HomeMain = () => {
    return (
        <div>
            <div>
                <HomeHeader />
            </div>
            <div className='flex gap-[28px] pt-[75px]'>
                {foodData.map((item) => (
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
                ))}
            </div>
        </div>
    );
};

export default HomeMain;
