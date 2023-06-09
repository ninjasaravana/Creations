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
import Pagination from "./screens/pagination/pagination";
import FoodApp from "./screens/foodApp/foodApp";
import ToggleButton from "./screens/toggleButton/toggleButton";
import Workspace from "./screens/workspace/workspace";
import FileExplorer from "./screens/explorer/fileExplorer";
import Clock from "./screens/clock/clock";

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
        <Route path='/pagination' element={<Pagination />} />
        <Route path='/rotate' element={<Rotate />} />
        <Route path='/search' element={<SearchFilter />} />
        <Route path='/food' element={<FoodApp />} />
        <Route path='/toggle' element={<ToggleButton />} />
        <Route path='/problems' element={<Workspace />} />
        <Route path='/fileExplorer' element={<FileExplorer />} />
        <Route path='/clock' element={<Clock />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
};

export default RootRouter;
