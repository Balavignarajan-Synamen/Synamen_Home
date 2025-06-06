import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import BasicTail1 from "./Components/TailBaiscs/BasicTail1";
import MainComponent from "./Components/popup/MainComponent";
import HookForm from "./Components/ReactHookForm/HookForm";
import HookFormMain from "./Components/ReactHookForm/HookFormMain";
import DeletepopMain from "./Components/popupDelete/DeletepopMain";
import Toast1 from "./Components/Toastify/Toast1";
import Main from "./Components/TwoPopupOneBtn/Main";
import FormYt1 from "./Components/ReactForm/FormYt1";
import FormYt2 from "./Components/ReactForm/FormYt2";
import TaskManager from "./Components/TaskManagerTask/TaskManager";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tail" element={<BasicTail1 />} />
          <Route path="/popup" element={<MainComponent />} />
          <Route path="/hookform" element={<HookForm />} />
          <Route path="/hookformmain" element={<HookFormMain />} />
          <Route path="/deletepopmain" element={<DeletepopMain />} />
          <Route path="/toast" element={<Toast1 />} />
          <Route path="/popup2" element={<Main />} />
          <Route path="/reactform" element={<FormYt1 />} />
          <Route path="/reactform2" element={<FormYt2 />} />
          <Route path="/taskmanager" element={<TaskManager />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
