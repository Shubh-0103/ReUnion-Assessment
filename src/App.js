import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';
import './App.css';
import Cards from './Components/Cards';
import NavBar from './Components/Navigation';
import SearchFilter from './Components/SearchFilter';
import data from "./Data.json"


// The web page is divided into 3 sections 
// Nav Bar
// Search & Filter options
// Cards 
function App() {
  const [location, setLocation] = useState("") //Location state which is used in search filter and passed to cards as prop
  const [date, setDate] = useState(); //Date state which is used in search filter and passed to cards as prop
  const [minPrice, setMinPrice] = useState(0) //Min state which is used in search filter and passed to cards as prop
  const [maxPrice, setMaxPrice] = useState(100) // Max state which is used in search filter and passed to cards as prop
  const [type, setType] = useState() // Type state which is used in search filter and passed to cards as prop
  const [filterData, setFilteredData] = useState(data) // Data After filteration applied to original data
  return (
    <div className="App">
      {/* Navigation bar  */}
      <NavBar />
      {/* Search & Filter component*/}
      <SearchFilter
        data={data}
        setFilteredData={setFilteredData}
        location={location}
        setLocation={setLocation}
        date={date} setDate={setDate}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        type={type}
        setType={setType} />
        {/* Data Cards */}
      <Cards filterData={filterData} />
    </div>
  );
}

export default App;
