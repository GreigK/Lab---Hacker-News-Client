import React from "react";

const NewsForm = ({filter, handleChange}) => {

    const handleInputChange = (event) => {
        const filterValue=event.target.value
        handleChange(filterValue)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit}>
        <input onChange={handleInputChange}
            type="text"
            value={filter}
            placeholder="Search blog posts" 
        />
    </form>
    )
}

export default NewsForm;