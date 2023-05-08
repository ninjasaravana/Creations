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
import Checkbox from "../checkbox/checkbox";
import Pagination from "../pagination/pagination";

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
    <Pagination />,
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
