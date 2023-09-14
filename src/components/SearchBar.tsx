import React, {Dispatch, SetStateAction, useState} from "react";
import SearchResult from "./SearchResult";

const SearchBar: React.FC<SearchBarProps> = ( props: SearchBarProps) => {
    const [inputValue, setInputValue]: [string, Dispatch<SetStateAction<string>>] = useState('')
    const [results, setResults]: [string[], Dispatch<SetStateAction<string[]>>] = useState([] as string[])

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
        if (event.target.value && event.target.value.length) {
            setResults(
                props.options
                ?.filter((animal: string) =>
                    animal.toLowerCase().startsWith(event.target.value))
            )
        }
        else {
            setResults([])
        }
    }

    const handleResultClick = (animalSpecie: string) => {
        setInputValue('')
        setResults([])
        props.onSelect(animalSpecie)
    }

    return <div>
        <input
            value={inputValue}
            onChange={onInputChange}
            type="text"
            placeholder="Guess the animal"
            className="text-blue-950 bg-green-50 focus:outline-none focus:drop-shadow-md"
        />

        {
            results?.map((animal) =>
                <SearchResult
                    onResultClick={handleResultClick}
                    key={animal}
                    animalSpecie={animal} />
            )
        }
    </div>

}

export default SearchBar