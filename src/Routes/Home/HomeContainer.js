import React, { Component } from 'react';
import HomePresenter from './HomePresenter';
import { moviesApi } from '../../api';

export default class HomeContainer extends Component {

    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        loading: true,
        error: null
    };
    
    //네트워크 태우기


    async componentDidMount() {
        try {
            const {
                data: { results: nowPlaying }
            } = await moviesApi.nowPlaying();
            const {
                data: { results: upcoming }
            } = await moviesApi.upcoming();
            const {
                data: { results: popular }
            } = await moviesApi.popular();
            this.setState({
                nowPlaying,
                upcoming,
                popular
            });
        } catch {
            this.setState({
                error: "Can't find movies informantion"
            });
        } finally {
            this.setState({
                loading: false
            })
        }
    }



    render() {

        const { nowPlaying, upcoming, popular, loading, error } = this.state;

        console.log(nowPlaying);


        return (
            <HomePresenter
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                loading={loading}
                error={error}
            />
        );
    }
}


