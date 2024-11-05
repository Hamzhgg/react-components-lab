const WeatherLook = ({forecast: {img, imgAlt}}) => {
    return(
        <img src={img} alt={imgAlt} />
    );
};
export default WeatherLook;