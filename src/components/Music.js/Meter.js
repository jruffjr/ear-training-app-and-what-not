import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { musicdataActions } from "../../store/Music_Data-slice";
import "../Main.scss";

const Meter = () => {
    const dispatch = useDispatch();
    const meter_top = useSelector((state) => state.musicdata.meter_top)
    const meter_bottom = useSelector((state) => state.musicdata.meter_bottom)

    return(
        <react className="fragment">
            <div className="dis_men">
            <h1>Meter</h1>
            <h3>{meter_top}</h3> 
            <h3>{meter_bottom}</h3>
            <button className="menubuttons" onClick={() => dispatch(musicdataActions.increasemetertop())}>Increase meter top</button>
            <button className="menubuttons"onClick={() => dispatch(musicdataActions.decreasemetertop())}>decrease meter top</button>
            <button className="menubuttons"onClick={() => dispatch(musicdataActions.metereighth())}>meter eighth</button>
            <button className="menubuttons"onClick={() => dispatch(musicdataActions.meterquarter())}>meter quarter</button>
            <button className="menubuttons"onClick={() => dispatch(musicdataActions.meterhalf())}>meter half</button>
            </div>
        </react>
        
    )

}

export default Meter;