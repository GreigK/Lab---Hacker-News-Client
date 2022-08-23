import React, {useState, useEffect} from 'react';
import LastestStory from '../components/LastestStory';
import NewsForm from '../components/NewsForm';
import Story from '../components/Story';


const NewsContainer = () =>{
    const [news, setNews] = useState([])
    const [filter, setFilter] = useState("")
    const [filterNews, setfilterNews] = useState([])

    useEffect (() => {
       getNews();
    }, [])

    useEffect (() => {
        const filteredResults = news.filter(story => {
            return story.title.toLowerCase().includes(filter.toLowerCase())
        })
        setfilterNews(filteredResults)
    }, [filter])

    const getNews = function(){
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(res =>res.json())
        .then(data => {
            const storyPromises = data.slice(0,15).map(storyId => {
                const storyURL = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`
                return fetch(storyURL).then(res => res.json())

            })
            Promise.all(storyPromises).then(data =>{
                setNews(data)
                setfilterNews(data)
            })
        })
    }

    const handleChange = (filtervalue) => {
        setFilter(filtervalue)
    }



    return(
        <div>
            <h2>THIS IS THE GREATEST NEWS APP. EVER. PERIOD</h2>
            <NewsForm filter={filter} handleChange={handleChange}/>
            <LastestStory news={filterNews}/>
        </div>
    )

}

export default NewsContainer