import React, {useContext} from "react";
import {Avatar, List} from 'antd';
import './style.css';
import {CommentOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {NewsListContext} from "../context";
import {NewsDescription} from "./NewsDescription";
import {useNavigate} from "react-router-dom";

export function NewsList() {
  const [newsList] = useContext(NewsListContext);
  const navigate = useNavigate();
  const onCommentClick = (href: string) => navigate(href)

  const renderNewsTitle = (item: any) => {
    const href = `/news/detail?id=${item.id}`;
    return <div className={'newsTitle'}>
      <div><Link to={href}>{item.title}</Link></div>
      <div onClick={() => onCommentClick(href)} className={'commentIcon'} >
        <CommentOutlined style={{marginRight: 4}}/>
        <span className={'commentCount'}>{item.comments.length}</span>
      </div>
    </div>
  };

  return <div className={'newsDetail'}>
    <header>
      <h1>
        News
      </h1>
    </header>
    <List
      dataSource={newsList}
      renderItem={(news: any) => {
        return (
          <List.Item key={news.id}>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
              title={
                renderNewsTitle(news)
              }
              description={
                <NewsDescription item={news}/>
              }
            />
          </List.Item>
        );
      }}/>
  </div>
}