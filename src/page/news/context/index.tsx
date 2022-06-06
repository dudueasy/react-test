import React, {ComponentType, useMemo, useState} from "react";

export const NewsListContext = React.createContext<any>([]);
export const NewsListContextProvider: React.FC<any> = NewsListContext.Provider;

export const withNewsListContext = <P,>(Component: ComponentType<P>) => (props: P) => {
  const [newsList, setNewsList] = useState(()=>[]);
  const contextValue = useMemo(() => [newsList, setNewsList], [newsList]);

  return <NewsListContextProvider value={contextValue}>
    <Component {...props}/>
  </NewsListContextProvider>
}