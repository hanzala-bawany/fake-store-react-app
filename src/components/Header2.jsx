import "./Header2.css"

const Header2 = ({imageUrl,h1}) => {
    return (
        <>

            <h1>{h1}</h1>

            <div
                style={{
                    background: `url(${imageUrl})`,
                    backgroundSize: "100% 150%",         
                    backgroundPosition: "center",    
                    backgroundRepeat: "no-repeat"
                }}
                className="imgcontainer">

            </div>

        </>
    )
}

export default Header2