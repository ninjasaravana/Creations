import { Routes, Route } from "react-router-dom";
import Counter from "./counter/Counter";
import List from "./addRemoveList/List";
import Home from "./home/Home";
import SearchFilter from "./searchFilter/SearchFilter";
import Form from "./form/Form";
import DropDown from "./dropDown/DropDown";
import ApiRender from "./apirender/ApiRender";
import LoginForm from "./loginForm/LoginForm";

const RootRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/list' element={<List />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/search' element={<SearchFilter />} />
        <Route path='/form' element={<Form />} />
        <Route path='/drop' element={<DropDown />} />
        <Route path='/api' element={<ApiRender />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
};

export default RootRouter;
