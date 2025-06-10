import Header from "../components/Header"
import Header2 from "../components/Header2"
import Body from "../components/Body"
import DownloadLinks from "../components/DownloadLinks"
import Footer from "../components/Footer"
import NavBar2 from "../components/NavBar2"
import NavBar from "../components/NavBar"

const Home = ({ cities, setSelectedCityIndex }) => {
  return (
    <>
      < NavBar />

      < NavBar2 />

      < Header  />

      < Header2
        h1="You prepare the food we handle the rest"
        imageUrl="https://img.freepik.com/premium-photo/kitchen-fire-hazard-flames-erupting-from-nonstick-pan_1304147-32270.jpg?ga=GA1.1.1612766909.1749036313&semt=ais_items_boosted&w=740"
      />

      < Body cities={cities} setSelectedCityIndex={setSelectedCityIndex} />

      < DownloadLinks />

      < Header2
        h1="Take your office out to lunch"
        imageUrl="https://thumbs.dreamstime.com/b/young-men-suits-gathered-business-meeting-discussing-together-strategies-developing-new-strategy-future-year-month-169022041.jpg"
      />

      < Footer />

    </>
  )
}

export default Home