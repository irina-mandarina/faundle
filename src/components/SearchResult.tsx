import React, {Component, useState} from "react";

const SearchResults: React.FC<SearchResultProps> = ( props: SearchResultProps, context ) => {
    const handleResultClick = () => {
        props.onResultClick(props.animalSpecie);
    }
    return <div onClick={handleResultClick}>
        {props.animalSpecie}
    </div>

}

export default SearchResults