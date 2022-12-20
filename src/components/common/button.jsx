import { Link } from 'react-router-dom'

// props : text, color, type, method, link
const Button = (props) => {
    // 로그인, 회원가입 페이지에 버튼도 링크로 수정하기
    if (props.color === 'dark' && props.link) {
        // dark button
        return (
            <Link
                type={props.type}
                onClick={props.method}
                className="block bg-gray-900 text-white text-center hover:bg-gray-800 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black-300 p-2 rounded-3xl"
                to={props.link}
            >
                {props.text}
            </Link>
            // <button type={props.type} onClick={props.method} className="bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700 focus:outline-none focus:ring focus:ring-black-300 p-2 rounded-3xl">
            //     <Link type={props.type} onClick={props.method} className="block" to={props.link}>
            //         {props.text}
            //     </Link>
            // </button>
        )
    } else if (props.color === 'bright' && props.link) {
        // bright button
        return (
            <Link
                type={props.type}
                onClick={props.method}
                className="block bg-gray-100 text-black text-center hover:bg-gray-200 active:bg-gray-200 focus:outline-none focus:ring focus:ring-black-200 p-2 rounded-3xl"
                to={props.link}
            >
                {props.text}
            </Link>
        )
    } else if (props.color === 'lnline' && props.link) {
        // icon and label
        return (
            <Link
                to={props.link}
                type={props.type}
                onClick={props.method}
                className="inline p-2 w-24 text-center"
            >
                {props.text}
            </Link>
        )
    } else if (props.link) {
        // link
        return (
            <Link
                type={props.type}
                onClick={props.method}
                className="block text-center p-2"
                to={props.link}
            >
                {props.text}
            </Link>
        )
    }
}

export default Button
