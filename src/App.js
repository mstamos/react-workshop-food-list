import {useState, useEffect} from 'react';
import './App.css';

import List from './List';

const list = [
  'burger',
  'spanakorizo',
  'chicken',
  'pastitio',
  'mpougatsa'
];

const getFoods = () =>  Promise.resolve(list);

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getFoods().then(data => {
      setFoods(data)
    })
  }, [])

  useEffect(() => {
    setFoods(foods.filter(food => food.includes(searchValue)))
  }, [searchValue])

  const onInputChange = event => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="App">
      <input onChange={onInputChange}/>
      <List items={foods}/>
    </div>
  );
}

export default App;
