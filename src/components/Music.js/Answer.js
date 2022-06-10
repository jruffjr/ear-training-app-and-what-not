import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { musicdataActions } from "../../store/Music_Data-slice";
import "../Main.scss";



const Answer = () => {
    const dispatch = useDispatch();
    const measures = useSelector((state) => state.musicdata.clickedshowAnswer)
    const clickedshowAnswer = useSelector((state) => state.musicdata.clickedshowAnswer)
    return (
        <react className="fragment">
            <button onClick= {()=> dispatch(musicdataActions.toggle())}className="menubuttons">
                {clickedshowAnswer == true? "Hide Answer": "Show Answer"}
            </button>
            
            
        </react>
    )
}


export default Answer;