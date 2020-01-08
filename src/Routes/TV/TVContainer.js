import React, { Component } from 'react';
import TVPresenter from './TVPresenter';
import { tvApi } from '../../api';

export default class TVContainer extends Component {
    
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        loading: null,
        error: true
    };

    //네트워크
    async componentDidMount() {
        try {

            const {
                data: { results: topRated }
            } = await tvApi.topRated();
            
            const {
                data: { results: popular }
            } = await tvApi.popular();


            const {
                data: { results: airingToday }
            } = await tvApi.airingToday();

            this.setState({
                topRated,
                popular,
                airingToday
            })

        } catch {
            this.setState({
                error: "Can't find TV Show information"
            });

        } finally {
            this.setState({
                loading: false
            });
        }
    }

    
    render() {

        const { topRated, popular, airingToday, loading, error } = this.state;

        console.log("Top Rated:", topRated );

        return (
            <TVPresenter
                topRated={topRated}
                popular={popular}
                airingToday={airingToday}
                loading={loading}
                error={error}
            />
        );
    }
}


