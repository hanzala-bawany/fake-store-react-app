import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Conatact from './Pages/Conatact'
import About from './Pages/About'
import Registration from './Pages/Registration'

function App() {

  return (


    <Routes>


      <Route path='/' element={<Home />} />
      <Route path='/Conatact' element={<Conatact />} />
      <Route path='/About' element={<About />} />
      <Route path='/Registration' element={<Registration />} />
      {/* <Route path='/:cityName/foodItems' element={<FoodItems />} /> */}
      {/* <Route path='/FoodItem/:id' element={<FoodItem />} /> */}

    </Routes>
  )
}

export default App
