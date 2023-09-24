import React, {Component} from "react";
import {useSelector} from "react-redux";
import CharacteristicBalloon from "./CharacteristicBalloon";

const AnimalRow: React.FC<AnimalRowProps> = ( props: AnimalRowProps, context ) => {
    const targetAnimal = useSelector((state: any) => state.animalStore.targetAnimal);
    const animal = useSelector((state: any) =>
        state.animalStore.animals.filter((a: Animal) => a.specie === props.animalSpecie)[0])

    return <div className="border-amber-50 p-3 bg-[#D9D9D9]/[.35] rounded-xl my-2">
        <div className="flex justify-between w-full">
            <div className="text-center my-auto text-[#080236FF] font-jockey text-[18pt] w-[60px]">
                {props.animalSpecie}
            </div>

            {
                animal.characteristics.map((characteristic: Characteristic) => {
                    if (characteristic.value === targetAnimal.characteristics
                        .filter((targetCharacteristic: Characteristic) =>
                            targetCharacteristic.name === characteristic.name)[0].value
                    ) {
                        return (
                            <CharacteristicBalloon characteristicValue={characteristic.value} correct={true} />
                        )
                    }
                    return (
                        <CharacteristicBalloon characteristicValue={characteristic.value} correct={false} />
                    )
                })
            }
        </div>
    </div>

}

export default AnimalRow