import { useState } from 'react'
import bgroundd from "../src/assets/bgt.jpg"

import { Login } from './components/Login';
import { Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import './App.css'
import {Employee} from "./employee/Employee";
import { EmployeeProfilePage } from './employee/EmployeeProfilePage';
import { CreateAdvancePage } from './screens/Advance/CreateAdvancePage';
import { CreateExpensePage } from './screens/Expense/CreateExpensePage';
import { CreatePermissionPage } from './screens/Permission/CreatePermissionPage'; 


function App() {
  return(
    <div>
      <header>

      </header>
      <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} ></Route>
          <Route path="/login" exact element={<Login />}></Route>

          <Route path="/employee" exact element={<Employee />} ></Route>
          <Route path="/employeeProfile" exact element={<EmployeeProfilePage />} ></Route>
          <Route path="/advance" exact element={<CreateAdvancePage />} ></Route>
          <Route path="/expense" exact element={<CreateExpensePage />} ></Route>
          <Route path="/permission" exact element={<CreatePermissionPage />} ></Route>
        
        </Routes>
      </BrowserRouter>
      </main>
      <footer>
          
      </footer>
    </div>
  )
}
export default App
