
import './App.css';
import { Routes, Route} from "react-router-dom";
import NavBar from './components/Shared/NavBar';

import Login from './Pages/Login';
import Register from './Pages/Register';
import AddCategory from './Pages/Admin/AddCategory';
import AddLead from './Pages/Admin/AddLead';
import Home from './Pages/HomePage/Home';
import MyAccount from './Pages/MyAccount';
import CreateProfile from './Pages/CreateProfile';
import TakeLead from './Pages/TakeLead';
import LeadTaken from './Pages/LeadTaken';


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/admin/add-category' element={<AddCategory></AddCategory>}></Route>
        <Route path='/admin/add-lead' element={<AddLead></AddLead>}></Route>

        <Route path='/my-account' element={<MyAccount></MyAccount>}></Route>
        <Route path='/create-profile' element={<CreateProfile></CreateProfile>}></Route>

        <Route path='/take-lead/:id' element={<TakeLead></TakeLead>}></Route>
        <Route path='/lead-taken/:id' element={<LeadTaken></LeadTaken>}></Route>

        
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>

    </div>
  );
}

export default App;
