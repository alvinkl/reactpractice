import React from 'react'

export class Home extends React.Component {
    render() {
        var user = this.props.user;
        return (
            <div>
                <p>Hi, my name is {user.name}</p>
                <p>I'm {user.age} years old</p>
                <p>My hobbies are : </p>
                <ul>
                    {user.hobbies.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
            </div>
        )
    }
}
