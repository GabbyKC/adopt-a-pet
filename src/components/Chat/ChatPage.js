import React, {Component} from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Chat from './Chat';

class ChatPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Chat />
                <Footer />
            </div>
        );
    }
}


export default ChatPage;
