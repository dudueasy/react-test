import React from 'react';
import ReactDOM from 'react-dom/client';
import './mock/index.ts'
import './style.css';
import 'antd/dist/antd.min.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {NewsLayout} from "./page/news/_layout";
import {NewsList} from "./page/news/list";
import {NewsDetail} from "./page/news/detail";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/news"}>
          <Route element={<NewsLayout/>}>
            <Route path={"list"} element={<NewsList/>}/>
            <Route path={"detail"} element={<NewsDetail/>}/>
          </Route>
        </Route>
        <Route path="*" element={<Navigate to={'/news/list'} replace={true}/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

