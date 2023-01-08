import React from "react";
import { Switch, Route } from "react-router-dom";
import Settings from './pages/Settings';
import FinalScore from './pages/FinalScore';
import Questions from './pages/Questions';

export default function Router() {
    return (
        <Switch>
            <Route path="/" exact>
                <Settings />
            </Route>
            <Route path="/questions" exact>
                <Questions />
            </Route>
            <Route path="/score" exact>
                <FinalScore />
            </Route>
        </Switch>
    );
}

