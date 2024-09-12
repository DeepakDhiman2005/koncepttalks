// src/components/NavLink.jsx
import React from "react";
import { Dropdown, Menu } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";

const NavLink = ({ title = "", menu = [] }) => {
  const menuItems = (
    <Menu>
      {menu && menu.map((item, index) => (
        <Menu.Item key={index}>
          {item}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menuItems} trigger={['hover']}>
      <div className="flex justify-center items-center text-[14px] cursor-pointer my-text gap-x-2 text-blue-700">
        <h2>{title}</h2>
        <IoMdArrowDropdown size={20} />
      </div>
    </Dropdown>
  );
};

export default NavLink;
