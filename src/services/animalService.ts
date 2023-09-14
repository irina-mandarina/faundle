import animalsCSV from "../animals";
import Animal from "../models/animal";

function parseCSVData(): Animal[] {
    let result = []
    let animalsArr = animalsCSV.split('\n')
    let characteristicNames = animalsArr[0].split(',')

    for (let line = 1; line < animalsArr.length; line++) {
        const values = animalsArr[line].split(',')

        let animal: Animal = {
            specie: values[0],
            characteristics: []
        }

        for (let row = 1; row < values.length; row++) {
            animal.characteristics.push({
                name: characteristicNames[row],
                value: values[row]
            })
        }

        result.push(animal)
    }
    return result
}

export default parseCSVData