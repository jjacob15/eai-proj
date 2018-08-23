import React, { Component } from 'react';
import IApply from './home/IApply';
import TestControl from './testControl';
import { APPLY_APP_TC } from '../../../constants/iapplyApps';

export default class Index extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { iapply } = this.props;

        switch (iapply.app) {
            case APPLY_APP_TC:
                return (
                    <TestControl />
                );
            default:
                return (
                    <IApply />
                );
        }
    }
}