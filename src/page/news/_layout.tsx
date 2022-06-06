import React, {useContext, useEffect} from "react";
import {NewsListContext, withNewsListContext} from "./context";
import axios from "axios";
import {Outlet} from "react-router-dom";

const RawLayout = React.memo((props: any) => {
  const [newsList, setNewsList] = useContext(NewsListContext)

  useEffect(() => {
    axios('/api/news/list').then(r => {
      setNewsList(r.data.list)
    })
  }, [])

  return <div><Outlet/></div>
})

export const NewsLayout: React.FC<any> = withNewsListContext(RawLayout)