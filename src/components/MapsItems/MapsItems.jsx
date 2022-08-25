import {VscChevronRight} from "react-icons/vsc";



const MapsItems = ({city, address, onClick}) => {
    return (
        <div className="maps-items" onClick={onClick}>
            <span>{city}</span>
            <p>{address}</p>
            <div className="maps-arrow">
                <VscChevronRight/>
            </div>
        </div>
    );
}
export default MapsItems;
