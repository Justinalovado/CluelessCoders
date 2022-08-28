import React from "react";
import Button from "./Button";

const Search  = ({}) => {
    return (
        <div>
            <input 
                type="text" 
                placeholder="Search"
                className="search-bar"
            />
            <input type='submit' value='Search' className='search-button'/>
        </div>
    )
}
export default Search;