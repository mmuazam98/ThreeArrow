import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "../styles/LeftSide.css";
import { useHistory, useLocation } from "react-router-dom";
// eslint-disable-next-line
const links = {
  linkedin: ["Personalize With LinkedIn Recent Activity", "Personalize With LinkedIn Recomendation", "Personalize With Achievements", "Personalize With Bio / Job Description"],
  icebreakers: ["Personalize With Achievements", "Personalize With Bio / Job Description", "Personalize With LinkedIn Recent Activity", "Personalize With LinkedIn Recomendation"],
  personalisations: ["Personalize With LinkedIn Recomendation", "Personalize With Achievements", "Personalize With LinkedIn Recent Activity", "Personalize With Bio / Job Description"],
  pitches: ["Personalize With Achievements", "Personalize With Bio / Job Description", "Personalize With LinkedIn Recent Activity", "Personalize With LinkedIn Recomendation"],
};
const CustomSubLink = (props) => {
  return (
    <NavLink to={props.link}>
      <Button variant="contained" className="sub-links">
        {props.linkName}
      </Button>
    </NavLink>
  );
};
const LeftSide = () => {
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  //   const [page, setPage] = useState("linkedin");
  useEffect(() => {
    return history.listen((location) => {
      const arr = ["linkedin", "icebreakers", "personalisations", "pitches"];
      const pageCurr = location.hash.split()[0][8];
      console.log(arr[pageCurr - 1]);
      //   setPage(pageCurr);
    });
  }, [history]);
  return (
    <>
      <div className="column left">
        <div className="max">
          <CustomSubLink link={"/1"} linkName="Personalize With LinkedIn Recent Activity" />
          <CustomSubLink link={"/2"} linkName="Personalize With LinkedIn Recomendation" />
          <CustomSubLink link={"/3"} linkName="Personalize With Achievements" />
          <CustomSubLink link={"/4"} linkName="Personalize With Bio / Job Description" />
        </div>
      </div>
    </>
  );
};

export default LeftSide;
