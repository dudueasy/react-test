import {Avatar} from "antd";
import React from "react";

export function NewsCreator(props: { news: any }) {
  return <div className={"creator"}>
    <Avatar src="https://joeschmoe.io/api/v1/random" className={"avatar"}/>
    <div>
      <div>
        {props.news.creator}
      </div>
      <div>
        {props.news.create_at}
      </div>
    </div>
  </div>;
}