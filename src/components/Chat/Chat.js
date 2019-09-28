import React, {Component} from 'react';
import { connect } from "react-redux";
import { logInFirebase, postMessageToFirebase, setupAuth } from '../../actions';
import Timestamp from 'react-timestamp';

import './Chat.css';

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

    submitMessage() {
        this.props.submitMessageToFirebase(this.state.message, this.props.loggedInUser.name);
        this.setState({ message: ''});
    }

    render() {
        const messages = this.props.messages;
        const isLoggedIn = this.props.isLoggedIn;
        const loggedInUser = this.props.loggedInUser;

        if (isLoggedIn && loggedInUser) {
            return (
                <div>
                    <div className='chat-container'>
                    <h2 className='heading'>Doggo Chat Room</h2>
                    {messages.map((message, index) => {
                        return (
                            <div key={message.id} className='chat-box'>
                                <p> <span className='chat-timestamp'><Timestamp date={message.created} />:</span> <span className='chat-content'>{message.content}</span> <br/> from <span className='chat-name'>{message.name}</span> </p>
                            </div>
                        )
                    })}
                    </div>
                    <div className='chat-submit-container'>
                        <div className='flex-chat'>
                            <input className='chat-input' type="text" placeholder='Write your message here...' value={this.state.message} onChange={(e) => this.handleChange(e)} />
                        </div>
                        <div>
                            { this.state.message !== '' ?  <button type='submit' className='chat-submit' onClick={() => this.submitMessage()}>Submit</button> : ''}
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <button type='button' onClick={() => this.props.login()}>Login with Google</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { messages: state.animals.messages, isLoggedIn: state.auth.isLoggedIn, loggedInUser: state.auth.user };
};

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(logInFirebase()),
    submitMessageToFirebase: (message, user) => dispatch(postMessageToFirebase(message, user)),
    setupAuth: () => dispatch(setupAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
