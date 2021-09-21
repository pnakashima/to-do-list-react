
import { useHistory } from "react-router";


const Header = () => {

    const history = useHistory()

    return (
        <div className="header-container">
            <div>
                <h1 className="title">TO-DO LIST</h1>
            </div>
            <div>
                <span onClick={() => history.push("/newTask")}>Nova tarefa</span>
            </div>
        </div>)

}

export default Header