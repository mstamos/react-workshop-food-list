import {useState} from 'react';
import './App.css';

const list = [
  'burger',
  'spanakorizo',
  'chicken',
  'pastitio',
  'mpougatsa'
];

function List({results}) {

  return (
    <ul>
      {results
        .map(item => {
          return (
          <li key={item}>{item}</li> 
          )
        })
      }
    </ul>
  );
}


function App() {
  const [searchValue, setSearchValue] = useState('');

  const onInputChange = event => {
    setSearchValue(event.target.value)
  }


  const results = list.filter(food => food.includes(searchValue))


  return (
    <div className="App">
      <input onChange={onInputChange}/>
      <List results={results}/>
    </div>
  );
}

export default App;
