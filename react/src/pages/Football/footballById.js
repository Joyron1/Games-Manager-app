import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import * as axios from 'axios';
import { Route, Link } from 'react-router-dom';

import GameCard from '../../components/GameCard';
import CommentsList from '../../components/commentList';
import AddComment from '../../components/AddComent';

class Football extends Component {

    state = {
        games: [],
        comments: []
    }

    componentDidMount() {
        this.getGamesById();
        this.getCommentsByGameID();
        console.log(this.props.match.params.id)
    }

    async getGamesById() {
        let gameId = this.props.match.params.id;
        console.log(gameId)
        try {
            await axios.get(`http://www.localhost:4000/getGamesById?id=${gameId}`).then(response => {
                this.setState({ games: response.data }, () => { console.log("games by id : ", this.state.games) })
            })
        } catch (e) {
            console.log(e);
        }
    }

    async getCommentsByGameID() {
        console.log("this.game : ", this.props.match.params)
        let id = this.props.match.params.id;
        try {
            await axios.get(`http://www.localhost:4000/getCommentsByGameID?id=${id}`).then(response => {
                this.setState({ comments: response.data }, () => { console.log("comments : ", this.state.comments) })
            })
        } catch (e) {
            console.log(e);
        }
    }

    async insertComment() {
        let comment = document.getElementById("comment").value;
        let id = this.props.match.params.id;
        try {
            await axios.get(`http://www.localhost:4000/insertComment?comment=${comment}&game_id=${id}`).then(response => {
                this.setState({ comments: response.data }, () => { console.log("comments : ", this.state.comments) })
            })
        } catch (e) {
            console.log(e);
        }
    }


    render() {

        let gameCard = this.state.games.map(gameOBJ => {
            return (<GameCard game={gameOBJ}> </GameCard>)
        })

        let Comments = this.state.comments.map(commentOBJ => {
            return (<CommentsList comment={commentOBJ}> </CommentsList>)
        })

        let addComment = <AddComment addFN={() => this.insertComment()}> </AddComment>

        return (
            <div className="container p-2 ml-2">
                <Link to="/"> <button type="button" className="btn btn-none my-3"> Home </button> </Link>
                {gameCard}

                <Row className="mt-2">
                    <Col xs={6}> <ul class="list-group">
                        <h6>Comments about the game:</h6>
                        {Comments}
                    </ul>
                    </Col>

                    <Col xs={6}> {addComment} </Col>
                </Row>



            </div >
        );
    }
}

export default Football;