import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './mock/index.ts'
import './style.css';
import 'antd/dist/antd.min.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {NewsDetail} from "./page/news/detail";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/news/'}>
          <Route path={"list"} element={<App/>}/>
          <Route path={"detail"} element={<NewsDetail/>}/>
          {/* backup */}
          <Route path="*" element={<Navigate to={'list'} replace={true}/>}/>
        </Route>
        {/* backup */}
        <Route path="*" element={<Navigate to={'news/list'} replace={true}/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

