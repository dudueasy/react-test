import React from "react";
import './style.css'

export const CommentInput = React.forwardRef((props, ref: any) => {
  return <div className={"comment"}>
    <textarea id="story" name="story" rows={5} cols={33} placeholder={'请输入评论'} ref={ref}/>
    <button className={'publishButton'}>publish</button>
  </div>
})