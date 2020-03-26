import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import * as axios from 'axios';
import { Route, Link } from 'react-router-dom';

class Football extends Component {

    state = {
        games: [],
    }

    componentDidMount() {
        this.getGamesByCategory();
    }

    // get games by category
    async getGamesByCategory() {
        console.log()
        try {
            await axios.get(`http://www.localhost:4000/getGamesByCat?category=Football`).then(response => {
                this.setState({ games: response.data }, () => { console.log("games by cat : ", this.state.games) })
            })
        } catch (e) {
            console.log(e);
        }
    }


    render() {


        let table = [];
        if (this.state.games) {
            table = this.state.games.map(game => {
                return (
                    <tr>
                        <th>{game.id}</th>
                        <td>{game.teamA}</td>
                        <td>{game.teamB}</td>
                        <td>{game.scoreA}</td>
                        <td>{game.scoreB}</td>
                        <td>{game.time.split('T')[0]}</td>
                        <td>{game.category}</td>
                        <td><Link to={"/football/" + game.id}><button type="button" className="btn btn-secondary"> more info </button></Link></td>
                    </tr>
                )
            })
        }

        return (
            <div className="container p-2 ml-2">
                <Link to="/"> <button type="button" className="btn btn-none my-3"> Home </button> </Link>
                <Row className="p-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Team A</th>
                                <th scope="col">Team B</th>
                                <th scope="col">Score A</th>
                                <th scope="col">Score B</th>
                                <th scope="col">Time</th>
                                <th scope="col">Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table}
                        </tbody>
                    </table>
                </Row>

            </div >
        );
    }
}

export default Football;