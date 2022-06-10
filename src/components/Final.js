import { useSelector, useDispatch } from "react-redux";
import { startmenuActions } from "../store/Start_Menu-slice";
import { musicdataActions } from "../store/Music_Data-slice";
import React, { useState, useRef } from "react";
import "./Main.scss";




const Final = () => {
    const dispatch = useDispatch();
    const pagestate = useSelector((state) => state.startmenu.pagestate); 

    //this state value is not actually important, it just is a way to rerun the loop down below without changing anything
    const [reveal, setReveal] = useState(false);
    
    //initial state values from Music_Data-slice.js
    const clickedshowAnswer = useSelector((state) => state.musicdata.clickedshowAnswer);
    const tempo = useSelector((state) => state.musicdata.tempo);
    const meter_bottom = useSelector((state) => state.musicdata.meter_bottom);
    const meter_top = useSelector((state) => state.musicdata.meter_top);
    const measures = useSelector((state) => state.musicdata.measures);
    const tone = useSelector((state) => state.musicdata.tone);
    const pitch_range_max = useSelector((state) => state.musicdata.pitch_range_max);
    const pitch_range_min = useSelector((state) => state.musicdata.pitch_range_min);
    const voicings = useSelector((state) => state.musicdata.voicings);
    const rhythm = useSelector((state) => state.musicdata.rhythm);

    const Grandpiano = []
    for (let i=1; i<89; i++) {
        Grandpiano.push(i)
    }
    
    var Thefeel = ((60/tempo)*1000) / (rhythm/meter_bottom);
    var Yourarray = Grandpiano.slice(pitch_range_min, pitch_range_max);
    var Totaltime = Thefeel * (meter_top * measures);
    var Totallength = (measures*meter_top)*(rhythm/meter_bottom)

    var container_Array = []
    var container_string = []
    
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

    var answer = "| "
    
        
        for (let t=1; t<Totallength+1; t++) {
        
        var selector_Array = []
        var selector_string = []
        for (let i=0; i<voicings; i++) {
        
        var random = [Math.floor(Math.random() * Yourarray.length)]
        var randomset = Yourarray[random]
        
        selector_Array.push(randomset) 
        selector_string.push(randomset)
        Yourarray.splice(random, 1);
        }
        Yourarray = Grandpiano.slice(pitch_range_min, pitch_range_max);
        selector_Array.sort(function(a, b){return a-b})
        selector_string.sort(function(a, b){return a-b})
        container_Array.push(selector_Array)
        container_string.push(selector_string)        
    }

    for (let t=1; t<Totallength+1; t++) {
        selector_string = container_string[t-1]
        for (let i=0; i<voicings; i++) {
        answer += (soundstring[selector_string[i]]) += " " 
        }
        if (t % (meter_top * (rhythm/meter_bottom))  == 0) {
            answer += "| "
        }
        else {
            answer += "_ "
        }
    }

    

    

   
    

    
    //var music = music.join('__')

   
    
    
    


  /*setInterval(() => {
        var arr = []
        for (let i=0; i<voicings; i++) {
        
        var random = Math.floor(Math.random() * Yourarray.length)
        var randomset = Yourarray[random]
        
        arr.push(randomset) 
        Yourarray.splice(random, 1);
        }
        Yourarray = Array.slice(pitch_range_min, pitch_range_max);
        arr.sort(function(a, b){return a-b})
        document.writeln(arr)
    },Thefeel); */

   //audio 
   const A0 = useRef();
   const Bb0 = useRef();
   const B0 = useRef();
   const C1 = useRef();
   const Db1 = useRef();
   const D1 = useRef();
   const Eb1 = useRef();
   const E1 = useRef();
   const F1 = useRef();
   const Gb1 = useRef();
   const G1 = useRef();
   const Ab1 = useRef();
   const A1 = useRef();
   const Bb1 = useRef();
   const B1 = useRef();
   const C2 = useRef();
   const Db2 = useRef();
   const D2 = useRef();
   const Eb2 = useRef();
   const E2 = useRef();
   const F2 = useRef();
   const Gb2 = useRef();
   const G2 = useRef();
   const Ab2 = useRef();
   const A2 = useRef();
   const Bb2 = useRef();
   const B2 = useRef();
   const C3 = useRef();
   const Db3 = useRef();
   const D3 = useRef();
   const Eb3 = useRef();
   const E3 = useRef();
   const F3 = useRef();
   const Gb3 = useRef();
   const G3 = useRef();
   const Ab3 = useRef();
   const A3 = useRef();
   const Bb3 = useRef();
   const B3 = useRef();
   const C4 = useRef();
   const Db4 = useRef();
   const D4 = useRef();
   const Eb4 = useRef();
   const E4 = useRef();
   const F4 = useRef();
   const Gb4 = useRef();
   const G4 = useRef();
   const Ab4 = useRef();
   const A4 = useRef();
   const Bb4 = useRef();
   const B4 = useRef();
   const C5 = useRef();
   const Db5 = useRef();
   const D5 = useRef();
   const Eb5 = useRef();
   const E5 = useRef();
   const F5 = useRef();
   const Gb5 = useRef();
   const G5 = useRef();
   const Ab5 = useRef();
   const A5 = useRef();
   const Bb5 = useRef();
   const B5 = useRef();
   const C6 = useRef();
   const Db6 = useRef();
   const D6 = useRef();
   const Eb6 = useRef();
   const E6 = useRef();
   const F6 = useRef();
   const Gb6 = useRef();
   const G6 = useRef();
   const Ab6 = useRef();
   const A6 = useRef();
   const Bb6 = useRef();
   const B6 = useRef();
   const C7 = useRef();
   const Db7 = useRef();
   const D7 = useRef();
   const Eb7 = useRef();
   const E7 = useRef();
   const F7 = useRef();
   const Gb7 = useRef();
   const G7 = useRef();
   const Ab7 = useRef();
   const A7 = useRef();
   const Bb7 = useRef();
   const B7 = useRef();
   const C8 = useRef();

   const sound = [
                                            A0, Bb0, B0, 
    C1, Db1, D1, Eb1, E1, F1, Gb1, G1, Ab1, A1, Bb1, B1,
    C2, Db2, D2, Eb2, E2, F2, Gb2, G2, Ab2, A2, Bb2, B2,
    C3, Db3, D3, Eb3, E3, F3, Gb3, G3, Ab3, A3, Bb3, B3,
    C4, Db4, D4, Eb4, E4, F4, Gb4, G4, Ab4, A4, Bb4, B4,
    C5, Db5, D5, Eb5, E5, F5, Gb5, G5, Ab5, A5, Bb5, B5,
    C6, Db5, D6, Eb6, E6, F6, Gb6, G6, Ab6, A6, Bb6, B6,
    C7, Db5, D7, Eb7, E7, F7, Gb7, G7, Ab7, A7, Bb7, B7,
    C8]
   

  
 


    
      
var play_sounds = () => {
        
    var startTime = new Date().getTime();      
    var v = 0
           
    
        const interval = setInterval(() => {
            if(new Date().getTime() - startTime > (Totaltime + Thefeel)){
                clearInterval(interval);
                return;
            }
    
            selector_Array = container_Array[v]
    
            if(voicings==1){
                one();
            }
            if(voicings==2){
                two();
            }
            if(voicings==3){
                three();
            }
            if(voicings==4){
                four();
            }
            
            
            
            
            if (v + 1 == container_Array.length){clearInterval(interval)}
            v++
            
           
            }, Thefeel)   
           
       }

 
       var one = () =>{
        setTimeout(() => {sound[selector_Array[0]].current.currentTime=10}, (Thefeel *(.90)) )
        sound[selector_Array[0]].current.play();
    }
    
        var two = () =>{
            setTimeout(() => {sound[selector_Array[0]].current.currentTime=10}, (Thefeel *(.90)) )
            setTimeout(() => {sound[selector_Array[1]].current.currentTime=10}, (Thefeel *(.90)) )
            sound[selector_Array[0]].current.play();
            sound[selector_Array[1]].current.play();
        }
      
      
        var three = () =>{
            setTimeout(() => {sound[selector_Array[0]].current.currentTime=10}, (Thefeel *(.90)) )
            setTimeout(() => {sound[selector_Array[1]].current.currentTime=10}, (Thefeel *(.90)) )
            setTimeout(() => {sound[selector_Array[2]].current.currentTime=10}, (Thefeel *(.90)) )
            sound[selector_Array[0]].current.play();
            sound[selector_Array[1]].current.play();
            sound[selector_Array[2]].current.play();
        }
      
      
        var four = () =>{
            setTimeout(() => {sound[selector_Array[0]].current.currentTime=10}, (Thefeel *(.90)) )
            setTimeout(() => {sound[selector_Array[1]].current.currentTime=10}, (Thefeel *(.90)) )
            setTimeout(() => {sound[selector_Array[2]].current.currentTime=10}, (Thefeel *(.90)) )
            setTimeout(() => {sound[selector_Array[3]].current.currentTime=10}, (Thefeel *(.90)) )
            sound[selector_Array[0]].current.play();
            sound[selector_Array[1]].current.play();
            sound[selector_Array[2]].current.play();
            sound[selector_Array[3]].current.play();
        }
    
    

   

   

    return (
       <react className="fragment">
           
           <button className={
               pagestate=="bodytoend"? "backbutton2_B-E": 
               pagestate=="endtobody"? "backbutton2_E-B": "hidden"} 
                onClick={() => dispatch(startmenuActions.endtobody())}>go back</button>
          
           <button className={
               pagestate=="bodytoend"? "play_B-E": 
               pagestate=="endtobody"? "play_E-B": "hidden"} 
                onClick={play_sounds}>play</button>
           
           
           
           <button className={
               pagestate=="bodytoend"? "showanswer_B-E": 
               pagestate=="endtobody"? "showanswer_E-B": "hidden"} 
                onClick={() => setReveal(!reveal)}>Create New Sounds
           </button>

           <div className={pagestate=="bodytoend" && clickedshowAnswer==true? "answer": "hidden"}>
           {meter_top}<br/>{meter_bottom}{answer}
           </div>
           
            
           <audio ref={A0} src="Notes/01-A0-consolidated.wav"></audio>
           <audio ref={Bb0} src="Notes/02-Bb0-consolidated.wav"></audio>
           <audio ref={B0} src="Notes/03-B0-consolidated.wav"></audio>
           <audio ref={C1} src="Notes/04-C1-consolidated.wav"></audio>
           <audio ref={Db1} src="Notes/05-Db1-consolidated.wav"></audio>
           <audio ref={D1} src="Notes/06-D1-consolidated.wav"></audio>
           <audio ref={Eb1} src="Notes/07-Eb1-consolidated.wav"></audio>
           <audio ref={E1} src="Notes/08-E1-consolidated.wav"></audio>
           <audio ref={F1} src="Notes/09-F1-consolidated.wav"></audio>
           <audio ref={Gb1} src="Notes/10-Gb1-consolidated.wav"></audio>
           <audio ref={G1} src="Notes/11-G1-consolidated.wav"></audio>
           <audio ref={Ab1} src="Notes/12-Ab1-consolidated.wav"></audio>
           <audio ref={A1} src="Notes/13-A1-consolidated.wav"></audio>
           <audio ref={Bb1} src="Notes/14-Bb1-consolidated.wav"></audio>
           <audio ref={B1} src="Notes/15-B1-consolidated.wav"></audio>
           <audio ref={C2} src="Notes/16-C2-consolidated.wav"></audio>
           <audio ref={Db2} src="Notes/17-Db2-consolidated.wav"></audio>
           <audio ref={D2} src="Notes/18-D2-consolidated.wav"></audio>
           <audio ref={Eb2} src="Notes/19-Eb2-consolidated.wav"></audio>
           <audio ref={E2} src="Notes/20-E2-consolidated.wav"></audio>
           <audio ref={F2} src="Notes/21-F2-consolidated.wav"></audio>
           <audio ref={Gb2} src="Notes/22-Gb2-consolidated.wav"></audio>
           <audio ref={G2} src="Notes/23-G2-consolidated.wav"></audio>
           <audio ref={Ab2} src="Notes/24-Ab2-consolidated.wav"></audio>
           <audio ref={A2} src="Notes/25-A2-consolidated.wav"></audio>
           <audio ref={Bb2} src="Notes/26-Bb2-consolidated.wav"></audio>
           <audio ref={B2} src="Notes/27-B2-consolidated.wav"></audio>
           <audio ref={C3} src="Notes/28-C3-consolidated.wav"></audio>
           <audio ref={Db3} src="Notes/29-Db3-consolidated.wav"></audio>
           <audio ref={D3} src="Notes/30-D3-consolidated.wav"></audio>
           <audio ref={Eb3} src="Notes/31-Eb3-consolidated.wav"></audio>
           <audio ref={E3} src="Notes/32-E3-consolidated.wav"></audio>
           <audio ref={F3} src="Notes/33-F3-consolidated.wav"></audio>
           <audio ref={Gb3} src="Notes/34-Gb3-consolidated.wav"></audio>
           <audio ref={G3} src="Notes/35-G3-consolidated.wav"></audio>
           <audio ref={Ab3} src="Notes/36-Ab3-consolidated.wav"></audio>
           <audio ref={A3} src="Notes/37-A3-consolidated.wav"></audio>
           <audio ref={Bb3} src="Notes/38-Bb3-consolidated.wav"></audio>
           <audio ref={B3} src="Notes/39-B3-consolidated.wav"></audio>
           <audio ref={C4} src="Notes/40-C4-consolidated.wav"></audio>
           <audio ref={Db4} src="Notes/41-Db4-consolidated.wav"></audio>
           <audio ref={D4} src="Notes/42-D4-consolidated.wav"></audio>
           <audio ref={Eb4} src="Notes/43-Eb4-consolidated.wav"></audio>
           <audio ref={E4} src="Notes/44-E4-consolidated.wav"></audio>
           <audio ref={F4} src="Notes/45-F4-consolidated.wav"></audio>
           <audio ref={Gb4} src="Notes/46-Gb4-consolidated.wav"></audio>
           <audio ref={G4} src="Notes/47-G4-consolidated.wav"></audio>
           <audio ref={Ab4} src="Notes/48-Ab4-consolidated.wav"></audio>
           <audio ref={A4} src="Notes/49-A4-consolidated.wav"></audio>
           <audio ref={Bb4} src="Notes/50-Bb4-consolidated.wav"></audio>
           <audio ref={B4} src="Notes/51-B4-consolidated.wav"></audio>
           <audio ref={C5} src="Notes/52-C5-consolidated.wav"></audio>
           <audio ref={Db5} src="Notes/53-Db5-consolidated.wav"></audio>
           <audio ref={D5} src="Notes/54-D5-consolidated.wav"></audio>
           <audio ref={Eb5} src="Notes/55-Eb5-consolidated.wav"></audio>
           <audio ref={E5} src="Notes/56-E5-consolidated.wav"></audio>
           <audio ref={F5} src="Notes/57-F5-consolidated.wav"></audio>
           <audio ref={Gb5} src="Notes/58-Gb5-consolidated.wav"></audio>
           <audio ref={G5} src="Notes/59-G5-consolidated.wav"></audio>
           <audio ref={Ab5} src="Notes/60-Ab5-consolidated.wav"></audio>
           <audio ref={A5} src="Notes/61-A5-consolidated.wav"></audio>
           <audio ref={Bb5} src="Notes/62-Bb5-consolidated.wav"></audio>
           <audio ref={B5} src="Notes/63-B5-consolidated.wav"></audio>
           <audio ref={C6} src="Notes/64-C6-consolidated.wav"></audio>
           <audio ref={Db6} src="Notes/65-Db6-consolidated.wav"></audio>
           <audio ref={D6} src="Notes/66-D6-consolidated.wav"></audio>
           <audio ref={Eb6} src="Notes/67-Eb6-consolidated.wav"></audio>
           <audio ref={E6} src="Notes/68-E6-consolidated.wav"></audio>
           <audio ref={F6} src="Notes/69-F6-consolidated.wav"></audio>
           <audio ref={Gb6} src="Notes/70-Gb6-consolidated.wav"></audio>
           <audio ref={G6} src="Notes/71-G6-consolidated.wav"></audio>
           <audio ref={Ab6} src="Notes/72-Ab6-consolidated.wav"></audio>
           <audio ref={A6} src="Notes/73-A6-consolidated.wav"></audio>
           <audio ref={Bb6} src="Notes/74-Bb6-consolidated.wav"></audio>
           <audio ref={B6} src="Notes/75-B6-consolidated.wav"></audio>
           <audio ref={C7} src="Notes/76-C7-consolidated.wav"></audio>
           <audio ref={Db7} src="Notes/77-Db7-consolidated.wav"></audio>
           <audio ref={D7} src="Notes/78-D7-consolidated.wav"></audio>
           <audio ref={Eb7} src="Notes/79-Eb7-consolidated.wav"></audio>
           <audio ref={E7} src="Notes/80-E7-consolidated.wav"></audio>
           <audio ref={F7} src="Notes/81-F7-consolidated.wav"></audio>
           <audio ref={Gb7} src="Notes/82-Gb7-consolidated.wav"></audio>
           <audio ref={G7} src="Notes/83-G7-consolidated.wav"></audio>
           <audio ref={Ab7} src="Notes/84-Ab7-consolidated.wav"></audio>
           <audio ref={A7} src="Notes/85-A7-consolidated.wav"></audio>
           <audio ref={Bb7} src="Notes/86-Bb7-consolidated.wav"></audio>
           <audio ref={B7} src="Notes/87-B7-consolidated.wav"></audio>
           <audio ref={C8} src="Notes/88-C8-consolidated.wav"></audio>
           
           
           
           
           
           
          
           
       </react>

           

           
        
    )
}

export default Final;