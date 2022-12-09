import { Link } from "react-router-dom"

// props : text, color, type, method, link
const Button = (props) => {
    if (props.color === "dark" && props.link) { // dark button
        return(
            <button type={props.type} onClick={props.method} className="bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black-300 p-2 rounded-3xl">
                <Link className="block" to={props.link}>
                    {props.text}
                </Link>
            </button>
        )
    }
    else if (props.color === "bright" && props.link) { // bright button
        return (
            <button type={props.type} onClick={props.method} className="bg-gray-100 text-black hover:bg-gray-200 active:bg-gray-200 focus:outline-none focus:ring focus:ring-black-200 p-2 rounded-3xl">
                <Link className="block" to={props.link}>
                    {props.text}
                </Link>
            </button>
        )
    }
    else if (props.color === "lnline" && props.link){ // icon and label
        return (
            <button type={props.type} onClick={props.method} className="p-2 w-24">
                <Link className="inline" to={props.link}>
                    {props.text}
                </Link>
            </button>
        )
    }
    else if (props.link) { // link
        return(
            <button type={props.type} onClick={props.method} className="p-2">
                <Link className="block" to={props.link}>
                {props.text}
                </Link>
            </button>
        )
    }

}

export default Button