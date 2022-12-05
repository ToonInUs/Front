// back button, title, 구분선
import { useNavigate  } from 'react-router-dom'
const PageTitle = (props) => {
    let navigate = useNavigate ()
    return(
        <div className="border-b border-gray-300">
            <button onClick={()=>navigate(-1)} className="font-bold text-lg">
                <span className="align-middle mr-3 material-symbols-outlined">arrow_back</span>
                <label className="align-middle">{props.title}</label>
            </button>
        </div>
    )
}

// &lt;
export default PageTitle