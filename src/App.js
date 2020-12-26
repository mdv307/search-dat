import React, { Component } from 'react';
import './App.css';
import Information from './info-json';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: null
    };

  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword })
  }

  render() {
    const styleInfo = {
      paddingRight: '10px',
      color: 'black'
    }
    const elementStyle = {
      border: 'solid',
      borderRadius: '10px',
      position: 'relative',
      left: '10vh',
      height: '5vh',
      width: '50vh',
      marginTop: '5vh',
      marginBottom: '10vh',
    }
    const items = Information.filter((data) => {
      if (this.state.search == null)
        return data
      else if (data.name.toLowerCase().includes(this.state.search.toLowerCase())) {
        return data
      }
    }).map(data => {
      return (
        <div>
          <ul>
            <li style={{ position: 'relative', left: '10vh' }}>
              <span style={styleInfo}>{data.name}</span>
            </li>
          </ul>
        </div >
      )
    })

    return (
      <div>
        <input type="text" placeholder="Enter item to be searched" style={elementStyle} onChange={(e) => this.searchSpace(e)} />
        { items}
      </div >
    )
  }
}

export default App;