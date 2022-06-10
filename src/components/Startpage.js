import { useSelector, useDispatch } from "react-redux";
import { startmenuActions } from "../store/Start_Menu-slice";
import "./Main.scss";




 const Startpage = () => {
    const dispatch = useDispatch();
    const pagestate = useSelector((state) => state.startmenu.pagestate);
   

    

    return (
        <react className="fragment">
           
            <h1 className={
                pagestate=="onload"? "heading_onload" : 
                pagestate=="introtobody"? "heading_I-B":
                pagestate=="bodytointro"? "heading_B-I" :"hidden"}>Ear Training App prototype v 1.1</h1>


            

            <svg  className={
                pagestate=="onload"? "AlphaNote_onload":
                pagestate=="introtobody"? "AlphaNote_I-B":
                pagestate=="bodytointro"? "AlphaNote_B-I":"hidden"
            } onClick={() => dispatch(startmenuActions.introtobody())} width="110" height="206" viewBox="0 0 110 206" fill="black" xmlns="http://www.w3.org/2000/svg">
            <g >
            <path  fill-rule="evenodd" clip-rule="evenodd" d="M110 0H100V153.234C90.0463 144.625 73.6016 139 55 139C24.6243 139 0 153.998 0 172.5C0 191.002 24.6243 206 55 206C85.3757 206 110 191.002 110 172.5C110 171.318 109.9 170.15 109.703 169H110V0Z" />
            </g>
            </svg>


           
            
            


        </react>

       
            
        
            
        
            
        
            
        
    )
    };
export default Startpage;