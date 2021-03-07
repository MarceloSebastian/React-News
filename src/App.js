import Form from "./components/Form";
import Header from "./components/Header";
import { useState, useEffect } from 'react';
import NewsList from "./components/NewsList";

function App() {

  const [ category, setCategory ] = useState('');
  const [ news, setNews ] = useState([]);

  useEffect(() => {
    
    const hitAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=b1b5e557bef544e28fbaf4c830659796`;

      const response = await fetch(url);
      const news = await response.json();

      setNews(news.articles);
    };

    hitAPI();

  }, [category])

  return (
    <>
      <Header 
        title='React News'
      />

      <div className="container white">
        <Form 
          setCategory={setCategory}
        />

        <NewsList 
          news={news}
        />
      </div>
    </>
  );
}

export default App;
