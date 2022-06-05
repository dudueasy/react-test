import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {NewsList} from "./page/news/list";

function App() {
  const [newsList, setNewsList] = useState([])

  useEffect(() => {
    axios('/api/news/list').then(r => {
      setNewsList(r.data.list)
    })
  }, [])

  return (
    <div className="App">
      <header>
        <h1>
          News
        </h1>
      </header>
      <NewsList list={newsList}/>
    </div>
  );
}

export default App;
