import { Routes, Route } from "react-router-dom";
import Counter from "./counter/Counter";
import List from "./addRemoveList/List";
import Dummy from "./dummy";

const RootRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/list' element={<List />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/' element={<Dummy />} />
      </Routes>
    </>
  );
};

export default RootRouter;
