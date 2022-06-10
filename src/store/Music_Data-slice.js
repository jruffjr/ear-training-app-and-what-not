import { createSlice } from "@reduxjs/toolkit";


const initialMusicState = {
    tempo: 60, 
    meter_top: 4, meter_bottom: 4, 
    measures: 1, 
    tone: "piano",
    pitch_range_min: 20, pitch_range_max: 75, 
    voicings: 1,
    rhythm: 4,
    clickedshowAnswer: false,  
}

const musicdata = createSlice ({
    name: 'musicdata',
    initialState: initialMusicState,
    reducers: {
        toggle(state) {
            state.clickedshowAnswer = !state.clickedshowAnswer;
        },
        /*tempo methods */
        increasetempo(state) {
            state.tempo == 180? state.tempo = 180 :
            state.tempo++;
        },
        decreasetempo(state) {
            state.tempo == 40? state.tempo = 40 : 
            state.tempo--;
        },

        /*meter methods */
        increasemetertop(state) {
            state.meter_top == 9? state.meter_top = 9 :
            state.meter_top++;
        },
        decreasemetertop(state) {
            state.meter_top == 1? state.meter_top = 1 :
            state.meter_top--;
        },
        meterquarter(state) {
            state.meter_bottom = 4
        },
        metereighth(state) {
            state.meter_bottom = 8
        },
        meterhalf(state) {
            state.meter_bottom = 2
        },
        
        /*measure methods*/
        increasemeasures(state) {
            state.measures == 12? state.measures = 12 :
            state.measures++;
        },
        decreasemeasures(state) {
            state.measures == 1? state.measures = 1 :
            state.measures--;
        },

        /*voicings methods*/
        increasevoicings(state) {
            state.voicings == 4? state.voicings = 4 :
            state.voicings++;
        },
        decreasevoicings(state) {
            state.voicings == 1? state.voicings= 1 :
            state.voicings--;
        },

        /*rhythm methods*/
        rhythmeighth(state) {
            state.rhythm = 8;
        },
        rhythmquarter(state) {
            state.rhythm = 4;
        },
        rhythmhalf(state) {
            state.rhythm = 2;
        },
        rhythmwhole(state) {
            state.rhythm = 1;
        },

        /*tone methods*/
        pianotone(state) {
            state.tone = "piano";
        },
        keyboardtone(state) {
            state.tone = "keyboard";
        },

        /*pitch methods*/
        pitch_min_decr(state) {
            state.pitch_range_min == 0? state.pitch_range_min = 0 :
            state.pitch_range_min--;
        },
        pitch_min_incr(state) {
            state.pitch_range_min == state.pitch_range_max - 12? state.pitch_range_min = state.pitch_range_max - 12 :
            state.pitch_range_min++;
        },
        pitch_max_decr(state) {
            state.pitch_range_max == state.pitch_range_min + 12? state.pitch_range_max = state.pitch_range_min + 12 :
            state.pitch_range_max--;
        },
        pitch_max_incr(state) {
            state.pitch_range_max == 87? state.pitch_range_max = 87 :
            state.pitch_range_max++;
        },
    }
});

export const musicdataActions = musicdata.actions;
export default musicdata.reducer;