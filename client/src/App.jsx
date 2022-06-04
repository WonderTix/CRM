import React from "react";
import { Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Accounts from "./components/Accounts/Accounts.jsx";
import Contacts from "./components//Contacts/Contacts.jsx";
import Tasks from "./components//Tasks/Tasks.jsx";
import Reporting from "./components//Reporting/Reporting.jsx";
import ProtectedRoute from "./components/Authentication/protected-route";
import TaskForm from "./components/Tasks/TaskForm.jsx";
import EditTask from "./components/Tasks/EditTask.jsx";

export default function App() {
  return (
    <>
      <ProtectedRoute component={Navigation} />
      <ProtectedRoute component={CssBaseline} />
      <Routes>
        <Route path="/" element={<ProtectedRoute component={Home} />} />
        <Route
          path="/accounts"
          element={<ProtectedRoute component={Accounts} />}
        >
          <Route path=":id" element={<ProtectedRoute component={Accounts} />} />
        </Route>
        <Route
          path="/contacts"
          element={<ProtectedRoute component={Contacts} />}
        >
          <Route path=":id" element={<ProtectedRoute component={Contacts} />} />
        </Route>
        <Route
          path="/reporting"
          element={<ProtectedRoute component={Reporting} />}
        />
        <Route path="/tasks" element={<ProtectedRoute component={Tasks} />} />
          <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks/create" element={<TaskForm title='Create New Task' name='Create' threeButtonForm = {false}/>} />
            <Route path="/tasks/edit" element={<EditTask />} />
            <Route path="/tasks/accountInformation" element={<Tasks />} />
      </Routes>
    </>
  );
}
