
import { useNavigate} from "react-router-dom"
const BusinessItems = ({item}) => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="work__card" key={item.id}>
                <img src={item.image} alt="" className="work__img" />
                <h2 className="work__title">{item.title}</h2>
                <button onClick={() => navigate("")}>Read More</button>
            </div>
            
        </div>
    )
}

export default BusinessItems