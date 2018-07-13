/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
import NavBar from './components/nav/NavBar';
import MainContainer from './components/MainContainer';
import {connect} from 'react-redux';
import {SET_BROWSER_SIZE,TOGGLE_SIDEBAR} from './constants/types';
import cx from 'classnames';

//map all necessary literals from state to props here
const state = state => ({
    auth: state.auth,
    nav: state.nav,
});

const props = dispatch=> ({
    updateScreenSize: (status)=> {
        dispatch({type: SET_BROWSER_SIZE, size: status})
    },
    dimissSideBar: ()=> {
        dispatch({type: TOGGLE_SIDEBAR})
    }
});


class App extends React.Component {
    constructor() {
        super()
        this.updateDimensions = this.updateDimensions.bind(this)
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        if (this.props.nav.isSmallDevice && document.body.offsetWidth > 992) {
            this.props.updateScreenSize(false);
        }

        if (!this.props.nav.isSmallDevice && document.body.offsetWidth < 992) {
            this.props.updateScreenSize(true);
        }
    }

    renderOverlay() {
        const {isSmallDevice,displaySideBar} = this.props.nav;
        const c = cx({
            'overlay-box': true,
            'overlay-box-show': (isSmallDevice && displaySideBar)
        })
        return <div className={c} onClick={this.props.dimissSideBar}/>;
    }

    render() {
        return (
            <div style={{overflow:'hidden'}}>
                {this.renderOverlay()}
                <NavBar {...this.props} />
                <MainContainer {...this.props}/>
            </div>
        )
    }
}

export default connect(state, props)(App);

