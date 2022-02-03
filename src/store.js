import { configureStore, createSlice } from '@reduxjs/toolkit';

const persona = createSlice({
    name: "personaGenerator",
    initialState: [],
    reducers: {
        addName: (state, action) => {
            state.push({ name: action.payload, id: Date.now() });
        },
        addAge: (state, action) => {
            state.push({ age: action.payload, id: Date.now() });
        },
        addJob: (state, action) => {
            state.push({ job: action.payload, id: Date.now() });
        },
        addSex: (state, action) => {
            state.push({ sex: action.payload, id: Date.now() });
        },
        addImage: (state, action) => {
            state.push({ images: action.payload, id: Date.now() });
        },
        addTitle: (state, action) => {
            state.push({ title: action.payload, id: Date.now()});
        },
        addIndustry: (state, action) => {
            state.push({ industry: action.payload, id: Date.now()});
        }
    }
});

export const {addName, addAge, addJob, addSex, addImage, addTitle, addIndustry} = persona.actions;
export default configureStore({reducer: persona.reducer});