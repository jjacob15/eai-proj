/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
import cx from 'classnames';
import TWEEN from '@tweenjs/tween.js';


///TODO move anim to HOC
const AnimShowHide = (WrappedComponent)=> {
    return class extends React.Component {
        render() {
            return <WrappedComponent {...this.props}/>
        }
    }
}


class NavRight extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            display: 'display',
            animating: false,
            height: '0px'
        }

        this.height = {x: 0};
        this.show = this.show.bind(this);
        this.animate = this.animate.bind(this)
        this._localReq;
    }

    componentDidMount() {
        this._localReq = requestAnimationFrame(this.animate);
    }

    animate(time) {
        this._localReq = requestAnimationFrame(this.animate);
        TWEEN.update(time);
    }

    componentWillUnmount() {
        cancelAnimationFrame(this._localReq);
    }

    componentWillReceiveProps(next) {
        if (this.state.animating) return;

        if (next.nav.headerMinimized != this.props.nav.headerMinimized) {
            this.toggle();
        } else {
            this.setState({
                display: (next.nav.isSmallDevice) ? 'none' : 'block'
            })
        }


    }

    toggle() {
        if (this.height.x == 0) {
            this.show();
            return;
        }

        this.hide();
    }

    show() {
        this.setState({
            animating: true,
            display: 'block'
        });

        //var height = {x: 0};
        var a = new TWEEN.Tween(this.height)
            .to({x: 56}, 500)
            .easing(TWEEN.Easing.Quadratic.In)
            .onUpdate((object)=> {
                this.setState({height: `${object.x}px`})
            }).onComplete(()=> {
                this.setState({
                    animating: false
                })
                this.height = {x: 56}
            }).start();
    }

    hide() {
        this.setState({
            animating: true,
        });

        var a = new TWEEN.Tween(this.height)
            .to({x: 0}, 500)
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate((object)=> {
                this.setState({height: `${object.x}px`})
            }).onComplete(()=> {
                this.setState({
                    animating: false,
                    display: 'none'
                })
                this.height = {x: 0}
            }).start();
    }

    render() {
        const c = cx({
            'nav-right': true,
            'nav-right-animate': this.state.animating
        });
        const {nav} = this.props;
        return (<ul className={c} style={{display:this.state.display,height:this.state.height}}>
                <li className="">
                    <a href="#!" className="displayChatbox">
                        <i className="ti-comments"></i>
                        <span className="badge bg-c-green"></span>
                    </a>
                </li>
                <li className="user-profile header-notification">
                    <a href="#!">
                        <img src={require("../../../assets/img/avatar-4.jpg")} className="img-radius"
                             alt="User-Profile-Image"/>
                        <span>{this.props.auth.user}</span>
                        <i className="ti-angle-down"></i>
                    </a>
                    <ul className="show-notification profile-notification" style={{display:'none'}}>
                        <li>
                            <a href="#!">
                                <i className="ti-settings"></i> Settings
                            </a>
                        </li>
                        <li>
                            <a href="user-profile.html">
                                <i className="ti-user"></i> Profile
                            </a>
                        </li>
                        <li>
                            <a href="email-inbox.html">
                                <i className="ti-email"></i> My Messages
                            </a>
                        </li>
                        <li>
                            <a href="auth-lock-screen.html">
                                <i className="ti-lock"></i> Lock Screen
                            </a>
                        </li>
                        <li>
                            <a href="auth-normal-sign-in.html">
                                <i className="ti-layout-sidebar-left"></i> Logout
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        )
    }
}
export default AnimShowHide(NavRight);