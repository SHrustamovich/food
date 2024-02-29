import { Button, Drawer, Flex, Input } from "antd";
import { shortTitle } from "../../../utils/helpers";
import { useMemo, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";

const FormDrawer = ({ open, onCancel, data }) => {
    const [count, setCount] = useState(1);

    const totalPrice = useMemo(() => {
        return Number(data.price) * count;
    }, [count]);

    return (
        <Drawer open={open} onClose={onCancel} width={409} className='w-full'>
            <p className='text-white pb-[24px]'>
                Orders #{Math.floor(Math.random() * 100000)}
            </p>
            <Flex gap={"small"}>
                <button className='rounded-[8px] border-1 bg-[#EA7C69] text-white py-[7px] px-[12px]'>
                    Dine In
                </button>
                <button className='border-[1px] border-solid border-[#ccc] text-white rounded-[8px] py-[7px] px-[12px]'>
                    To Go
                </button>
                <button className='border-[1px] border-solid border-[#ccc] text-white rounded-[8px] py-[7px] px-[12px]'>
                    Delivery
                </button>
            </Flex>

            <div className='w-full py-[24px]'>
                <Flex
                    justify='space-between'
                    className='border-b-2 border-b-[#ccc] pb-[24px]'>
                    <p className='text-white'>Item</p>
                    <p className='flex gap-3 text-white'>
                        <span>Qty</span>
                        <span>Price</span>
                    </p>
                </Flex>
                <div className='mt-[24px]'>
                    <Flex justify='space-between'>
                        <Flex gap={"small"}>
                            <div>
                                <img
                                    src={data.img}
                                    alt={data.title}
                                    width={45}
                                    height={45}
                                    className='object-contain'
                                />
                            </div>
                            <div>
                                <p className='text-white'>
                                    {shortTitle(data.title)}
                                </p>
                                <p className='text-white'>${data.price}</p>
                            </div>
                        </Flex>
                        <Flex align='center' gap={"small"}>
                            <button
                                className='px-[14px] py-[8px] text-xl bg-[#2D303E] text-white rounded-[8px]'
                                onClick={() => setCount(count + 1)}>
                                {count}
                            </button>
                            <p className='text-white text-xl'>{totalPrice}</p>
                        </Flex>
                    </Flex>
                    <Flex gap={"large"} className='mt-[12px]'>
                        <Input
                            placeholder='Please, just a little bit spicy only.'
                            className='bg-[#2D303E]'
                        />
                        <button className='border-[1px] border-[#FF7CA3] rounded px-[14px] py-[6px]'>
                            <DeleteOutlined style={{ color: "#FF7CA3" }} />
                        </button>
                    </Flex>
                </div>
            </div>
            <button className='rounded-[8px] bg-[#EA7C69] py-[14px]  text-white fixed bottom-[24px] right-[24px] w-[361px]'>
                Continue to Payment
            </button>
        </Drawer>
    );
};

export default FormDrawer;
