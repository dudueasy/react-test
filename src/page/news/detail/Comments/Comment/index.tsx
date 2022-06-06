import React, {useMemo} from "react";
import {Creator} from "../../Creator";
import './style.css';

export function Comment(props: { item: any }) {
  const item = props.item;
  let creatorInfo = useMemo(() => {
    return {
      creator: item.creator,
      create_at: item.create_at
    }
  }, [item]);

  return <div className={"comment"}>
    <Creator creatorInfo={creatorInfo}/>
    {props.item.content}
  </div>;
}