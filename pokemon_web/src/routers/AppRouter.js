import React from 'react';
import  { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Detail } from '../pages/Detail';
import { NotFound } from '../pages/NotFound';


export const AppRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/detail/:id' component={Detail} />
            <Route component={NotFound} />
        </Switch>
    )
}
