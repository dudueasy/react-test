import {useSearchParams} from "react-router-dom";
import React, {Fragment, useContext, useEffect, useMemo} from "react";
import {NewsListContext} from "../context";
import './style.css';
import {NewsCreator} from "./NewsCreator";
import {CommentOutlined} from "@ant-design/icons";
import {Comments} from "./Comments";

export const NewsDetail = () => {
  const [searchParams] = useSearchParams();
  const [newsList] = useContext(NewsListContext);
  const id = searchParams.get('id')

  const news = useMemo(() => {
    return (newsList || []).find((item: any) => {
      return String(item.id) === id
    })
  }, [id, newsList])

  const title = news?.title
  const description = news?.description;

  function onCommentsClick() { }

  return (
    <Fragment>
      {
        news && <div>
          <div className={'newsDetail'}>
            <div className={'header'}>
              <h1>{title}</h1>
              <div className={'commentIcon'} onClick={onCommentsClick}>
                <CommentOutlined style={{marginRight: 4}}/>
                <span className={'commentCount'}>{news.comments.length}</span>
              </div>
            </div>
            <NewsCreator news={news}/>
            <section className={'content'}>
              {description}
            </section>

            <Comments comments={news.comments}/>
          </div>

        </div>
      }
    </Fragment>
  )
}