import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  changeCompanyNameAction,
  changeSallaryAction,
  upSallaryAction,
  changeFirstNameAction,
  changeLastNameAction,
  lowSallaryAction,
} from "./index";
import { Motion } from "react-motion";

const useContextMenu = () => {
  const [xPos, setXPos] = useState("0px");
  const [yPos, setYPos] = useState("0px");
  const [showMenu, setShowMenu] = useState(false);

  const handleContextMenu = useCallback(
    (e) => {
      e.preventDefault();

      setXPos(`${e.pageX}px`);
      setYPos(`${e.pageY}px`);
      setShowMenu(true);
    },
    [setXPos, setYPos]
  );

  const handleClick = useCallback(() => {
    showMenu && setShowMenu(false);
  }, [showMenu]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.addEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });

  return { xPos, yPos, showMenu };
};

const ContextMenu = ({ menu }) => {
  const { xPos, yPos, showMenu } = useContextMenu();
  return (
    <Motion
      defaultStyle={{ opacity: 0 }}
      style={{ opacity: !showMenu ? 0 : 1 }}
    >
      {(interpolatedStyle) => (
        <>
          {showMenu ? (
            <div
              className="menu-container"
              style={{
                top: yPos,
                left: xPos,
                opacity: interpolatedStyle.opacity,
              }}
            >
              {menu}
              <li data='1' onClick={(e, data)=> console.log(data)}>22222</li>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </Motion>
  );
};
const App = (store) => {
  // const dispatch = useDispatch();
  // const job = useSelector((state) => state.job);
  // const user = useSelector((state) => state.user);

  // const onChangeFirstNameHandle = (event) => {
  //   const firstName = event.currentTarget.value;
  //   dispatch(changeFirstNameAction(firstName));
  // };

  // const onChangeLastNameHandle = (event) => {
  //   const lastName = event.currentTarget.value;
  //   dispatch(changeLastNameAction(lastName));
  // };

  // const onUpSallaryHandle = () => dispatch(upSallaryAction());
  // const onLowSallaryHandle = () => dispatch(lowSallaryAction());

  // const onChangeSallaryHandle = (event) => {
  //   const newSallary = event.currentTarget.value;
  //   dispatch(changeSallaryAction(newSallary));
  // };

  // const onChangeCompanyHandle = (event) => {
  //   const companyName = event.currentTarget.value;
  //   dispatch(changeCompanyNameAction(companyName));
  // };

  return (
    <div>
      <h1>sdsd</h1>
        <ContextMenu />
    </div>
  );
};

export default App;
