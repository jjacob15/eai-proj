import NavBarLogo from './NavBarLogo';
import NavLeft from './NavLeft';
import NavRight from './NavRight';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="header-navbar" header-theme="theme1">
                <div >
                    <NavBarLogo {...this.props.nav}/>
                    <div className="navbar-container container-fluid">
                        <NavLeft />
                        <NavRight {...this.props}/>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;

