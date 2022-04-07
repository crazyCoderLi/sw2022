import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from "./Login/LoginPage";
import MainLayout from "./MainLayout/MainLayout";
import UserQuery from "./UserManagement/UserQuery";
import AddUser from "./UserManagement/AddUser";
import ConsumeRecordQuery from "./ConsumeRecord/ConsumeRecordQuery";

ReactDOM.render(
  <React.StrictMode>
    <ConsumeRecordQuery />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
