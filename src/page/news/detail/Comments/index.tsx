import React, {useCallback, useImperativeHandle, useMemo, useRef, useState} from "react";
import {Comment} from "./Comment";
import {CommentInput} from "./CommentInput";
import './style.css'

const COMMENTS_CLASSNAME = 'comments';

export const Comments = React.forwardRef((props: any, ref: any) => {
  const comments: any[] = props.comments
  const localRef = useRef<HTMLTextAreaElement| null>(null)
  const [highlighted, setHighlighted] = useState(false);
  const highlightedClassname = useMemo(() => highlighted ? 'highlighted' : undefined, [highlighted])

  const classNames = useMemo(() => {
    return [COMMENTS_CLASSNAME, highlightedClassname].filter(Boolean).join(' ')
  }, [highlightedClassname])

  const highlightFor1s = useCallback(() => {
    if(!highlighted){
      setHighlighted(true);
      setTimeout(() => {
        setHighlighted(false)
      }, 1000)
    }
  }, [highlighted])


  useImperativeHandle(ref, () => ({
    focus: ()=> {
      localRef.current?.focus();
      highlightFor1s();
    },
  }));

  return <div className={classNames}>
    <h3>评论区</h3>
    <CommentInput ref={localRef}/>
    {
      comments.map((item) => {
        return <Comment item={item} key={item.content}/>
      })
    }
  </div>
})