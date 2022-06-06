import {Avatar} from "antd";
import React from "react";

export function Creator(props: { creatorInfo: any }) {
  return <div className={"creator"}>
    <Avatar src="https://joeschmoe.io/api/v1/random" className={"avatar"}/>
    <div>
      <div>
        {props.creatorInfo.creator}
      </div>
      <div>
        {props.creatorInfo.create_at}
      </div>
    </div>
  </div>;
}