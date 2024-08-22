import Lottie from "lottie-react";

const Loading = ({ animetion }) =>{
    const defaultOption = {
        loop: true,
        autoplay: true,
        animetionDate: animetion.defaut,
    };
    const style = {
        height: 300,
    };

    return (
        <Lottie
        animationData={animetion}
        defaultOption={defaultOption}
        style={style}
        />
    );
};

export default Loading;