import React, { useState } from 'react'
import { useParams, NavLink, useSearchParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, } from '@fortawesome/free-solid-svg-icons';
import SingleFoodItem from '../components/SingleFoodItem'
import AllFoodItems from "../components/AllFoodItems"
import "./FoodItem.css"

const FoodItem = ({ allFoodItems }) => {

  const { cityName, id } = useParams()
  const selectedCard = allFoodItems.find((card) => card.id === id)

  const [isShowCards, setIsShowCards] = useState(true)
  const removeAllCards = () => {
    setIsShowCards(!isShowCards)
  }

  const [searchParams] = useSearchParams()
  const categery = searchParams.get("categery")
  



  return (
    <>

      < NavBar foodItemsActive={true} cityName={cityName} />

      < SingleFoodItem cityName={cityName} selectedCard={selectedCard} />


      <div className="searchBarAndBtnsConatiner">
        <div className="searchBarAndBtns">

          <div className="searchBar">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder="Search in menu" />
          </div>

          <button onClick={removeAllCards} className='dontShow'>{isShowCards ? "Dont Show Cards" : "Get All Cards"}</button>

          <div className="btns">

            <NavLink to={`/${cityName}/FoodItem/${id}?categery=breakfast`} >
              <button>Break Fast Item</button>
            </NavLink>

            <NavLink to={`/${cityName}/FoodItem/${id}?categery=lunch`} >
              <button>Lunch Item</button>
            </NavLink>

            <NavLink to={`/${cityName}/FoodItem/${id}?categery=brunch`} >
              <button>Brunch Item</button>
            </NavLink>

            <NavLink to={`/${cityName}/FoodItem/${id}?categery=dinner`} >
              <button>Dinner Item</button>
            </NavLink>

          </div>

        </div>
      </div>


      {
        isShowCards && 

        < AllFoodItems categery={categery} allFoodItems={allFoodItems} FoodItemPageActive={true} cityName={cityName} />
      }
    </>
  )
}

export default FoodItem