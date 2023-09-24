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

    return <div className="mx-auto w-1/3 m-3">
        <input
            value={inputValue}
            onChange={onInputChange}
            type="text"
            placeholder="Guess the animal"
            className="font-staatliches text-blue-950 p-2 w-full rounded-tl-xl rounded-br-xl bg-[#D9D9D9] bg-green-50 focus:outline-none focus:drop-shadow-[0_1rem_1rem_rgba(217,217,217,0.2)] duration-300 "
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