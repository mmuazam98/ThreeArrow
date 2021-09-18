import React, { useEffect, useState } from "react";
import Container from "./Container";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { useHistory } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const CustomSubLink = (props) => {
  return (
    <NavLink to={props.link}>
      <Button variant="contained" className="sub-links">
        {props.linkName}
      </Button>
    </NavLink>
  );
};
const Body = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    return history.listen((location) => {
      const page = location.pathname.split("/")[1];
      console.log(page);
    });
  }, [history]);
  return (
    <Container>
      {!open ? <MenuIcon className="menu" onClick={() => setOpen(true)} /> : <ClearIcon onClick={() => setOpen(false)} />}
      {open ? (
        <div className="navbar-md">
          <CustomSubLink link={"/1"} linkName="Personalize With LinkedIn Recent Activity" />
          <CustomSubLink link={"/2"} linkName="Personalize With LinkedIn Recomendation" />
          <CustomSubLink link={"/3"} linkName="Personalize With Achievements" />
          <CustomSubLink link={"/4"} linkName="Personalize With Bio / Job Description" />
        </div>
      ) : (
        ""
      )}
      <LeftSide />
      <RightSide />
    </Container>
  );
};

export default Body;
