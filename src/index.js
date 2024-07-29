import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Author from './pages/Author';
import Home from './pages/Home'
import Login from './pages/Login'
import EditPost from './pages/EditPost'
import Delete from './pages/Delete'
import Dashboard from './pages/Dashboard'
import CreatePost from './pages/CreatePost'
import CategotyPost from './pages/CategotyPost'
import Logout from './pages/Logout.jsx'
import Register from './pages/Register'
import PostDetail from './pages/PostDetail'
import UserProfile from './pages/UserProfile'
import AuthorPost from './pages/AuthorPost'
import UserProvider from './context/userContext.js';





const router = createBrowserRouter([

  {
    path: "/",
    element: <UserProvider><Layout/></UserProvider>,
    errorElement : <ErrorPage/>,
    children:[
      {index: true, element: <Home/>},
      {path: "Posts/:id", element:<PostDetail/>},
      {path: "register", element:<Register/>},
      {path: "login", element:<Login/>},
      {path: "profile/:id", element:<UserProfile/>},
      {path: "author", element:<Author/>},
      {path: "create", element:<CreatePost/>},
      {path: "Posts/categories/:category", element:<CategotyPost/>},
      {path: "Posts/users/:id", element:<AuthorPost/>},
      {path: "myposts/:id", element:<Dashboard/>},
      {path: "Posts/:id/edit", element:<EditPost/>},
      {path: "Posts/:id/delete", element:<Delete/>},
      {path: "logout", element:<Logout/>},
   



    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
