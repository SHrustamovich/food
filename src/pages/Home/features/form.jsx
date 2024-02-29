import { Drawer, Flex } from "antd";

const FormDrawer = ({ open, onCancel, data }) => {
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

            <div className='w-full py-[24px] border-b-2 border-b-[#ccc]'>
                <Flex justify='space-between'>
                    <p className='text-white'>Item</p>
                    <p className='flex gap-3 text-white'>
                        <span>Qty</span>
                        <span>Price</span>
                    </p>
                </Flex>
            </div>
        </Drawer>
    );
};

export default FormDrawer;
