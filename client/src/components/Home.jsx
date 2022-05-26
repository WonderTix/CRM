import React from "react";
import { Routes, Route } from "react-router-dom";
import Accounts from "./Accounts/Accounts.jsx";
import Contacts from "./Contacts/Contacts.jsx";
import Dashboard from "./Dashboard.jsx";
import Tasks from "./Tasks/Tasks.jsx";
import Reporting from "./Reporting/Reporting.jsx";
import Auth from "../utils/Auth.jsx";
import TaskForm from "./Tasks/TaskForm.jsx";
import EditTask from "./Tasks/EditTask.jsx";

export default function Home() {
  return (
      <Routes>
        <Route path="/login" element={<Dashboard />} />
        <Route element={<Auth />}>
          <Route path="/accounts" element={<Accounts />}>
            <Route path=":id" element={<Accounts />} />
          </Route>
          <Route path="/contacts" element={<Contacts />}>
            <Route path=":id" element={<Contacts />} />
          </Route>
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/tasks" element={<Tasks />} />
            <Route path="/tasks/create" element={<TaskForm title = 'Create New Task' name = 'Create'/>} />
            <Route path="/tasks/edit" element={<EditTask />} />
            <Route path="/tasks/accountInformation" element={<Tasks />} />
        </Route>
        <Route path="*" element={<Dashboard />} />
      </Routes>
  );
}
