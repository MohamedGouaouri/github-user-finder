import React from "react";
import '../assets/styles/SearchBar.css'
import {FaSearch} from "react-icons/fa";

const SearchBar = () => {
    return <div className={"search-bar"}>
        <div className={"search-icon"}>
            <FaSearch />
        </div>
        <input
            className={"search-input"}
            placeholder={"Search Github username ..."}
        >
        </input>

        <button className={"search-btn"}>
            Search
        </button>
    </div>
}

export default SearchBar