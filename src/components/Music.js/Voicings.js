import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { musicdataActions } from "../../store/Music_Data-slice";
import "../Main.scss";

const Voicings = () => {
    const dispatch = useDispatch();
    const voicings = useSelector((state) => state.musicdata.voicings);

    return(
        <react className="fragment">
            <div className="dis_men">
            <h1>voicings</h1>
            <div>{voicings}</div>
            <button className="menubuttons"onClick={() => dispatch(musicdataActions.increasevoicings())}>increase voicings</button>
            <button className="menubuttons"onClick={() => dispatch(musicdataActions.decreasevoicings())}>decrease voicings</button>
            </div>
        </react>
        
    )

}

export default Voicings;