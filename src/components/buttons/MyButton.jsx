import React from "react";
import { Button } from "@material-tailwind/react";

const MyButton = ({ children, onClick = function(){}, className = "" }) => {
    return <>
        <Button className={`my-text capitalize shadow-sm hover:shadow-sm ${className !== "" ? className:""}`} onClick={onClick}>
            {children}
        </Button>
    </>
}

export default MyButton;