import React, { useEffect } from "react";
import "../styles/Navbar.css";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { useLocation, useHistory } from "react-router";
const CustomNavLink = (props) => {
  return (
    <NavLink to={"/" + props.link} className="links">
      <Button variant="contained" className="nav-links">
        {props.linkName}
      </Button>
    </NavLink>
  );
};
const Navbar = () => {
  const location = useLocation();
  const history = useHistory();
  // useEffect(() => {
  //   const nav = document.querySelectorAll(".links");
  //   if (location.pathname === "/") {
  //     nav[0].classList.add("active");
  //   }
  //   // eslint-disable-next-line
  // }, []);
  useEffect(() => {
    if (location.pathname === "/") {
      history.push("/linkedin/1");
    }
    //eslint-disable-next-line
  }, [location.pathname]);
  return (
    <Router>
      <header>
        <div className="heading">
          <h1>Here's What You Can Expect For 1000s Of Leads. In Seconds. Using AI.</h1>
        </div>
        <div className="nav">
          <CustomNavLink link="linkedin" linkName="Linkedin Personalisation" />
          <CustomNavLink link="icebreakers" linkName="Personalised Icebreakers" />
          <CustomNavLink link="personalisations" linkName="Backlink Personalisation" />
          <CustomNavLink link="pitches" linkName="Contexual Pitches" />
        </div>
      </header>
    </Router>
  );
};

export default Navbar;
