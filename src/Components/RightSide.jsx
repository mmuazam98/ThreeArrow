import React, { useEffect, useState } from "react";
import "../styles/RightSide.css";
import { useHistory } from "react-router-dom";
const desc = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rerum modi exercitationem dolores blanditiis suscipit nulla, voluptas illo nostrum debitis doloribus recusandae itaquevitae soluta eos quo quidem ducimus nesciunt ipsa in, ab quasi unde totam rem?  we are listening to the new page views on our React app, we can simply push a key-value pair",
  "Mouseflow uses an array _mfq in the browser to pass various meta-data to the Mouseflow server. One of the things Mouseflow looks for in this array is new page views. Now that we are listening to the new page views on our React app, we can simply push a key-value pair  we are listening to the new page views on our React app, we can simply push a key-value pair",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rerum modi exercitationem dolores blanditiis suscipit nulla, voluptas illo nostrum debitis doloribus recusandae itaquevitae soluta eos quo quidem ducimus nesciunt ipsa in, ab quasi unde totam rem? we are listening to the new page views on our React app, we can simply push a key-value pair",
  "Mouseflow uses an array _mfq in the browser to pass various meta-data to the Mouseflow server. One of the things Mouseflow looks for in this array is new page views. Now that we are listening to the new page views on our React app, we can simply push a key-value pair  we are listening to the new page views on our React app, we can simply push a key-value pair",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rerum modi exercitationem dolores blanditiis suscipit nulla, voluptas illo nostrum debitis doloribus recusandae itaquevitae soluta eos quo quidem ducimus nesciunt ipsa in, ab quasi unde totam rem? we are listening to the new page views on our React app, we can simply push a key-value pair",
];
const RightSide = () => {
  const history = useHistory();
  const [currPage, setCurrPage] = useState(window.location.pathname.split("/").pop() || 1);
  useEffect(() => {
    return history.listen((location) => {
      const page = location.pathname.split("/").pop() || 1;
      console.log(page);
      setCurrPage(page);
    });
  }, [history]);
  return (
    <div className="column right">
      <div className="sub-heading">
        <p>Generate AI First Line</p>
      </div>
      <div className="content">
        <p className="content-heading">Personalised Message {currPage}</p>
        <div className="content-desc">
          {desc[currPage - 1]}
          <div className="link">
            <a href="#Link">Link</a> to temporary site
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
