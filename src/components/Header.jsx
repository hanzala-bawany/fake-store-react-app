import "./Header.css"
import headerImg from "../assets/FP main img.png"


const Header = () => {
    return (
        <div className="headerContainer">

            <div className="header">

                <span className="blog">
                    Food and groceries delivery from Karachi’s best restaurants and shops
                </span>
                <img className="headerImg" src={headerImg} alt="" />

            </div>

        </div>
    )
}

export default Header