import { Select } from "antd";

const HomeHeader = () => {
    const onChange = () => {
        console.log("change");
    };
    return (
        <div className='text-[#fff] flex flex-row items-center justify-between'>
            <h1 className='text-xl'>Choose Dishes</h1>
            <Select
                defaultValue={"arzon"}
                style={{ width: "100px" }}
                onChange={onChange}
                options={[
                    {
                        value: "arzon",
                        label: "Arzon",
                    },
                    {
                        value: "qimmat",
                        label: "Qimmat",
                    },
                    {
                        value: "o'rtacha",
                        label: "O'rtacha",
                    },
                ]}
            />
        </div>
    );
};

export default HomeHeader;
