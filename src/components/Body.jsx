import "./Body.css"
import { useState } from "react"

const Body = () => {

    const [cities, setCities] = useState([
        {
            cityImg: "https://th.bing.com/th/id/OIP.20ARscgQ3yNwJedOGcR4IAHaE8?rs=1&pid=ImgDetMain",
            cityName: "Islamabad"
        },
        {
            cityImg: "https://th.bing.com/th/id/OIP.HbDz8D8-hHbPB0rEZ__NjQHaFj?w=200&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            cityName: "Karachi"
        },
        {
            cityImg: "https://cdn.pixabay.com/photo/2019/08/26/18/23/mosque-4432476_640.jpg",
            cityName: "Lahore"
        },
        {
            cityImg: "https://th.bing.com/th/id/OIP.AY86Con-ECXCa-2tvx9FJwHaE8?pid=ImgDet&w=474&h=316&rs=1",
            cityName: "Peshawar"
        },
        {
            cityImg: "https://th.bing.com/th/id/R.fbd7165ba50e6aae3e0016491d8aa8a5?rik=3SGP%2blKMBP6ksA&pid=ImgRaw&r=0",
            cityName: "Quetta"
        },
        {
            cityImg: "https://th.bing.com/th/id/R.029d3ee4d786d0f68cbafccb7141381e?rik=DXphQ8Nw%2bYrYMg&pid=ImgRaw&r=0",
            cityName: "Muzaffarabad"
        },
        {
            cityImg: "https://th.bing.com/th/id/R.51e407df430aabd357e796515026e99b?rik=PXlzVoopboUn%2bQ&pid=ImgRaw&r=0",
            cityName: "Multan"
        },
    ])

    return (

        <>
            <h1 className="bodyHeading">Find us in this cities and many more!</h1>

            <div className="cities">

                {
                    cities.map((city,index) => {
                        return (
                            <div className="city">
                                <img src={city.cityImg} alt="" />
                                <button>{city.cityName}</button>
                            </div>
                        )
                    })
                }

            </div>

        </>

    )
}

export default Body