export default function CountryItems(props){
  return(
      <div>
        <button onClick={props.Message}>
          <li>
            <div className="flexCountry">
              <div className="countries"></div>
              <span>{props.Country}</span>
            </div>
            <span className="TotalConfirmed">{props.TotalConfirmed}</span>
          </li>
        </button>
      </div>
    )
}