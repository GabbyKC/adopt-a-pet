import React, {Component} from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import OrgList from './OrgList';

class OrgPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <OrgList />
                <Footer />
            </div>
        );
    }
}


export default OrgPage;
