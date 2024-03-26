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
            return <div key={key}> {val.title} </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
