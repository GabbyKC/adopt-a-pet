import React, {Component} from 'react';
import { connect } from "react-redux";
import { logInFirebase, logoutFirebase, postMessageToFirebase, setupAuth } from '../../actions';
import Timestamp from 'react-timestamp';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faHome, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import ScrollToBottom from 'react-scroll-to-bottom';

import './Chat.css';

library.add( fab, fas, faHome, faMapMarker)

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

        if (isLoggedIn && messages.length === 0) {
            return (
                <div className='info-loader'></div>
            )
        }

        if (isLoggedIn && loggedInUser && messages.length !== 0) {
            return (
                <ScrollToBottom className='scroll-to-bottom'>
                <div>
                    <div className='chat-container'>
                        <h2 className='heading'>Doggo Chat Room</h2>
                        <div className='messages-container'>
                            <div className='google-button-container'>
                                <button className='google-button logout' type='button' onClick={() => this.props.logout()}> <FontAwesomeIcon icon={['fab','google']} /> Log Out</button>
                            </div>
                        {messages.map((message, index) => {
                            return (
                                <div key={message.id} className='chat-box'>
                                    <p> <span className='chat-timestamp'><Timestamp date={message.created} />:</span> <span className='chat-content'>{message.content}</span> <br/> from <span className='chat-name'>{message.name}</span> </p>
                                </div>
                            )
                        })}
                        </div>
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
            </ScrollToBottom>
            )
        }
        return (
            <div className='chat-container'>
                <h2 className='heading'>Doggo Chat Room</h2>
                <p className='chat-intro'>To view and post comments, please log in via Google.</p>
                <div className='google-button-container'>
                    <button className='google-button' type='button' onClick={() => this.props.login()}> <FontAwesomeIcon icon={['fab','google']} /> Log in with Google</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { messages: state.animals.messages, isLoggedIn: state.auth.isLoggedIn, loggedInUser: state.auth.user };
};

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(logInFirebase()),
    logout: () => dispatch(logoutFirebase()),
    submitMessageToFirebase: (message, user) => dispatch(postMessageToFirebase(message, user)),
    setupAuth: () => dispatch(setupAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
