import React from "react";


const Story = ({random}) => {


    return (
        <div>
            <ul>
            <p><a href={random.url}>{random.title}</a></p>
            </ul>
        </div>
        
    )
}

export default Story;