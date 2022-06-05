import React from 'react';
import ReactDOM from 'react-dom/client';
import './mock/index.ts'
import './style.css';
import 'antd/dist/antd.min.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {NewsDetail} from "./page/news/detail";
import {NewsLayout} from "./page/news/_layout";
import {NewsList} from "./page/news/list";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/news/'}>
          <Route path={"list"} element={<NewsLayout><NewsList/></NewsLayout>}/>
          <Route path={"detail"} element={<NewsLayout><NewsDetail/></NewsLayout>}/>
          {/* backup */}
          <Route path="*" element={<NewsLayout><Navigate to={'list'} replace={true}/></NewsLayout>}/>
        </Route>
        {/* backup */}
        <Route path="*" element={<Navigate to={'news/list'} replace={true}/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

