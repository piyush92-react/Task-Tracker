import React from 'react';
import { Route, Switch  } from 'react-router-dom'
import Home from '../pages/Home/Home'
import ToDo from '../pages/ToDo/Todo';
import InProgress from '../pages/In Progress/InProgress';
import Completed from '../pages/Completed/Completed';
const Routes =()=> {
        return(
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/todo' exact component={ToDo}></Route>
                <Route path='/in-progress' exact component={InProgress}></Route>
                <Route path='/done' exact component={Completed}></Route>
            </Switch>
        )
}
export default Routes