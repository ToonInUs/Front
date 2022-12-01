// back button, title, 구분선
import { useNavigate  } from 'react-router-dom'
const PageTitle = (props) => {
    let navigate = useNavigate ()
    return(
        <div className="border-b border-gray-300">
            <button onClick={()=>navigate(-1)} className="font-bold text-lg">
                &lt; <label>{props.title}</label>
            </button>
        </div>
    )
}

export default PageTitle