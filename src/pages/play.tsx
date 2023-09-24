import * as React from "react";
import {PageProps} from "gatsby";
import Layout from "../layouts/default";
import { useDispatch, useSelector} from "react-redux";
import {addGuess, init, selectRandomAnimal} from "../store/animalStore";
import SearchBar from "../components/SearchBar";
import {useEffect} from "react";
import AnimalRow from "../components/AnimalRow";
import PlayAgainButton from "../components/PlayAgainButton";
import AnimalCharacteristicsHeader from "../components/AnimalCharacteristicsHeader";


const PlayPage: React.FC<PageProps> = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(init());
    }, []);

    const targetAnimal = useSelector((state: any) => state.animalStore.targetAnimal);
    const allAnimals = useSelector((state: any) => state.animalStore.animals);
    const guesses = useSelector((state: any) => state.animalStore.guesses);

    const handleSelect = (animalSpecie: string) => {
        // @ts-ignore
        dispatch(addGuess(animalSpecie))
    }

    return (
        <Layout>
            {
                targetAnimal && allAnimals &&
                <div className="flex flex-col w-full h-full">
                        Target: {targetAnimal?.specie}
                    <SearchBar
                        options={
                            allAnimals
                                ?.filter((animal: Animal) => !guesses.includes(animal.specie))
                                ?.map((animal: Animal) => animal.specie)
                        }
                        onSelect={handleSelect}/>

                    <div className="w-1/2 mx-auto overflow-y-auto m-3 p-2">
                        <AnimalCharacteristicsHeader />

                        {
                            guesses?.map((animalSpecie: string) =>
                                <AnimalRow
                                    key={animalSpecie}
                                    animalSpecie={animalSpecie}/>
                            )
                        }
                    </div>


                    {
                        (guesses.includes(targetAnimal.specie)) &&
                        <PlayAgainButton/>
                    }
                </div>
            }
        </Layout>
    )
}

export default PlayPage
