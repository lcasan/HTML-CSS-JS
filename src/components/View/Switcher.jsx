import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const Button = ({icon})=>{
    return (
        <button class="
            p-1 
            text-indigo-600 
            rounded-full 
            cursor-pointer 
            hover:text-white hover:bg-indigo-600 transition-all ease-in-out duration-250 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {icon}
        </button>
    );
}
const ContentSwitcher = ()=>{
    return (
        <div class="flex items-center space-x-2 p-2 justify-center">
            <Button icon={<SlArrowLeft/>}/>
            <span class="text-sm text-gray-500 font-semibold">Switch challenge</span>
            <Button icon={<SlArrowRight/>}/>
        </div>
    );
}

export default ContentSwitcher;