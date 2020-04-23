import React, {Component} from 'react';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js'
import otakus from '../otakus.js'
import Scroll from '../components/Scroll.js'
import '../index.css';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            otakus: otakus,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value})
       
    }



    render(){
        const { otakus, searchfield } = this.state
        const filterdOtakus = otakus.filter(otaku => {
            return otaku.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        return ( 
            
            <div>
            <h1 className="tc f1">RoboFriends</h1>
            <SearchBox searchChange ={this.onSearchChange} />
            <Scroll>
            <CardList otakus= {filterdOtakus}/>
            </Scroll>
            </div>
            );
    }
    
}

export default App;