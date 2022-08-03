import { Link, NavLink } from "react-router-dom";
import { ButtonPrimary, ImageController } from "../../Helper/Helper";
import IconImage from "../../Assets/icon.svg";
import { GroupStyled } from "../LeftSideBar/LfitSideBarStyle";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGroups, reset } from "../../Redux/GroupSlice/GroupsSlice";

const Group = () => {
  const dispatch = useDispatch();

  // get all groups
  useEffect(() => {
    const getGrpups = async () => {
      await dispatch(getAllGroups());
      await dispatch(reset());
    };
    getGrpups();
  }, []);

  //get the groups from reducer
  const { groups } = useSelector((state) => state.groups);

  //get all groups from reducer
  const ALL_GROUPS = groups?.data ? groups?.data : [];

  return (
    <GroupStyled>
      <ul>
        {ALL_GROUPS?.map((group) => (
          <li key={group.id}>
            <NavLink to={`${group.id}`}>
              <Button fullWidth className="btn-group">
                <ImageController src={IconImage} alt="/" m="0 .5rem 0 0 " />
                <span className="name">{group.name}</span>
              </Button>
            </NavLink>
          </li>
        ))}
      </ul>
    </GroupStyled>
  );
};

export default Group;
