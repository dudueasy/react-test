import {useSearchParams} from "react-router-dom";
import React, {Fragment, useContext, useMemo, useRef} from "react";
import {NewsListContext} from "../context";
import './style.css';
import {Creator} from "./Creator";
import {CommentOutlined} from "@ant-design/icons";
import {Comments} from "./Comments";

export const NewsDetail = () => {
  const [searchParams] = useSearchParams();
  const [newsList] = useContext(NewsListContext);

  const commentInputRef = useRef<HTMLTextAreaElement | null>(null)

  const id = searchParams.get('id')

  const news = useMemo(() => {
    return (newsList || []).find((item: any) => {
      return String(item.id) === id
    })
  }, [id, newsList])

  const creatorInfo = {
    creator: news?.creator,
    create_at: news?.create_at
  }

  const title = news?.title
  const description = news?.description;

  function onCommentsClick() {
    if (commentInputRef.current) {
      commentInputRef.current.focus();
      document.querySelector('.comments')?.scrollIntoView({behavior: 'smooth'});
    }
  }

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
            <Creator creatorInfo={creatorInfo}/>
            <section className={'content'}>
              {description}
            </section>
            <Comments comments={news.comments} ref={commentInputRef}/>
          </div>

        </div>
      }
    </Fragment>
  )
}