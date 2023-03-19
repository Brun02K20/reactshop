import React from 'react';
import { Switch, BrowserRouter, Route } from "react-router-dom";

import "../styles/global.css";

import {Layout} from "../containers/Layout";
import { RecoveryPassword } from '../containers/RecoveryPassword';
import { CreatingNewPassword } from '../containers/CreatingNewPassword';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    < Route exact path="/" component={Home} />
                    <Route exact path="/creatingnewpassword" component={CreatingNewPassword} />
                    <Route exact path="/recoverypassword" component={RecoveryPassword} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
};

export {App}