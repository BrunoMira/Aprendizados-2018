
// se não houver um caminho (./ ou ../)
//o modulo está sendo importado pelo node_modules
import React from 'react';
import { render } from 'react-dom';

// import css
import css from './styles/style.styl';

// import Componentes
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store ,{ history } from './store';


const router = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>
    
)

// render(html, element onde o html será inserido)
render(router, document.getElementById('root'));

