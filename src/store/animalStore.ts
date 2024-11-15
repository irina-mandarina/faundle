import {createSlice, Slice} from "@reduxjs/toolkit";
import parseCSVData from "../services/animalService";

// @ts-ignore
const animalSlice: Slice<StoreState, { init: (state: any) => void; addGuess: (state: any, action: any) => void; selectRandomAnimal: (state: any) => void }, string> = createSlice({
    name: "animalStore",
    initialState: {
        animals: [] as Animal[],
        guesses: [] as string[],
        targetAnimal: null as Animal | null
    },
    reducers: {
        init: (state) => {
            if (!state.animals || !state.animals.length) {
                state.animals = parseCSVData();
            }
            if (!state.targetAnimal) {
                animalSlice.caseReducers.selectRandomAnimal(state)
            }
            console.log("Store initialised")
        },
        addGuess: (state, action: {payload: string}) => {
            if (!state.guesses.includes(action.payload)) {
                state.guesses.push(action.payload);
            }
        },
        selectRandomAnimal: (state) => {
            if (!state.animals || !state.animals.length) {
                animalSlice.caseReducers.init(state)
            }
            state.targetAnimal = state.animals[Math.floor(Math.random() * state.animals.length - 1)];
            console.log("Selected random animal: ", state.targetAnimal.specie)
            state.guesses = []
        },
        reset: (state: any) => {
            animalSlice.caseReducers.selectRandomAnimal(state)
            state.guesses = []
        }
    }
});

// Action creators are generated for each case reducer function
export const { init, addGuess, selectRandomAnimal } = animalSlice.actions;

export const animalReducer = animalSlice.reducer
