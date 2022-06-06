import React from "react";
import  './style.css';

export function Comments(props: any) {
  const comments: any[] = props.comments

  return <div>
    {
      comments.map((item) => {
        return <div className={'comment'}>{item.content}</div>
      })
    }
  </div>
}