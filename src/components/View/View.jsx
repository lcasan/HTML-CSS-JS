import ContentSwitcher from "./Switcher";
import {Challenge1} from "../Challenges/Challenges.jsx";

const View = () => {
    /* 
        Lista de componentes:
        [0][1][2][3][4]....
        < > 
    */
   
    return (
        <div className="max-w-sm w-[400px] h-[400px] flex flex-col">
            <div className="bg-slate-100 max-w-sm rounded overflow-hidden shadow-lg w-full h-[300px]">
                <Challenge1/>
            </div>
            
            <ContentSwitcher/>
        </div>
    )
};

export default View;