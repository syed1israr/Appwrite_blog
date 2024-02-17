
import {useDispatch} from "react-redux"
import authService from "../../appwrite/Auth.js"
import {logout} from "../../store/authSlice.js"

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-grey-800 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn