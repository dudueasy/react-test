import React, {useContext} from "react";
import {List, Avatar} from 'antd';
import './style.css';
import { CommentOutlined } from "@ant-design/icons";
import {Link} from "react-router-dom";
import {NewsListContext} from "../context";

export function NewsList() {
  const [newsList] = useContext(NewsListContext);


  const renderNewsTitle = (item: any) => {
    return <div className={'newsTitle'}>
      <div><Link to={`/news/detail?id=${item.id}`}>{item.title}</Link></div>
      <div>
        <CommentOutlined style={{marginRight: 4}}/>
        <span className={'commentCount'}>{item.comments.length}</span>
      </div>
    </div>
  };


  const renderNewsDescription = (item: any) => {
    return <div className={'description'}>{item.description} </div>
  }

  return <div>
    <header>
      <h1>
        News
      </h1>
    </header>
    <List
      dataSource={newsList}
      renderItem={news => {
        return (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
              title={
                renderNewsTitle(news)
              }
              description={
                renderNewsDescription(news)
              }
            />
          </List.Item>
        );
      }}/>
  </div>
}