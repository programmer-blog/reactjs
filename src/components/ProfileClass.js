import React from 'react'

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("...");
        const json = await data.json();
        this.setState({
            userInfo: json
        })
    }

    render() {
        //const { count } = this.state;
        return (
            <div>
                <h1>Profile Class Component</h1>
                <img src={this.state.userInfo.avatar_url} />
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location: {this.state.userInfo.location}</h3>
            </div>
        )
    }
}

export default Profile;