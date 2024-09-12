import React from "react";
import Lottie from "lottie-react";

// animation
import work from "./work.json";

const WorkAnimation = ({
    width = 0,
    height = 0,
}) => {
    return <>
        <Lottie
            animationData={work}
            loop={true}  // Set to false if you don't want the animation to loop
            style={{ width: width, height: height }}  // Adjust width and height as needed
        />
    </>
}

export default WorkAnimation;