import { useLocation, Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCurrentToken } from '../../store/slices/authSlice'

const RequireAuth = () => {
    // const token = useSelector(selectCurrentToken)
    // const location = useLocation()
    // return (
    //     token
    //         ? <Outlet />
    //         : <Navigate to="/login" state={{ from: location }} replace />
    // )
}
export default RequireAuth

// token 없으면 로그인 페이지로 튕겨내는 컴포넌트 ?
