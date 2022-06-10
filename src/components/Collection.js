import { useSelector, useDispatch } from "react-redux";
import { startmenuActions } from "../store/Start_Menu-slice";
import React from "react";
import "./Main.scss";

import Pitch from "./Music.js/Pitch";
import Measures from "./Music.js/Measures";
import Meter from "./Music.js/Meter";
import Rhythm from "./Music.js/Rhythm";
import Tempo from "./Music.js/Tempo";
import Tone from "./Music.js/Tone";
import Voicings from "./Music.js/Voicings";
import Answer from "./Music.js/Answer";





const Collection = () => {
    const category = useSelector((state) => state.startmenu.category);
    const pagestate = useSelector((state) => state.startmenu.pagestate);
     

    return(
        <div className={pagestate=="introtobody"||pagestate=="endtobody"?"infodiv_coming":"hidden"}>{
            category == "pitch" ? <Pitch/> :
            category == "measures" ? <Measures/> :
            category == "meter" ? <Meter/> :
            category == "rhythm" ? <Rhythm/> :
            category == "tempo" ? <Tempo/> :
            category == "voicings" ? <Voicings/> :
            category == "tone" ? <Tone/> : 
            category == "answer" ? <Answer/> : "error"}</div>
        
    )
};

export default Collection;




