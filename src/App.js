import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      shoe: [{
        brand_name: 'asdf',
        manufacturer: 'asdf',
        shoe_type: 'ASDF',
        color: 'asdf',
        size: 'asdf',
        fasten_type: 'as',
        material: 'asdf'
      }],
    }
  }
  componentDidMount(){
    fetch('http://localhost:8000/api/shoe')
    .then(res => res.json())
    .then((data) => {
      console.log(data.results)
      this.setState({shoe: data})
      console.log(this.state.shoe)
  })
  }

  render(){
    console.log(this.state.shoe)
    return (
      <div>
        <ul>
        {this.state.shoe.map((s) => {
          return(
          <li>
            {s.brand_name}
            <ul>
              <li>{s.manufacturer}</li>
              <li>{s.shoe_type}</li>
              <li>{s.fasten_type}</li>
              <li>{s.material}</li>
              <li>{s.color}</li>
              <li>{s.size}</li>
            </ul>
          </li>)
        })}
        </ul>
      </div>
    );
  }
}

export default App;
