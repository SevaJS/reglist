import './Form.css';
import {useSelector,} from "react-redux";
import List from "./List";
import Sihin from "./SignIn";


export default function Form() {



    const status = useSelector(state => state.isLogin)


    if (status == true) {
        return <List/>;
    } else {
        return <Sihin/>
    }


}
