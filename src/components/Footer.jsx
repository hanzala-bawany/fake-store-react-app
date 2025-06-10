import './Footer.css'
import FPlogo from "../assets/navLogo.png"
import deleiverylogo from "../assets/deleiveryImg.png"

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="footer">

                <div className="logoContainer">

                    <img src={FPlogo} alt="" />

                    <div className="line"></div>

                    <img src={deleiverylogo} alt="" />

                </div>

                <div className="socialLinks">

                    <div className="fbContainer">
                        <img src="https://th.bing.com/th/id/OIP.TJPPqgPkbIoECkGmtCrmIQHaHa?rs=1&pid=ImgDetMain" alt="" />
                    </div>
                    <div className="indtaConatiner">
                        <img src="https://th.bing.com/th/id/R.b473fcad595f09b0afe1270d9016ac8c?rik=UkXeB5L2aE8Biw&riu=http%3a%2f%2fpngimg.com%2fuploads%2finstagram%2finstagram_PNG9.png&ehk=GnhAoqBr5eV3LRtLGDB2XElOW7mvkdk29%2byVkqj09y8%3d&risl=&pid=ImgRaw&r=0" alt="" />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Footer