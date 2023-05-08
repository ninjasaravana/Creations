import { Routes, Route } from "react-router-dom";
import Counter from "./screens/counter/counter";
import List from "./screens/addRemoveList/List";
import Home from "./screens/home/home";
import SearchFilter from "./screens/searchFilter/searchFilter";
import Form from "./screens/form/form";
import DropDown from "./screens/dropDown/dropDown";
import ApiRender from "./screens/apirender/apiRender";
import LoginForm from "./screens/loginForm/loginForm";
import Modal from "./screens/modal/modal";
import Checkbox from "./screens/checkbox/checkbox";
import Rotate from "./screens/rotate/rotate";

const RootRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/api' element={<ApiRender />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/checkbox' element={<Checkbox />} />
        <Route path='/drop' element={<DropDown />} />
        <Route path='/form' element={<Form />} />
        <Route path='/list' element={<List />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/modal' element={<Modal />} />
        <Route path='/rotate' element={<Rotate />} />
        <Route path='/search' element={<SearchFilter />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
};

export default RootRouter;
