import { Link } from "react-router-dom";
import "./AllFoodItems.css"

const AllFoodItems = ({ cityName, FoodItemPageActive, allFoodItems, categery }) => {

    // const allFoodItems = [
    //     {
    //         imgUrl: "https://th.bing.com/th/id/R.d9ceb784842fc43b99c56839cf5605a8?rik=BF6lXSSwQVf4JA&pid=ImgRaw&r=0",
    //         itemName: "Club Sandwitch",
    //         itemDescn: "Club beef Sendwitch stew served with salet.",
    //         itemCutPrice: "480",
    //         itemPrice: "400",
    //         categery: "brunch"
    //     },
    //     {
    //         imgUrl: "https://tse2.mm.bing.net/th/id/OIP.wBu0Xsb774mtzvjhq1C3DgHaE8?rs=1&pid=ImgDetMain",
    //         itemName: "Nihari",
    //         itemDescn: "Slow-cooked beef stew served with naan.",
    //         itemCutPrice: "400",
    //         itemPrice: "320",
    //         categery: "lunch"
    //     },
    //     {
    //         imgUrl: "https://th.bing.com/th/id/OIP.ymXKUrPlGQ3CP_gslHtH1wFZC1?w=345&h=181&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    //         itemName: "Haleem",
    //         itemDescn: "A thick, savory dish made with meat and grains.",
    //         itemCutPrice: "300",
    //         itemPrice: "220",
    //         categery: "lunch"
    //     },
    //     {
    //         imgUrl: "https://th.bing.com/th/id/OIP.tOH2rEsmILJeRBQBFfdIqgAAAA?w=239&h=180&c=7&r=0&o=5&cb=iwc1&dpr=1.5&pid=1.7",
    //         itemName: "Fizup next",
    //         itemDescn: "Lemon-lime flavored soda, crisp and clean.",
    //         itemCutPrice: "90",
    //         itemPrice: "70",
    //         categery: "drinks"
    //     },
    //     {
    //         imgUrl: "https://th.bing.com/th/id/OIP.m9YiCPQwgGNYtz6IbzobGgHaG1?w=260&h=240&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    //         itemName: "Chicken kerhai",
    //         itemDescn: "Spicy chicken cooked in traditional karahi style.",
    //         itemCutPrice: "450",
    //         itemPrice: "360",
    //         categery: "dinner"
    //     },
    //     {
    //         imgUrl: "https://th.bing.com/th/id/OIP.0WX5EfX0WkSUjmdfO2MhWwHaHa?rs=1&pid=ImgDetMain",
    //         itemName: "Chapli Kebab",
    //         itemDescn: "Flat minced meat kebabs fried to perfection.",
    //         itemCutPrice: "250",
    //         itemPrice: "180",
    //         categery: "dinner"
    //     },
    //     {
    //         imgUrl: "https://th.bing.com/th/id/OIP.WrAOvoxSRA7nG2Gzu42pXwAAAA?w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    //         itemName: "Seekh Kebab",
    //         itemDescn: "Spiced skewers of minced meat grilled to juicy tenderness.",
    //         itemCutPrice: "300",
    //         itemPrice: "240",
    //         categery: "dinner"
    //     },
    //     {
    //         imgUrl: "https://www.bing.com/th/id/OIP.gzfLita-jg6Uhv0TfA8RZgHaHa?w=106&h=106&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    //         itemName: "Samosa",
    //         itemDescn: "Crispy pastry filled with spiced potatoes.",
    //         itemCutPrice: "100",
    //         itemPrice: "70",
    //         categery: "breakfast"
    //     },
    //     {
    //         imgUrl: "https://th.bing.com/th/id/OIP.0_uP_Xml3mfB6vkbyKAv-gHaF-?w=278&h=224&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    //         itemName: "Gol Gappa",
    //         itemDescn: "Crunchy puris with spicy water and chickpeas.",
    //         itemCutPrice: "80",
    //         itemPrice: "50",
    //         categery: "dinner"
    //     },
    //     {
    //         imgUrl: "https://th.bing.com/th/id/R.560d17d46f18010f6110d97438d83a9c?rik=m72%2bEyoZwZl6ng&pid=ImgRaw&r=0",
    //         itemName: "Cola next",
    //         itemDescn: "Refreshing cola beverage with a bold taste.",
    //         itemCutPrice: "100",
    //         itemPrice: "80",
    //         categery: "drinks"
    //     },
    //     {
    //         imgUrl: "https://th.bing.com/th/id/OIP.n1Yp8ytTylrsFotpZX_oOAHaEK?w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    //         itemName: "Chicken Shawarma",
    //         itemDescn: "Seasoned chicken wrapped in pita bread.",
    //         itemCutPrice: "350",
    //         itemPrice: "270",
    //         categery: "breakfast"
    //     },
    //     {
    //         imgUrl: "https://th.bing.com/th/id/OIP.9p3L5KEoQazWERUMZDhxWAHaFa?w=292&h=213&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    //         itemName: "Chcken Tikka",
    //         itemDescn: "Carrot dessert rich with ghee, milk and nuts.",
    //         itemCutPrice: "250",
    //         itemPrice: "200",
    //         categery: "lunch"
    //     },
    //     {
    //         imgUrl: "https://tse3.mm.bing.net/th/id/OIP.R3TLiHxOqTQXNce6hYXwKAHaEK?cb=iwc1&rs=1&pid=ImgDetMain",
    //         itemName: "Pakola",
    //         itemDescn: "Classic fizzy cola drink served chilled.",
    //         itemCutPrice: "100",
    //         itemPrice: "80",
    //         categery: "drinks"
    //     },
    //     {
    //         imgUrl: "https://th.bing.com/th/id/OIP.raXVGStbDuB3VZ1h1nwZZAHaIU?o=7rm=3&rs=1&pid=ImgDetMainhttps://th.bing.com/th/id/R.bfa50cd7008c698789416c33b8dec301?rik=rtXPRanWvqjCHw&pid=ImgRaw&r=0",
    //         itemName: "Halwa Puri",
    //         itemDescn: "Traditional breakfast with puri, chana and halwa.",
    //         itemCutPrice: "200",
    //         itemPrice: "150",
    //         categery: "breakfast"
    //     },
    //     {
    //         imgUrl: "https://th.bing.com/th/id/OIP.sUhyodfFr_IFpU3FQMT2nQHaJ4?rs=1&pid=ImgDetMain",
    //         itemName: "Lassi",
    //         itemDescn: "Chilled yogurt drink, sweet and refreshing.",
    //         itemCutPrice: "120",
    //         itemPrice: "90",
    //         categery: "drinks"
    //     },
    //     {
    //         imgUrl: "https://th.bing.com/th/id/OIP.IWm9rTKEUQsVoE2tpORnDwHaKA?rs=1&pid=ImgDetMain",
    //         itemName: "Aloo Paratha",
    //         itemDescn: "Stuffed flatbread with spiced mashed potatoes.",
    //         itemCutPrice: "200",
    //         itemPrice: "160",
    //         categery: "breakfast"
    //     },
    //     {
    //         imgUrl: "https://th.bing.com/th/id/OIP.Dk2I40uZkvjit-KanwqwdgHaFP?rs=1&pid=ImgDetMain",
    //         itemName: "Dahi Bhallay",
    //         itemDescn: "Lentil dumplings soaked in yogurt and chutney.",
    //         itemCutPrice: "150",
    //         itemPrice: "120",
    //         categery: "brunch"
    //     },
    //     {
    //         imgUrl: "https://th.bing.com/th/id/OIP.LfGQ_m6_rfNrFLSSJoNWNQHaEK?o=7rm=3&rs=1&pid=ImgDetMain",
    //         itemName: "Zarda",
    //         itemDescn: "Sweet saffron rice with dry fruits.",
    //         itemCutPrice: "200",
    //         itemPrice: "150",
    //         categery: "lunch"
    //     },
    //     {
    //         imgUrl: "https://th.bing.com/th/id/OIP.xEJ4EKo0IMPqDJVAvfcOVwHaEK?rs=1&pid=ImgDetMain",
    //         itemName: "Falooda",
    //         itemDescn: "Chilled dessert drink with ice cream and vermicelli.",
    //         itemCutPrice: "180",
    //         itemPrice: "140",
    //         categery: "drinks"
    //     },
    //     {
    //         imgUrl: "https://th.bing.com/th/id/OIP.0MB-jAw_rJ0EaSWFQxwg5QHaIQ?o=7rm=3&rs=1&pid=ImgDetMain",
    //         itemName: "Kheer",
    //         itemDescn: "Rice pudding flavored with cardamom and dry fruits.",
    //         itemCutPrice: "150",
    //         itemPrice: "100",
    //         categery: "brunch"
    //     },
    //     {
    //         imgUrl: "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/jan-5/Carrot_Halwa_Recipe-0834.jpg",
    //         itemName: "Gajar ka Halwa",
    //         itemDescn: "Carrot dessert rich with ghee, milk and nuts.",
    //         itemCutPrice: "250",
    //         itemPrice: "200",
    //         categery: "brunch"
    //     }
    // ];

    // console.log(allFoodItems);

    console.log(allFoodItems);


    return (

        <div className="allFoodItemsConatiner">
            {
                !FoodItemPageActive && <div className="pageLocation">Home page &gt; {cityName} </div>
            }
            <h1 className="allFoodItemsHeading"> {FoodItemPageActive ? "Other" : "All"} Food Items</h1>

            <div className="allFooItemsCards">

                {

                    allFoodItems?.map((item, index) => {
                        const id = `${item?.itemName?.split(" ")[0]}00${index}`
                        item.id = id

                        return (
                            <Link to={`/${cityName}/FoodItem/${id}`} className="myCustomLink">

                                <div key={id} className="foodItemCard">
                                    < div className="foodContent">
                                        <h4>{item.itemName}</h4>
                                        <div className="prise">
                                            Rs.{item.itemPrice} <span className="cutPrise">Rs.{item.itemCutPrice}</span>
                                        </div>
                                        <p>{item.itemDescn}</p>
                                    </div>

                                    <img className="cardImg" src={item.imgUrl} alt="" />

                                </div>

                            </Link>
                        )

                    })

                }

            </div>

        </div >

    )

}

export default AllFoodItems