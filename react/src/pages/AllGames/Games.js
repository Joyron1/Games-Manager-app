import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import * as axios from 'axios';
import { Route, Link } from 'react-router-dom';

class Meetings extends Component {

    state = {
        games: [],
    }

    componentDidMount() {
        this.getGames();
    }

    async getGames() {
        try {
            await axios.get(`http://www.localhost:4000/getGames`).then(response => {
                this.setState({ games: response.data }, () => { console.log("games : ", this.state.games) })
            })
        } catch (e) {
            console.log(e);
        }
    }

    async getGamesByCategory(category) {
        console.log(category)
        try {
            await axios.get(`http://www.localhost:4000/getGamesByCat?category=${category}`).then(response => {
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
                        <td><Link to={"/" + game.category.toLowerCase() + "/" + game.id}><button type="button" className="btn btn-secondary"> more info </button></Link></td>
                    </tr>
                )
            })
        }

        return (
            <div className="container p-2 ml-2">

                <Row className="mt-5 mb-2" style={{ textAlign: "center", justifyContent: "center" }}>
                    <Link to="/football"> <Col xs={6}> <button type="button" className="btn btn-primary" style={{ width: "200px", borderRadius: "100px" }} onClick={() => this.getGamesByCategory("Football")}> Football </button> </Col> </Link>
                    <Link to="/basketball"> <Col xs={6}> <button type="button" className="btn btn-primary" style={{ width: "200px", borderRadius: "100px" }} onClick={() => this.getGamesByCategory("Basketball")}> BasketBall </button></Col> </Link>
                    {/* <Link to="/"><Col xs={4}> <button type="button" className="btn btn-primary" style={{ width: "200px", borderRadius: "100px" }} onClick={() => this.getGames()}> All Games </button> </Col> </Link> */}
                </Row>

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

export default Meetings;