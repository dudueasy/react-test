import React, {useState} from "react";
import {List, Avatar} from 'antd';
import './style.css';
import { CommentOutlined } from "@ant-design/icons";
import {Link} from "react-router-dom";

export function NewsList(props: { list: any[] }) {
  const list = props.list;


  let getNewsTitle = (item: any) => {
    return <div className={'newsTitle'}>
      <div><Link to={`/news/detail?id=${item.id}`}>{item.title}</Link></div>
      <div>
        <CommentOutlined style={{marginRight: 4}}/>
        <span className={'commentCount'}>{item.comments.length}</span>
      </div>
    </div>
  };


  const getNewsDescription = (item: any) => {
    return <div className={'description'}>{item.description} </div>
  }


  return <div>
    <List
      dataSource={list}
      renderItem={news => {
        return (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
              title={
                getNewsTitle(news)
              }
              description={
                getNewsDescription(news)
              }
            />
          </List.Item>
        );
      }}/>
  </div>
}