import { useParams } from "react-router-dom"
import Header from "../components/Header"
import Header2 from "../components/Header2";
import NavBar from "../components/NavBar"
import AllFoodItems from "../components/AllFoodItems"

const FoodItems = ({ selectedCity , allFoodItems }) => {

  const { cityName } = useParams()

  return (
    <>
      < NavBar foodItemsActive={true} cityName={cityName} />

      < Header marginTop="50px" cityName={cityName} />

      {/* < Header2
        h1={`Your selected City : ${cityName}  `}
        imageUrl={selectedCity?.cityImg}
      /> */}


      <AllFoodItems cityName={cityName} allFoodItems={allFoodItems}/>

    </>
  )
}

export default FoodItems