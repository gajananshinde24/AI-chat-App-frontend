import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from "react-router-dom";


function App() {


  return (
    <div className="App">
       <ToastContainer/>
       <Outlet/>

    </div>
   
   
  );
}

export default App;
