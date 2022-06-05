import {useLocation, useSearchParams, useParams} from "react-router-dom";
import {useEffect} from "react";

export const NewsDetail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id')
  useEffect(() => {
    console.log(`id: `, id);
  }, [id])

  return <div>detail</div>
}