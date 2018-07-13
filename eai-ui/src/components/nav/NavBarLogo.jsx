/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
import {connect} from 'react-redux';
import {TOGGLE_HEADER_NAVBAR,TOGGLE_SIDEBAR} from '../../constants/types';
import cx from 'classnames';

const props = dispatch=> ({
    showMore: ()=> {
        dispatch({type: TOGGLE_HEADER_NAVBAR})
    },
    toggleSideBar: ()=> {
        dispatch({type: TOGGLE_SIDEBAR})
    }
});

class NavBarLogo extends React.Component {
    render() {
        const c = cx({
            'navbar-logo': true,
            'navbar-logo-sm': this.props.isSmallDevice
        })
        const m = cx({
            'mobile-menu': true,
            'mobile-menu-sm': this.props.isSmallDevice
        })
        const o = cx({
            'mobile-options': true,
            'mobile-options-sm': this.props.isSmallDevice
        })
        return (
            <div className={c}>
                <a className={m} onClick={this.props.toggleSideBar}>
                    <i className="ti-menu"></i>
                </a>
                <a>
                    <img className="img-fluid" src={require('../../../assets/img/logo.png')}/>
                </a>
                <a className={o} onClick={this.props.showMore}>
                    <i className="ti-more"></i>
                </a>
            </div>
        )
    }
}

export default connect(()=>({}), props)(NavBarLogo)

