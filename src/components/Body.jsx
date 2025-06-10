import "./Body.css"
import { useState } from "react"
import { Link } from "react-router-dom"


const Body = ({cities , setSelectedCityIndex}) => {



    return (

        <>
            <h1 className="bodyHeading">Find us in this cities and many more!</h1>

            <div className="cities">

                {
                    cities.map((city, index) => {
                        return (
                            <Link to={`/${city.cityName}/FoodItems`}>
                                <div onClick={() => setSelectedCityIndex(index)} className="city">

                                    <img src={city.cityImg} alt="" />
                                    <button>{city.cityName}</button>

                                </div>
                             </Link>
                        )
                    })
                }

            </div>

        </>

    )
}

export default Body