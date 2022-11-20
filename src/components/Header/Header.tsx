import React, { FC, useState } from "react";
import Flex from "../Flex/Flex";
import UserName from "../UserName/UserName";
import { ToggleMenu } from "../../Toggle__Menu/ToggleMenu";
import { Button } from "../UI/Button/Button";
import moon from "../../assets/moon.svg";
import sun from "../../assets/sun.svg";

interface IHeader {
  toggleTheme: () => void;
  theme: boolean;
}

const Header: FC<IHeader> = ({ toggleTheme, theme }) => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  return (
    <Flex
      direction="row"
      align="center"
      justify="space-between"
      width="100%"
      padding="15px 15px"
    >
      <Button children="Добавить задачу" />
      <button className="btn_toggle">
        <img onClick={toggleTheme} src={theme ? moon : sun} alt="moon" />
      </button>
      <UserName handleMenu={handleMenu} menu={menu} />
      {menu ? <ToggleMenu /> : null}
    </Flex>
  );
};
export default Header;
