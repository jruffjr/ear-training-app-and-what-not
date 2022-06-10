import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { musicdataActions } from "../../store/Music_Data-slice";
import "../Main.scss";

const Rhythm = () => {
    const dispatch = useDispatch();
    const rhythm = useSelector((state) => state.musicdata.rhythm);
    
    return(
        <react className="fragment">
            <div className="dis_men">
            <h1>Rhythm</h1>
            <h2>{
            rhythm==4?"Quarter notes?":
            rhythm==8?"Eigth notes?":
            rhythm==2?"Half notes?":
            rhythm==1?"Whole notes?":"error"}</h2>
            <button className="menubuttons" onClick={() => dispatch(musicdataActions.rhythmeighth())}>Eigths</button>
            <button className="menubuttons" onClick={() => dispatch(musicdataActions.rhythmquarter())}>Quarters</button>
            <button className="menubuttons" onClick={() => dispatch(musicdataActions.rhythmhalf())}>Halfs</button>
            <button className="menubuttons" onClick={() => dispatch(musicdataActions.rhythmwhole())}>Wholes</button>
            </div>
        </react>
    )

}

export default Rhythm;