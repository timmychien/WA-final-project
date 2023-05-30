import React from 'react';
import './App.css';
import {useRoutes} from 'react-router-dom';
import Search from "./components/Search";
import Post from "./components/Post";
const App=()=>{
  let routes = useRoutes([
    { path: '/', element: <Search/>},
    { path: '/post', element:<Post/>}
  ]);
  return routes 
}
export default App;
