import React from "react";
import Story from "./Story";

const LastestStory = ({news}) => {
    const newsItems = news.map((story, index) => {
        return <Story random={story} key = {index}/>
    })



    return (
        <div>
            <ul>
                {newsItems}
            </ul>
        </div>
    )
}


export default LastestStory;