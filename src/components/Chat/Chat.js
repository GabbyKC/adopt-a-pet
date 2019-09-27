import React, {Component} from 'react';
import { connect } from "react-redux";
import { logInFirebase, postMessageToFirebase, setupAuth } from '../../actions';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
    }

    componentDidMount() {
        this.props.setupAuth();
    }

    handleChange(event) {
        this.setState({ message: event.target.value });
    }

    render() {
        const messages = this.props.messages;
        const isLoggedIn = this.props.isLoggedIn;
        const loggedInUser = this.props.loggedInUser;

        if (isLoggedIn && loggedInUser) {
            return (
                <div>{loggedInUser.name} is logged in!</div>
            )
        }
        return (
            <div>
                <p></p>
                <button className='button' type='button' onClick={() => this.props.login()}>Login with Google</button>

                {/*<input type="text" placeholder='Message' value={this.state.message} onChange={(e) => this.handleChange(e)} />
                <button className='button' type='button' onClick={() => this.props.submitMessage(this.state.message)}>Send Message</button>
                <div>
                    {messages.map((message, index) => {
                        return (
                            <p key={message.id}>{message.data}</p>
                        )
                    })}
                </div>*/}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { messages: state.animals.messages, isLoggedIn: state.auth.isLoggedIn, loggedInUser: state.auth.user };
};

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(logInFirebase()),
    submitMessage: (message) => dispatch(postMessageToFirebase(message)),
    setupAuth: () => dispatch(setupAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
