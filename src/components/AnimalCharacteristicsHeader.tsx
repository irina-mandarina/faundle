import React, {Component} from "react";
import {useSelector} from "react-redux";
import CharacteristicBalloon from "./CharacteristicBalloon";

const AnimalCharacteristicsHeader: React.FC = ( props, context ) => {
    const animal = useSelector((state: any) =>
        state.animalStore.animals[0])

    return <div className="border-amber-50 p-3 bg-[#D9D9D9]/[.35] rounded-xl">
        <div className="flex justify-between w-full">
            <div className="text-center my-auto text-[#080236FF] font-jockey text-[14pt] w-[60px]">
                Animal
            </div>
            {
                animal.characteristics.map((characteristic: Characteristic) =>
                    <div className="text-center my-auto text-[#080236FF] font-jockey text-[14pt] w-[60px]">
                        {characteristic.name}
                    </div>
                )
            }
        </div>
    </div>

}

export default AnimalCharacteristicsHeader