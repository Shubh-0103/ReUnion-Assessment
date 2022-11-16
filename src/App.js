import { useState } from 'react';
import './App.css';
import Cards from './Components/Cards';
import NavBar from './Components/Navigation';
import SearchFilter from './Components/SearchFilter';
import data from "./Data.json"

function App() {
  const [location, setLocation] = useState("")
  const [date, setDate] = useState();
  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(100)
  const [type, setType] = useState()
  const [filterData, setFilteredData] = useState(data)
  return (
    <div className="App">
      <NavBar />
      <SearchFilter data={data} setFilteredData={setFilteredData} location={location} setLocation={setLocation} date={date} setDate={setDate} minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} type={type} setType={setType} />
      <Cards filterData={filterData} />
    </div>
  );
}

export default App;
