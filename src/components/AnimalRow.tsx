import React, {Component} from "react";
import {useSelector} from "react-redux";

const AnimalRow: React.FC<AnimalRowProps> = ( props: AnimalRowProps, context ) => {
    const targetAnimal = useSelector((state: any) => state.animalStore.targetAnimal);
    const animal = useSelector((state: any) =>
        state.animalStore.animals.filter((a: Animal) => a.specie === props.animalSpecie)[0])

    return <div className="border-amber-50 p-4 m-2">
        <div className="flex">
            {
                animal.characteristics.map((characteristic: Characteristic) => {
                    if (characteristic.value === targetAnimal.characteristics
                        .filter((characteristic2: Characteristic) =>
                            characteristic2.name === characteristic.name)[0].value
                    ) {
                        return (<div className="p-2 text-green-600">
                            {characteristic.value}
                        </div>)
                    }
                    return (<div className="p-2 text-red-600">
                        {characteristic.value}
                    </div>)
                })
            }
        </div>
    </div>

}

export default AnimalRow