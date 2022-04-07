import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from "./Login/LoginPage";
import MainLayout from "./MainLayout/MainLayout";
import UserQuery from "./UserManagement/UserQuery";
import AddUser from "./UserManagement/AddUser";
import ConsumeRecordQuery from "./ConsumeRecordManagement/ConsumeRecordQuery";
import {BrowserRouter, Route, Routes} from "react-router-dom";

ReactDOM.render(
  // <React.StrictMode>
  //   <ConsumeRecordQuery />
  // </React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route index element={<LoginPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/main" element={<MainLayout></MainLayout>}>
                <Route index element={<h1>欢迎登录管理员端</h1>}></Route>
                <Route path="adduser" element={<AddUser></AddUser>}></Route>
                <Route path="userquery" element={<UserQuery></UserQuery>}></Route>
                <Route path="consumerecordquery" element={<ConsumeRecordQuery></ConsumeRecordQuery>}></Route>

            </Route>
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
