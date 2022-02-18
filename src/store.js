import { configureStore, createSlice } from "@reduxjs/toolkit";

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
      state.push({ title: action.payload, id: Date.now() });
    },
    addIndustry: (state, action) => {
      state.push({ industry: action.payload, id: Date.now() });
    },
    addPersonalityTitle: (state, action) => {
      state.push({ personalityTitle: action.payload, id: Date.now() });
    },
    addPersonality1: (state, action) => {
      state.push({ personality1: action.payload, id: Date.now() });
    },
    addPersonality2: (state, action) => {
      state.push({ personality2: action.payload, id: Date.now() });
    },
    addPersonality3: (state, action) => {
      state.push({ personality3: action.payload, id: Date.now() });
    },
    addPersonality4: (state, action) => {
      state.push({ personality4: action.payload, id: Date.now() });
    },
    addGoal: (state, action) => {
        state.push({ addGoal: action.payload, id: Date.now() });
    },
    addFrustration: (state, action) => {
        state.push({ addFrustration: action.payload, id: Math.random() });
    },
    addStory: (state, action) => {
        state.push({ addStory: action.payload, id: Math.random()});
    },
    addKeywords: (state, action) => {
        state.push({ addKeywords: action.payload, id: Math.random()});
    },
    remove: (state, action) => 
        state.filter(goal => goal.id !== action.payload)
  },
});

export const {
  addName,
  addAge,
  addJob,
  addSex,
  addImage,
  addTitle,
  addIndustry,
  addPersonality1,
  addPersonality2,
  addPersonality3,
  addPersonality4,
  addPersonalityTitle,
  addGoal,
  addFrustration,
  addStory,
  addKeywords,
  remove
} = persona.actions;
export default configureStore({ reducer: persona.reducer });
