import React, {useEffect, useLayoutEffect, useMemo, useRef, useState} from "react";
import './style.css'
import {Link} from "react-router-dom";

const NEW_DESCRIPTION_CLASSNAME = 'description';
export const NewsDescription = ({item}: { item: any }) => {
  const descriptionRef = useRef<HTMLDivElement | null>(null)
  const [overflowed, setOverflowed] = useState(false);
  useEffect(() => {
    console.log(`overflowed: `, overflowed);
  }, [overflowed])


  useLayoutEffect(() => {
    if (descriptionRef.current) {
      const scrollWidth = descriptionRef.current.scrollWidth
      const parentOffsetWidth = descriptionRef.current.parentElement?.offsetWidth
      if (parentOffsetWidth && (scrollWidth > parentOffsetWidth)) {
        setOverflowed(true)
      }
    }
  })

  const overflowedClassname = useMemo(() => overflowed ? 'overflowed' : undefined, [overflowed])

  const classNames = useMemo(() => {
    return [NEW_DESCRIPTION_CLASSNAME, overflowedClassname].filter(Boolean).join(" ")

  }, [overflowedClassname])


  return (
    <div className={'descriptionWrapper'}>
      <div className={classNames} ref={descriptionRef}>
        {item.description}
      </div>
      {overflowed && <Link to={`/news/detail?id=${item.id}`}>查看更多</Link>}
    </div>
  )
}