
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [apiData, setApiData] = useState([]);

  const getData = async () => {
    const apiresp = await axios.get("https://dummyjson.com/recipes");
    setApiData(apiresp.data.recipes);
    // console.log(apiresp.data.recipes);

  }

  useEffect(() => {
    getData();
  }, [])




  return (
    <div className="App">
      {apiData.map((eachItem) => {
        console.log(eachItem)

        return (
          <div className="div">
            <img src={eachItem.image} />
            <h1>{eachItem.name}</h1>
          </div>
        );
      })}
    </div>
  );

}
export default App;
