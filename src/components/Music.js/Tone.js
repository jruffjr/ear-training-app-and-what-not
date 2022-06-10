import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { musicdataActions } from "../../store/Music_Data-slice";
import "../Main.scss";

const Tone = () => {
    const dispatch = useDispatch();
    const tone = useSelector((state) => state.musicdata.tone);

    return(
        <react className="fragment">
            <div className="dis_men">
            <h1>tone</h1>
            <div>{tone}</div>
            <button className="menubuttons"onClick={() => dispatch(musicdataActions.pianotone())}>Piano</button>
            <button className="menubuttons"onClick={() => dispatch(musicdataActions.keyboardtone())}>Electric Keyboard</button>
            </div>
        </react>
        
    )

}

export default Tone;