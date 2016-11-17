import React from 'react'
import { render } from 'react-dom'

import { Header } from './components/Header'
import { Home } from './components/Home'

class App extends React.Component {
    render() {
        var user = {
            name: 'Sussy',
            age: 20,
            hobbies: ['cooking', 'dancing', 'reading']
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home user={ user }/>
                    </div>
                </div>
            </div>
        )
    }
}

const app = window.document.getElementById('app');

render(<App />, app);
