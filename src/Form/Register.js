import './Form.css'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

export default function Register() {

    const dispatch = useDispatch();
    const arr = useSelector(state => state.users);
    console.log(arr)
    const addUser = (emml, pass) => {
        const user = {
            email: emml,
            pass: pass,
            id: Date.now(),
        }
        dispatch({type: "REGISTER", payload: user})

    }
    const currentEmail = useSelector(state => state.currentEmail);
    const currentPass = useSelector(state => state.currentPass);
    console.log(currentEmail)
    console.log(currentPass)
    const handleEmailChange = (e) => {
        dispatch({type: "emailChange", payload: e})


    };
    const handlePasswordChange = (e) => {
        dispatch({type: "passChange", payload: e})
    }


    return (
        <div className='form' onSubmit={() => addUser(currentEmail, currentPass)}>

            <div>
                <input type="email" placeholder="Email" name="Email" value={currentEmail}
                       onChange={(e) => handleEmailChange(e.target.value)}></input>
            </div>
            <div>
                <input type="password" placeholder="Password" name='pass' value={currentPass}
                       onChange={(e) => handlePasswordChange(e.target.value)}></input>
            </div>
            <Link to='/SignIn'>
                <button onClick={() => addUser(currentEmail, currentPass)}>Register</button>
            </Link>

        </div>
    )
}