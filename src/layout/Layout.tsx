import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import { routes } from '../route.js';

export class Layout extends React.Component<{}, {}> {

    render() {
        return (
            <div className="container">
                <Header />
                <Sidebar />
                <div className="content">
                    <Switch>
                        {
                            routes.map((route) => {
                                <Route path={route.path}>
                                    { route.component }
                                </Route>
                            })
                        }
                    </Switch>
                </div>
            </div>
        );
    }
}