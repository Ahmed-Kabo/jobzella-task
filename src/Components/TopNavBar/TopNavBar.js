import {
  KeyboardArrowDown,
  Logout,
  Notifications,
  NotificationsOutlined,
  Search,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Container } from "@mui/system";
import { Heading, ImageController, Paragraph } from "../../Helper/Helper";
import { NavBarStyled } from "./TopNavBarStyle";
import UserImage from "../../Assets/user.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/AuthSlice/AuthSlice";
const TopNavBar = () => {
  const dispatch = useDispatch();

  // get  main user
  const { mainUser } = useSelector((state) => state.auth);
  const GET_USER = mainUser?.data?.employee;

  return (
    <NavBarStyled>
      <div className="items">
        <div className="icon">😍</div>
        <div className="data">
          <Heading fz="24px">Hello, {GET_USER?.name}</Heading>
          <Paragraph fz="14px">Let’s start your tasks NOW!</Paragraph>
        </div>
      </div>
      <div className="userInfo">
        <IconButton>
          <Search />
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <ImageController src={UserImage} w="48px" h="48px" br="50%" />
        </IconButton>
        <IconButton onClick={() => dispatch(logout())}>
          <Logout />
        </IconButton>
      </div>
    </NavBarStyled>
  );
};

export default TopNavBar;
