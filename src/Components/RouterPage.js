import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'

export default function RouterPage() {
    return(
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </Router>
        </div>
    )
}