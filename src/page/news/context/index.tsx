import React from "react";

export const NewsListContext = React.createContext<any>([]);
export const NewsListContextProvider: React.FC<any> = NewsListContext.Provider;