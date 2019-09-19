import React, {Component} from 'react';
import { connect } from "react-redux";

import './OrgList.css';

import { getOrgs } from '../../actions/index';

class OrgList extends Component {
    componentDidMount() {
        this.props.onLoad();
    }
    render() {
        const organizations = this.props.orgs;
        console.log(organizations);
        return (
            <div className='org-list-container'>
                <p className='heading'>Rescue Groups we work with:</p>
                <div className='list-contents'>
                    <ul>
                    {organizations.map((org, index) => {
                        return (
                            <li key={org.id}>{org.name}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return { orgs: state.orgs };
};

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch(getOrgs())
});

export default connect(mapStateToProps, mapDispatchToProps)(OrgList);
