import * as React from 'react';
import * as ReactDom from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';
import { CheckboxWithLabel } from './CheckboxWithLabel';

// const App = ({ message }) => <div>{message}</div>
// const App: React.SFC<{ message: string }> = ({ message }) => <div>{message}</div>;
// const App: React.FC<{ message: string }> = ({ message }) => <div>{message}</div>;

// class App extends React.Component { 
//     render() { 
//         return (
//             <div>Hello World!</div>
//         );
//     }
// }

// class App extends React.Component<{
//     message: string,
// }, {
//     count: number,
// }> {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             count: 0
//         }
//     }
//     render() { 
//         return (
//             <div onClick={this.increment}>{this.props.message} {this.state.count}</div>
//         );
//     }
//     increment = () => {
//         this.setState({
//             count: this.state.count + 1
//         });
//     }
// }


type AppProps = {
    message: string
}
type AppState = {
    count: number
}
class App extends React.Component<AppProps, AppState> {
    constructor(props) {
        super(props);
        this.state = { 
            count: 0
        }
    }
    render() { 
        return (
            <div>
                <div onClick={this.increment}>{this.props.message} {this.state.count}</div>
                <CheckboxWithLabel labelOn="on" labelOff="off" />
                <Router>
                    <div>
                        <nav>
                        <ul>
                            <li>
                            <Link to="/">Home</Link>
                            </li>
                            <li>
                            <Link to="/about">About</Link>
                            </li>
                            <li>
                            <Link to="/users">Users</Link>
                            </li>
                        </ul>
                        </nav>

                        {/* A <Switch> looks through its children <Route>s and
                            renders the first one that matches the current URL. */}
                        <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
}
function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }
ReactDom.render(
    <App message="Hello World!" />,
    // <App />,
    document.getElementById('root')
);