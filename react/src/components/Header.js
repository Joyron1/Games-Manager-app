import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import * as axios from 'axios';
import './Header.css';

class Header extends Component {

    state = {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="row headerContainer shadow">
                <div className="col-12">
                    <Row className="p-3">
                        <Col xs={12}> <h2> enJoy Sport </h2>  </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Header;











