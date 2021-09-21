import { Route, Switch } from 'react-router-dom'
import NewTask from '../pages/NewTask'
import TaskList from '../pages/TaskList'

const Routes = () => {
    return (

        <Switch>
            <Route path="/" exact >
                <TaskList />
            </Route>

            <Route path="/newTask" >
                <NewTask />
            </Route>

        </Switch>

    )
}

export default Routes