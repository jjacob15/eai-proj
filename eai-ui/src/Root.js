/**
 * Created by Jaison.Jacob on 7/9/2018.
 */
import { Provider } from 'react-redux';
import { store} from './store';
import App from './App';


class Root extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <App  />
            </Provider>
        )
    }
}


ReactDOM.render(<Root />, document.getElementById('root'));