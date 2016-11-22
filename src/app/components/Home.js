import React from 'react'

export class Home extends React.Component {
    render() {
        return (
            <div>
                <h3>Home</h3>
            </div>
        )
    }
}


// export class Home extends React.Component {
//     constructor(props) {
//         super();
//         this.state = {
//             age: props.initialAge,
//             homeLink: props.initialLinkName
//         }
//         console.log('Constructor');
//     }
//
//     componentWillMount() {
//         console.log('Component will mount');
//     }
//
//     componentDidMount() {
//         console.log('Component did mount');
//     }
//
//     componentWillReceiveProps(nextProps) {
//         console.log('Component will receive props', nextProps);
//     }
//
//     shouldComponentUpdate(nextProps, nextState) {
//         console.log('Should component update', nextProps, nextState);
//         return true;
//     }
//
//     componentWillUpdate(nextProps, nextState) {
//         console.log('Component will update', nextProps, nextState);
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         console.log('Component did update', prevProps, prevState);
//     }
//
//     componentWillUnmount() {
//         console.log('Component will unmount');
//     }
//
//     onMakeOlder() {
//         this.setState({
//             age: this.state.age + 3
//         });
//     }
//
//     onChangeLink() {
//         this.props.changeLink(this.state.homeLink);
//     }
//
//     onHandleChange(event) {
//         this.setState({
//             homeLink: event.target.value
//         });
//     }
//
//     render() {
//         return (
//             <div>
//                 <p>Hi, my name is {this.props.name}</p>
//                 <p>I'm {this.state.age} years old</p>
//                 <hr/>
//                 <button
//                     className='btn btn-primary'
//                     onClick={() => this.onMakeOlder()}>Make me older!</button>
//                 <button className='btn btn-primary'
//                     onClick={this.props.greet}>Greet</button>
//                 <hr/>
//                 <input type="text"
//                     value={this.state.homeLink}
//                     onChange={(event) => this.onHandleChange(event)}/>
//                 <button className='btn btn-primary'
//                     onClick={() => this.onChangeLink()}>Change Link</button>
//             </div>
//         )
//     }
// }
//
// Home.propTypes = {
//     name: React.PropTypes.string,
//     initialAge:  React.PropTypes.number,
//     greet: React.PropTypes.func,
//     changeLink: React.PropTypes.func,
//     initialLinkName: React.PropTypes.string
// }
