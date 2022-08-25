const CardTruck = ({img, text}) => {
    return (
        <div className="card-truck">
            <div className="card-truck-img">
                <img src={img} alt={text}/>
            </div>
            <div className="card-truck-text">
                <p>{text}</p>
            </div>
        </div>
    );
}
export default CardTruck;