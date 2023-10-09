import React from "react";
import { Menu, Avatar } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import "./ProfileMenu.css";

const ProfileMenu = ({ user, logout }) => {
  const navigate = useNavigate();
  return (
    <Menu>
      <Menu.Target>
        <Avatar src={user?.picture} alt="user image" radius={"xl"} />
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item onClick={() => navigate("./favourites", { replace: true })}>
          <span className="cntr">
            <AiFillHeart color="red" />
            &nbsp;Favourites
          </span>
        </Menu.Item>
        <Menu.Item onClick={() => navigate("./bookings", { replace: true })}>
          <span className="cntr">
            <BsFillBookmarkCheckFill style={{ color: "yellowgreen" }} />
            &nbsp;Bookings
          </span>
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            localStorage.clear();
            logout();
          }}
        >
          <span className="cntr">
            <BiLogOut color="red" />
            &nbsp;Logout
          </span>
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ProfileMenu;
