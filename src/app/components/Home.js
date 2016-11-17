import React from 'react'

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            homeLink: "changed Link"
        }
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        })
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink)
        console.log(this.state.homeLink)
    }

    render() {
        return (
            <div>
                <p>Hi, my name is {this.props.name}</p>
                <p>I'm {this.state.age} years old</p>
                <hr/>
                <button
                    className='btn btn-primary'
                    onClick={() => this.onMakeOlder()}>Make me older!</button>
                <button className='btn btn-primary'
                    onClick={this.props.greet}>Greet</button>
                <hr/>
                <button className='btn btn-primary'
                    onClick={() => this.onChangeLink()}>Change Link</button>
            </div>
        )
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    initialAge:  React.PropTypes.number,
    greet: React.PropTypes.func,
    changeLink: React.PropTypes.func
}
