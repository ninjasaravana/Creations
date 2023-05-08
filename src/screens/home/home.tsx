import React from "react";
import styles from "./home.module.css";
import Counter from "../counter/counter";
import List from "../addRemoveList/List";
import SearchFilter from "../searchFilter/searchFilter";
import Form from "../form/form";
import DropDown from "../dropDown/dropDown";
import ApiRender from "../apirender/apiRender";
import LoginForm from "../loginForm/loginForm";
import Modal from "../modal/modal";

const Home: React.FC = () => {
  const components = [
    <Counter />,
    <List />,
    <SearchFilter />,
    <Form />,
    <DropDown />,
    <ApiRender />,
    <LoginForm />,
    <Modal />,
  ];
  return (
    <div className={styles.container}>
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
