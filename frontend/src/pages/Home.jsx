import React from 'react'
import HotNews from '../components/HotNews'
import Time from '../components/Time'
import NewsSnippets from '../components/NewsSnippets'

const home = () => {
  const topic1 = 'World News'
  const title1 = 'Hello World'
  const topic2 = 'US News'
  const title2 = 'Hello US'
  
  return (
    <main>
        <Time />
        <HotNews />
        <NewsSnippets topic={topic1} title={title1}/>
        <NewsSnippets topic={topic2} title={title2}/>
        <NewsSnippets topic={topic2} title={title2}/>
        <NewsSnippets topic={topic2} title={title2}/>
    </main>

  )
}

export default home