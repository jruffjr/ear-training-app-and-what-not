import { createSlice } from "@reduxjs/toolkit";


const initialCompState = {category: "pitch", pagestate: "onload"}

const startmenu = createSlice ({
    name: 'startmenu',
    initialState: initialCompState,
    reducers: {

        
        introtobody(state) {
            state.pagestate = "introtobody";
        },
        bodytointro(state) {
            state.pagestate = "bodytointro";
        },
        bodytoend(state) {
            state.pagestate = "bodytoend";
        },
        endtobody(state){
            state.pagestate = "endtobody";
        },

        rhythm(state) {
            state.category = "rhythm";
        },
        pitch(state) {
            state.category ="pitch";
        },
        tempo(state) {
            state.category = "tempo";
        },
        voicings(state) {
            state.category = "voicings";
        },
        measures(state) {
            state.category = "measures";
        },
        tone(state) {
            state.category = "tone";
        },
        meter(state) {
            state.category = "meter";
        },
        answer(state) {
            state.category = "answer";
        }

    }
});

export const startmenuActions = startmenu.actions;
export default startmenu.reducer;