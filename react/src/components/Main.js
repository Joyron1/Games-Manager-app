import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Games from '../pages/AllGames/Games';
import Basketball from '../pages/Basketball/basketball';
import Football from '../pages/Football/football';
import FootById from '../pages/Football/footballById';
import BasketById from '../pages/Basketball/basketballById';



class Main extends Component {

    state = {

    }

    render() {
        return (
            <div>
                <div className="App row">
                    <Route path="/" exact component={Games} />
                    <Route path="/basketball" exact component={Basketball} />
                    <Route path="/basketball/:id" exact component={BasketById} />
                    <Route path="/football" exact component={Football} />
                    <Route path="/football/:id" exact component={FootById} />
                </div>
            </div>
        );
    }
}

export default Main;