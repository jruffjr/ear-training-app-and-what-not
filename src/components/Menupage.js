import { useSelector, useDispatch } from "react-redux";
import { startmenuActions } from "../store/Start_Menu-slice";
import React from "react";
import "./Main.scss";
import Collection from "./Collection";



const Menupage = () => {
    const dispatch = useDispatch();
    const pagestate = useSelector((state) => state.startmenu.pagestate);
    const category = useSelector((state) => state.startmenu.category);
   
    
    

    return (
        <react className="fragment">
            <Collection/>
            <svg 
                className={
                pagestate=="onload"? "hidden": 
                pagestate=="introtobody"? "backbutton_I-B":
                pagestate=="bodytointro"? "backbutton_B-I":
                pagestate=="bodytoend"? "backbutton_B-E":
                pagestate=="endtobody"? "backbutton_E-B": "hidden"
            } onClick={() => dispatch(startmenuActions.bodytointro())} width="258" height="200" viewBox="0 0 258 200"  xmlns="http://www.w3.org/2000/svg">
            <g id="eigth" >
            <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M91 0H103H246H258V159H257.612C257.868 160.475 258 161.976 258 163.5C258 183.658 234.943 200 206.5 200C178.057 200 155 183.658 155 163.5C155 143.342 178.057 127 206.5 127C222.364 127 236.553 132.084 246 140.078V19H103V158.5V159H102.995C102.618 178.928 79.7071 195 51.5 195C23.0573 195 0 178.658 0 158.5C0 138.342 23.0573 122 51.5 122C67.3641 122 81.5529 127.084 91 135.078V0Z" />
            </g>
            </svg>
            


            <svg  className={
                pagestate=="onload"? "hidden": 
                pagestate=="introtobody"? "commencebutton_I-B":
                pagestate=="bodytointro"? "commencebutton_B-I":
                pagestate=="bodytoend"? "commencebutton_B-E":
                pagestate=="endtobody"? "commencebutton_E-B": "hidden"
            } onClick={() => dispatch(startmenuActions.bodytoend())} width="110" height="206" viewBox="0 0 110 206"  xmlns="http://www.w3.org/2000/svg">
            <g >
            <path  fill-rule="evenodd" clip-rule="evenodd" d="M110 0H100V153.234C90.0463 144.625 73.6016 139 55 139C24.6243 139 0 153.998 0 172.5C0 191.002 24.6243 206 55 206C85.3757 206 110 191.002 110 172.5C110 171.318 109.9 170.15 109.703 169H110V0Z" />
            </g>
            </svg>

            <svg  className={
                pagestate=="onload"? "hidden" :
                pagestate=="introtobody"? "pitch_I-B": 
                pagestate=="bodytointro"? "pitch_B-I":
                pagestate=="bodytoend"? "pitch_B-E" :
                pagestate=="endtobody"? "pitch_E-B": "hidden"
            } onClick={() => dispatch(startmenuActions.pitch())} width="110" height="206" viewBox="0 0 110 206"  xmlns="http://www.w3.org/2000/svg">
            <g >
            <path  fill-rule="evenodd" clip-rule="evenodd" d="M110 0H100V153.234C90.0463 144.625 73.6016 139 55 139C24.6243 139 0 153.998 0 172.5C0 191.002 24.6243 206 55 206C85.3757 206 110 191.002 110 172.5C110 171.318 109.9 170.15 109.703 169H110V0Z" />
            </g>
            </svg>

            <svg  className={
                pagestate=="onload"? "hidden" :
                pagestate=="introtobody"? "rhythm_I-B": 
                pagestate=="bodytointro"? "rhythm_B-I":
                pagestate=="bodytoend"? "rhythm_B-E":
                pagestate=="endtobody"? "rhythm_E-B":"hidden"
            } onClick={() => dispatch(startmenuActions.rhythm())} width="110" height="206" viewBox="0 0 110 206"  xmlns="http://www.w3.org/2000/svg">
            <g >
            <path  fill-rule="evenodd" clip-rule="evenodd" d="M110 0H100V153.234C90.0463 144.625 73.6016 139 55 139C24.6243 139 0 153.998 0 172.5C0 191.002 24.6243 206 55 206C85.3757 206 110 191.002 110 172.5C110 171.318 109.9 170.15 109.703 169H110V0Z" />
            </g>
            </svg>

            <svg  className={
                pagestate=="onload"? "hidden" :
                pagestate=="introtobody"? "tempo_I-B": 
                pagestate=="bodytointro"? "tempo_B-I":
                pagestate=="bodytoend"? "tempo_B-E":
                pagestate=="endtobody"? "tempo_E-B":""
            } onClick={() => dispatch(startmenuActions.tempo())} width="110" height="206" viewBox="0 0 110 206"  xmlns="http://www.w3.org/2000/svg">
            <g >
            <path  fill-rule="evenodd" clip-rule="evenodd" d="M110 0H100V153.234C90.0463 144.625 73.6016 139 55 139C24.6243 139 0 153.998 0 172.5C0 191.002 24.6243 206 55 206C85.3757 206 110 191.002 110 172.5C110 171.318 109.9 170.15 109.703 169H110V0Z" />
            </g>
            </svg>

            <svg  className={
                pagestate=="onload"? "hidden" :
                pagestate=="introtobody"? "meter_I-B": 
                pagestate=="bodytointro"? "meter_B-I":
                pagestate=="bodytoend"? "meter_B-E":
                pagestate=="endtobody"? "meter_E-B":"hidden"
            } onClick={() => dispatch(startmenuActions.meter())} width="110" height="206" viewBox="0 0 110 206"  xmlns="http://www.w3.org/2000/svg">
            <g >
            <path  fill-rule="evenodd" clip-rule="evenodd" d="M110 0H100V153.234C90.0463 144.625 73.6016 139 55 139C24.6243 139 0 153.998 0 172.5C0 191.002 24.6243 206 55 206C85.3757 206 110 191.002 110 172.5C110 171.318 109.9 170.15 109.703 169H110V0Z" />
            </g>
            </svg>

            <svg  className={
                pagestate=="onload"? "hidden" :
                pagestate=="introtobody"? "measures_I-B": 
                pagestate=="bodytointro"? "measures_B-I":
                pagestate=="bodytoend"? "measures_B-E":
                pagestate=="endtobody"? "measures_E-B":"hidden"
            } onClick={() => dispatch(startmenuActions.measures())} width="110" height="206" viewBox="0 0 110 206"  xmlns="http://www.w3.org/2000/svg">
            <g >
            <path  fill-rule="evenodd" clip-rule="evenodd" d="M110 0H100V153.234C90.0463 144.625 73.6016 139 55 139C24.6243 139 0 153.998 0 172.5C0 191.002 24.6243 206 55 206C85.3757 206 110 191.002 110 172.5C110 171.318 109.9 170.15 109.703 169H110V0Z" />
            </g>
            </svg>

            <svg  className={
                pagestate=="onload"? "hidden" :
                pagestate=="introtobody"? "tone_I-B": 
                pagestate=="bodytointro"? "tone_B-I":
                pagestate=="bodytoend"? "tone_B-E":
                pagestate=="endtobody"? "tone_E-B":"hidden"
            } onClick={() => dispatch(startmenuActions.tone())} width="110" height="206" viewBox="0 0 110 206"  xmlns="http://www.w3.org/2000/svg">
            <g >
            <path  fill-rule="evenodd" clip-rule="evenodd" d="M110 0H100V153.234C90.0463 144.625 73.6016 139 55 139C24.6243 139 0 153.998 0 172.5C0 191.002 24.6243 206 55 206C85.3757 206 110 191.002 110 172.5C110 171.318 109.9 170.15 109.703 169H110V0Z" />
            </g>
            </svg>

            <svg  className={
                pagestate=="onload"? "hidden" :
                pagestate=="introtobody"? "voicings_I-B": 
                pagestate=="bodytointro"? "voicings_B-I":
                pagestate=="bodytoend"? "voicings_B-E":
                pagestate=="endtobody"? "voicings_E-B":"hidden"
            } onClick={() => dispatch(startmenuActions.voicings())} width="110" height="206" viewBox="0 0 110 206" xmlns="http://www.w3.org/2000/svg">
            <g >
            <path  fill-rule="evenodd" clip-rule="evenodd" d="M110 0H100V153.234C90.0463 144.625 73.6016 139 55 139C24.6243 139 0 153.998 0 172.5C0 191.002 24.6243 206 55 206C85.3757 206 110 191.002 110 172.5C110 171.318 109.9 170.15 109.703 169H110V0Z" />
            </g>
            </svg>

            <svg  className={
                pagestate=="onload"? "hidden" :
                pagestate=="introtobody"? "answer_I-B": 
                pagestate=="bodytointro"? "answer_B-I":
                pagestate=="bodytoend"? "answer_B-E":
                pagestate=="endtobody"? "answer_E-B":"hidden"
            } onClick={() => dispatch(startmenuActions.answer())} width="110" height="206" viewBox="0 0 110 206" xmlns="http://www.w3.org/2000/svg">
            <g >
            <path  fill-rule="evenodd" clip-rule="evenodd" d="M110 0H100V153.234C90.0463 144.625 73.6016 139 55 139C24.6243 139 0 153.998 0 172.5C0 191.002 24.6243 206 55 206C85.3757 206 110 191.002 110 172.5C110 171.318 109.9 170.15 109.703 169H110V0Z" />
            </g>
            </svg>



            


            
        </react>


            
        
    )
};


export default Menupage;