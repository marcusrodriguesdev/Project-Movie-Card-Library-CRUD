import React from 'react';
import { Router, Switch } from 'react-router';

export { default as EditMovie } from './EditMovie';
export { default as MovieDetails } from './MovieDetails';
export { default as MovieList } from './MovieList';
export { default as NewMovie } from './NewMovie';
export { default as NotFound } from './NotFound';

class BrowserRoute extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" Component={ MovieList } />
                <Route path="/movies/:id" Component={ MovieDetails } />
                <Route path="/movies/new" Component={ NewMovie } />
                <Route path="/movies/:id/edit" Component={ EditMovie } />
                <Route path="" Component={ NotFound } />
            </Switch>

        )
    }
}
export default BrowserRoute;
