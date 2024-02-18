import React from 'react';
import LogIn from './Screens/LogIn';
import SignUp from './Screens/SignUp';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './Screens/DashBoard';
import AdminDashboard from './Screens/AdminDashboard';


function App() {
  return (
    <div>

        <Routes>
          
          <Route path='/' element={<LogIn />} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/dashboard' element={<DashBoard/>} />
          <Route path='/admin' element={<AdminDashboard/>} />

          

        </Routes>

    </div>
  );
}

export default App;
