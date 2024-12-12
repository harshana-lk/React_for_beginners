import { ReactNode } from "react";

interface ButtonProp{
    children:ReactNode;
    onClick : () => void;
    color: 'warning'|'danger'|'dark'|'success';
}

function Button({children, onClick, color}:ButtonProp){
    return(
        <>
            <button className={"btn btn-"+color} onClick={onClick}>{children}</button>
        </>
    );
}

export default Button;