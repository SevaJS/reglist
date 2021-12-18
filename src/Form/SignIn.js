import {useDispatch} from "react-redux";

export default function Sihin() {
    const dispatch = useDispatch();
    const loginChange = (e) => {
        dispatch({type: "LOGIN", payload: true})


    };

    return (
        <div className='form'>
            <div>
                <input type="email" placeholder="Email" name="Email"></input>
            </div>
            <div>
                <input type="password" placeholder="password" name="password"></input>
            </div>
            <button onClick={() => loginChange()}>LOG IN</button>

        </div>)
}