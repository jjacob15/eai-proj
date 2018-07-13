/**
 * Created by Jaison.Jacob on 7/11/2018.
 */
import cx from 'classnames';
import {connect} from 'react-redux';
import {SET_SELECTED_MENU}  from '../../constants/types';

const props = disptach =>({
    onMenuSelected: (item)=> {
        disptach({type: SET_SELECTED_MENU, item})
    }
})

class SideBar extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {displaySideBar,sideBarMenu} = this.props.nav;
        const c = cx({
            'side-bar': true,
            'side-bar-sm': !displaySideBar
        })

        const aStyle = (curr) => cx({
            'selected active': (sideBarMenu.selected && (sideBarMenu.selected.id == curr.id || (curr.content && curr.content.filter(x=>x.id == sideBarMenu.selected.id).length > 0)))
        })
        const caretStyle = (curr) =>cx({
            'mcaret': curr.content,
            'mcaret-plus': (curr.content && !curr.expand),
            'mcaret-minus': (curr.content && curr.expand)
        })
        const subMenuStyle = (curr)=>cx({
            'sub-menu': true,
            'sub-menu-visible': curr.expand
        })

        return (<nav className={c}>
            <div className="main-menu">
                {sideBarMenu.menu.map((s)=>(<div>
                        <div className="nav-label">{s.label}</div>
                        <ul className="left-item">
                            {s.content.map((item)=>(
                                <li >
                                    <a className={aStyle(item)} onClick={()=>this.props.onMenuSelected(item)}>
                                    <span className="micron">
                                        <i className={`ti-${item.icon}`}/>
                                    </span>
                                        <span className="mtext"> {item.label}</span>
                                        <span className={caretStyle(item)}></span>
                                    </a>
                                    {item.content && (
                                        <ul className={subMenuStyle(item)}>
                                            {item.content.map((sub)=>(
                                                <li>
                                                    <a onClick={()=>this.props.onMenuSelected(sub)}>
                                                        <span>{sub.label}</span>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>))}
                        </ul>
                    </div>
                ))}
            </div>
        </nav>);
    }
}

export default connect(()=>({}), props)(SideBar);
