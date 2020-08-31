import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import '../containers/App.css';

class App extends Component {
constructor(){
super()
this.state = {
    robots: [],
    searchfield: ''
}
}
componentDidMount() {
fetch('https://jsonplaceholder.typicode.com/users')
.then(response=> response.json())
.then(users => this.setState({robots: users}))
}

onSearchChange = (e) => {
this.setState({ searchfield: e.target.value})
}

render() {
const {robots, searchfield} = this.state;
const filteredRobots = robots.filter(robot => {
return( 
robot.name.toLowerCase().includes(searchfield.toLowerCase()))
})
    return !robots.length ? 
        <h1>Loading</h1> :
        (
            <div className="tc">
            <p className='fw9 huge'>RoboFrienz</p>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
                <ErrorBoundry>
                <CardList robots={filteredRobots}/>
                </ErrorBoundry>
            </Scroll>  
            </div>
        );
    }
}
export default App;