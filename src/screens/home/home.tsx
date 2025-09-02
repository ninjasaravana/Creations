import React, { useEffect, useRef } from "react";
import styles from "./home.module.css";
import Counter from "../counter/counter";
import List from "../addRemoveList/List";
import SearchFilter from "../searchFilter/searchFilter";
import Form from "../form/form";
import DropDown from "../dropDown/dropDown";
import ApiRender from "../apirender/apiRender";
import LoginForm from "../loginForm/loginForm";
import Modal from "../modal/modal";
import Checkbox from "../checkbox/checkbox";
import Pagination from "../pagination/pagination";
import { useNavigate } from "react-router-dom";
import ToggleButton from "../toggleButton/toggleButton";
import Rotate from "../rotate/rotate";
import Clock from "../clock/clock";
import FileExplorer from "../explorer/fileExplorer";

const Home: React.FC = () => {
  const components = [
    <Counter />,
    <ApiRender />,
    <SearchFilter />,
    <List />,
    <Form />,
    <DropDown />,
    <LoginForm />,
    <Modal />,
    <Checkbox />,
    <ToggleButton />,
    <Pagination />,
    <Rotate tata={"hi"} />,
    <FileExplorer />,
  ];
  const navigate = useNavigate();
  const colorButton = useRef<HTMLButtonElement>(null);
  const getColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const randomColor =
      "#" + r.toString(16) + g.toString(16) + b.toString(16) + "a1";
    const randomBoxShadow = `1px 1px 2px ${
      "#" + r.toString(16) + g.toString(16) + b.toString(16)
    }`;
    if (colorButton.current) {
      colorButton.current.style.backgroundColor = randomColor;
      colorButton.current.style.boxShadow = randomBoxShadow;
    }
  };

  const navigateToFoodApp = () => {
    navigate("/food");
  };

  useEffect(() => {
    setInterval(() => {
      getColor();
    }, 1000);
  });
  return (
    <div className={styles.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "20px",
          margin: "16px 16px 0 16px",
        }}
      >
        <button
          className={styles.infinite}
          onClick={() => navigate("/infinitescroll")}
        >
          ∞
        </button>
        <button
          ref={colorButton}
          className={styles.foodApp}
          onClick={navigateToFoodApp}
        >
          Food App
        </button>
      </div>
      {components.map((component, idx) => {
        return (
          <>
            <div className={styles.container} key={idx}>
              {component}
            </div>
            <div className={styles.divider} />
          </>
        );
      })}
    </div>
  );
};

export default Home;
