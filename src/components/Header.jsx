import "./Header.css"
import headerImg from "../assets/FP main img.png"


const Header = ({cityName , marginTop}) => {
    return (
        <div style={{marginTop: marginTop || "0px" }} className="headerContainer">

            <div className="header">

                <span className="blog">
                    Food and groceries delivery from {cityName || "Pakistan"}’s best restaurants and shops
                </span>
                <img id="headerImg" src={headerImg} alt="" />
                {/* <img id="headerImg" src="https://images.deliveryhero.io/image/foodpanda/homepage/refresh-hero-home-bd.png" alt="" /> */}

            </div>

        </div>
    )
}

export default Header