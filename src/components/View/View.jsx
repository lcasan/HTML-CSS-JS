import ContentSwitcher from "./Switcher";

const View = () => {
    return <div className="max-w-sm w-full h-[400px] flex flex-col">
        <div className="bg-slate-100 max-w-sm rounded overflow-hidden shadow-lg w-full h-[300px]">
            {/* Content viewer */}
        </div>
        <ContentSwitcher/>
    </div>
};

export default View;