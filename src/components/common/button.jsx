import { Link } from "react-router-dom"

// props : text, color
const Button = (props) => {
    if (props.color === "dark" && props.link) {
        return(
            <button type={props.type} onClick={props.method} className="bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black-300 p-2 rounded-3xl">
                <Link className="block" to={props.link}>
                    {props.text}
                </Link>
            </button>
        )
    }
    else if (props.color === "bright" && props.link) {
        return (
            <button type={props.type} onClick={props.method} className="bg-gray-100 text-black hover:bg-gray-200 active:bg-gray-200 focus:outline-none focus:ring focus:ring-black-200 p-2 rounded-3xl">
                <Link className="block" to={props.link}>
                    {props.text}
                </Link>
            </button>
        )
    }
    else {
        // default dark
        return (
            <button type={props.type} onClick={props.method} className="bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black-300 p-2 rounded-3xl">
                {props.text}
            </button>
        )
    }
}

export default Button