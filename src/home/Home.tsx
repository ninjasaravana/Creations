import React from "react";
import "./Home.css";
import Counter from "../counter/Counter";
import List from "../addRemoveList/List";
import SearchFilter from "../searchFilter/SearchFilter";
import Form from "../form/Form";
import DropDown from "../dropDown/DropDown";
import ApiRender from "../apirender/ApiRender";
import LoginForm from "../loginForm/LoginForm";

const Home: React.FC = () => {
  return (
    <div className='container'>
      <Counter />
      <div className='divider' />
      <List />
      <div className='divider' />
      <SearchFilter />
      <div className='divider' />
      <Form />
      <div className='divider' />
      <DropDown />
      <div className='divider' />
      <ApiRender />
      <div className='divider' />
      <LoginForm />
    </div>
  );
};

export default Home;
