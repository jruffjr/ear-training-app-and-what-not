import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { musicdataActions } from "../../store/Music_Data-slice";
import "../Main.scss";

const Measures = () => {
    const dispatch = useDispatch();
    const measures = useSelector((state) => state.musicdata.measures)

    return(
        <react className="fragment">
            <div className="dis_men">
            <h2>Measures</h2>
            <div>{measures}</div>
            <button className="menubuttons"onClick={() => dispatch(musicdataActions.increasemeasures())}>increase measures</button>
            <button className="menubuttons"onClick={() => dispatch(musicdataActions.decreasemeasures())}>decrease measures</button>
            </div>
        </react>
        
    )

}


export default Measures;