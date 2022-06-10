import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { musicdataActions } from "../../store/Music_Data-slice";
import "../Main.scss";




const Pitch = () => {
    const dispatch = useDispatch();
    const pitch_range_max = useSelector((state) => state.musicdata.pitch_range_max);
    const pitch_range_min = useSelector((state) => state.musicdata.pitch_range_min);
    
    var soundstring = [                                       "A0", "Bb0", "B0", 
    "C1", "Db1", "D1", "Eb1", "E1", "F1", "Gb1", "G1", "Ab1", "A1", "Bb1", "B1",
    "C2", "Db2", "D2", "Eb2", "E2", "F2", "Gb2", "G2", "Ab2", "A2", "Bb2", "B2",
    "C3", "Db3", "D3", "Eb3", "E3", "F3", "Gb3", "G3", "Ab3", "A3", "Bb3", "B3",
    "C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G4", "Ab4", "A4", "Bb4", "B4",
    "C5", "Db5", "D5", "Eb5", "E5", "F5", "Gb5", "G5", "Ab5", "A5", "Bb5", "B5",
    "C6", "Db5", "D6", "Eb6", "E6", "F6", "Gb6", "G6", "Ab6", "A6", "Bb6", "B6",
    "C7", "Db5", "D7", "Eb7", "E7", "F7", "Gb7", "G7", "Ab7", "A7", "Bb7", "B7",
    "C8"                         
]


    return (
        <react className="fragment">
            <div className="dis_men">
            <h2>Pitch Range</h2>
            <h3>{soundstring[pitch_range_max]}</h3>
            <h3>{soundstring[pitch_range_min]}</h3> 
            <button className="menubuttons" onClick={() => dispatch(musicdataActions.pitch_max_decr())}>decrease max</button>
            <button className="menubuttons" onClick={() => dispatch(musicdataActions.pitch_min_decr())}>decrease min</button>
            <button className="menubuttons" onClick={() => dispatch(musicdataActions.pitch_min_incr())}>increase min</button>
            <button className="menubuttons" onClick={() => dispatch(musicdataActions.pitch_max_incr())}>increase max</button>
            </div>
        </react>
    )
};

export default Pitch;