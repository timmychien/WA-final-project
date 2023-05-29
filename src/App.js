import React from 'react';
import './App.css';
import {useRoutes} from 'react-router-dom';
import Search from "./components/Search";
const App=()=>{
  let routes = useRoutes([
    { path: '/', element: <Search/>}
  ]);
  return routes 
}

export default App;
