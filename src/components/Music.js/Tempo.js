import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { musicdataActions } from "../../store/Music_Data-slice";
import "../Main.scss";

const Tempo = () => {
    const dispatch = useDispatch();
    const tempo = useSelector((state) => state.musicdata.tempo);

    return(
        <react className="fragment">
            <div className="dis_men">
            <h1>Tempo</h1>
            <div>{tempo} bpm</div>
            <button className="menubuttons"onClick={() => dispatch(musicdataActions.increasetempo())}>Increase</button>
            <button className="menubuttons"onClick={() => dispatch(musicdataActions.decreasetempo())}>Decrease</button>
            </div>
        </react>
        
        
        
    )
}

export default Tempo;