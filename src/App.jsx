import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v3/articles')
      .then(response => response.json())
      .then(data => {
        setNews(data)
      })
  })

  return (
    <>
      <div className='App'>
        <div className='title'>
          <h1>Space News</h1>
        </div>
        <div className='newsContainer'>
          {news.map((val, key) => {
            return ( 
              <div key={key} className='article'> 
                <h3>{val.title}</h3>
                <img src={val.imageUrl}/>
                <p>{val.summary}</p>
                <h4>{val.publishedAt}</h4>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
