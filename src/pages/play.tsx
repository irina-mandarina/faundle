import * as React from "react";
import {PageProps} from "gatsby";
import Layout from "../layouts/default";
import { useDispatch, useSelector} from "react-redux";
import {addGuess, init, selectRandomAnimal} from "../store/animalStore";
import SearchBar from "../components/SearchBar";
import {useEffect} from "react";
import AnimalRow from "../components/AnimalRow";
import PlayAgainButton from "../components/PlayAgainButton";


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
                <div className="flex w-full h-full">
                    <div className="mx-auto">
                        <button className="p-4 border border-amber-50 rounded-md m-4"
                                onClick={() => dispatch(selectRandomAnimal())}>select
                        </button>
                        Target: {targetAnimal?.specie}

                        <SearchBar
                            options={
                                allAnimals
                                    ?.filter((animal: Animal) => !guesses.includes(animal.specie))
                                    ?.map((animal: Animal) => animal.specie)
                            }
                            onSelect={handleSelect}/>

                        {
                            guesses?.map((animalSpecie: string) =>
                                <AnimalRow
                                    key={animalSpecie}
                                    animalSpecie={animalSpecie}/>
                            )
                        }

                        {
                            (guesses.includes(targetAnimal.specie)) &&
                            <PlayAgainButton/>
                        }
                    </div>
                </div>
            }
        </Layout>
    )
}

export default PlayPage
