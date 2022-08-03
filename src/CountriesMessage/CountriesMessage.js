import heart from '../image/heart.png';
import skull from '../image/skull.png';
import aid from '../image/aid.png';

export default function CountryMessage(props){
  return(
        <div className="message-wrapper">
          <div className="message">
            <h3>{props.Country}</h3>
            <div> 
              <div className="statistics">
                <span><img src={heart} alt="heart" width="16px" height="16px"/> Total Confirmed : </span>
                <span>{props.TotalConfirmed}</span>
              </div>
              <div className="statistics">
                <span><img src={skull} alt="skull" width="16px" height="16px"/> Total Deaths : </span>
                <span> {props.TotalDeaths}</span>
              </div>
              <div className="statistics">
                <span><img src={aid} alt="aid" width="16px" height="16px"/> Total Recovered : </span>
                <span> {props.TotalRecovered}</span>
              </div>
            </div>
            <button onClick={props.messageClear}>Ok</button>
            </div>          
        </div>
    )
}