import "./SingleFoodItem.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faMotorcycle,
    faStar,
    faCircleInfo,
    faDollarSign
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";

const SingleFoodItem = ({ cityName, selectedCard }) => {

    const [delieveryCharges , setDelieveryCharges] = useState()
    const [totalPrice , setTotalPrice] = useState()

    const itemPrice = Number(selectedCard?.itemPrice) || 0
    
    useEffect(() => {

        setDelieveryCharges( Math.floor(itemPrice/4) )
        
    },[selectedCard])

    useEffect(() => {

        setTotalPrice(  Number(delieveryCharges) + itemPrice )

    },[delieveryCharges])


    return (
        <div className="singleCardConytainer">

            <div className="currentLocation">
                HomePage  &gt;  {cityName}  &gt;  {selectedCard?.itemName}
            </div>

            <div className="singleFoodItem">

                <img className="singleCardImg" src={selectedCard?.imgUrl} alt="" />

                <div className="cardContent">

                    <h2 className="itemHeading">{selectedCard?.itemName}</h2>

                    <div className="Dcharges">
                        <FontAwesomeIcon icon={faMotorcycle} />
                        Rs.{ parseFloat(delieveryCharges) } deleivery charges
                    </div>

                    <div className="priceContainer">
                        <FontAwesomeIcon icon={faDollarSign} />
                        <span>
                           Rs.{selectedCard?.itemPrice}
                            <span className="totalPrice"> Rs.{ parseFloat(totalPrice) } Total Price </span>
                        </span>
                    </div>

                    <div className="reveiwConatiner">
                        <div className="review">
                            <FontAwesomeIcon icon={faStar} /> 2.5
                            <span>See reviews</span>
                        </div>

                        <div className="info">
                            <FontAwesomeIcon icon={faCircleInfo} />
                            More info
                        </div>
                    </div>

                </div>

                <div className="singleCardBtns">
                    <button className="addToCart">Add To Card</button>
                    <button className="buy">Buy</button>
                </div>

            </div>


        </div>
    )
}

export default SingleFoodItem