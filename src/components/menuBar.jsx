import React from "react";
import { Tabs } from "antd";

const onChange = (key) => {
    console.log(key);
};

const items = [
    {
        key: "1",
        label: "Hot Dishes",
        children: "Companents",
    },
    {
        key: "2",
        label: "Cold Dishes",
        children: "Companents",
    },
    {
        key: "3",
        label: "Soup",
        children: "Content of Tab Pane 3",
    },
    {
        key: "4",
        label: "Grill",
        children: "Content of Tab Pane 3",
    },
    {
        key: "5",
        label: "Appetizer",
        children: "Content of Tab Pane 3",
    },
    {
        key: "6",
        label: "Dessert",
        children: "Content of Tab Pane 3",
    },
];
const MenuBar = () => (
    <Tabs
        defaultActiveKey='1'
        items={items}
        onChange={onChange}
        className='tabs'
    />
);
export default MenuBar;
