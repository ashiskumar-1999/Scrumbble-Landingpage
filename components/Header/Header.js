import React from "react";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

function Header() {
  return (
    <div>
      <Avatar style={{ backgroundColor: "#87d068" }} icon={<UserOutlined />} />
    </div>
  );
}

export default Header;
