import { Drawer } from "antd";

const FormDrawer = ({ open, onCancel, data }) => {
    console.log(data);
    return (
        <Drawer open={open} onClose={onCancel}>
            <p className='text-white'>Drawer</p>
        </Drawer>
    );
};

export default FormDrawer;
