import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "../styles/LeftSide.css";
const CustomSubLink = (props) => {
  return (
    <NavLink to={"/" + props.link}>
      <Button variant="contained" className="sub-links">
        {props.linkName}
      </Button>
    </NavLink>
  );
};
const LeftSide = () => {
  return (
    <div className="column left">
      <CustomSubLink link="linkedin/1" linkName="Personalize With LinkedIn Recent Activity" />
      <CustomSubLink link="linkedin/2" linkName="Personalize With LinkedIn Recomendation" />
      <CustomSubLink link="linkedin/3" linkName="Personalize With Achievements" />
      <CustomSubLink link="linkedin/4" linkName="Personalize With Bio / Job Description" />
    </div>
  );
};

export default LeftSide;
