import React, {useEffect, useState} from "react";
import {NewsListContextProvider} from "./context";
import axios from "axios";

export const NewsLayout: React.FC<any> = (props) => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    axios('/api/news/list').then(r => {
      console.info(`r.data.list: `, r.data.list);
      setNewsList(r.data.list)
    })
  }, [setNewsList])

  return <NewsListContextProvider value={[newsList, setNewsList]}>{props.children}</NewsListContextProvider>
}