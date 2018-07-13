/**
 * Created by Jaison.Jacob on 7/13/2018.
 */
import SideBar from './sidebar/Sidebar';

class MainContainer extends React.Component {

    render() {
        return (<div className="main-container">
            <SideBar {...this.props}/>
        </div>)
    }
}

export default MainContainer