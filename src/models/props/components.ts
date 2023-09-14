type MainScreenButtonProps = {
    text: string
    link: string
}

type SearchBarProps = {
    options: string[]
    onSelect: Function
}

type SearchResultProps = {
    animalSpecie: string
    onResultClick: Function
}

type AnimalRowProps = {
    animalSpecie: string
}