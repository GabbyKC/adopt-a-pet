import React, {Component} from 'react';
import { connect } from "react-redux";

import { getOrgs } from '../../actions/index';

import './OrgList.css';

class OrgList extends Component {
    componentDidMount() {
        this.props.onLoad();
    }
    render() {
        const organizations = this.props.orgs;
        if (organizations.length === 0) {
            return (
                <div className='info-loader'></div>
            )
        }
        console.log(organizations);
        return (
            <div className='org-list-container'>
                <p className='heading'>Rescue Groups we work with:</p>
                <div className='list-contents'>
                    <ul>
                    {organizations.map((org, index) => {
                        return (
                            <li key={org.id}><a href={org.url}>{org.name}</a></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return { orgs: state.animals.orgs };
};

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch(getOrgs())
});

export default connect(mapStateToProps, mapDispatchToProps)(OrgList);
