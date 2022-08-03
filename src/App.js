import './App.css';
import {useState ,useEffect} from 'react';
import icon from './image/CovidIcon.png'
import CountryMessage from './CountriesMessage/CountriesMessage'
import CountryItems from './CountriesItems/CountriesItems'

function App(){
  const[Countries , setCountries] = useState(Array());
  const[message , setMessage] = useState('');
  const[search , setSearch] = useState('');

 useEffect(()=>{
    fetch('https://api.covid19api.com/summary')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountries(data.Countries)
      });


      
  }, []);
function Message(Country){
var message =  <CountryMessage
          TotalConfirmed={Country.TotalConfirmed}
          TotalDeaths={Country.TotalDeaths}
          TotalRecovered={Country.TotalRecovered}
          Country = {Country.Country}
          messageClear = {messageClear}/>
  setMessage(message , message)
}  

function messageClear(){
  setMessage(message , '')
}


    const SearchCountry = Countries.filter(country => {
      return country.Country.toLowerCase(0).includes(search.toLowerCase())
    })
    const CountriesItems = SearchCountry.map((Country, index)=>
      <div key={index}>
        <CountryItems 
        index={index}
        Message = {Message.bind(null , Country)}
        Country = {Country.Country}
        TotalConfirmed ={Country.TotalConfirmed}
        />
      </div>)
  return(
    <div className="App">
      <div className="title">
        <div className="logo"><img src={icon} alt="Covid-19" width="150px" height="150px"/><h1>Statistics</h1></div>
        <input type="text" placeholder="Search..." onChange={e => setSearch(e.target.value)}/>
      </div>
      <div>{message}</div>
      <ul>
        <li className="List">
          <div className="flexCountry"><div className="counter">№</div><span>Country</span></div>
          <span className="TotalConfirmed">Total Confirmed</span>
        </li>
        {CountriesItems}
      </ul>
    </div>
  )
}
export default App;
