import React, { Component } from "react";
import { Consumer } from "./Context";
import "../App.css";

class Week extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          let symbolArray = [];
          let count = -1;
          let day1;
          return (
            <div className="container my-0">
              {value.HourlyTemp.map(day => {
                symbolArray.push(
                  `https://openweathermap.org/img/w/${day.weather[0].icon}.png`
                );
                count++;
                switch (new Date(day.dt * 1000).getUTCDay()) {
                  case 0:
                    day1 = "Sun";
                    break;
                  case 1:
                    day1 = "Mon";
                    break;
                  case 2:
                    day1 = "Tue";
                    break;
                  case 3:
                    day1 = "Wed";
                    break;
                  case 4:
                    day1 = "Thu";
                    break;
                  case 5:
                    day1 = "Fri";
                    break;
                  case 6:
                    day1 = "Sat";
                }
                let kl = day.dt_txt.substring(10, 13);
                if (kl == 12) {
                  return (
                    <table
                      style={{ textAlign: "center" }}
                      className="table col-md-7 bg-info mb-0"
                      key={day.dt}
                    >
                      <tbody>
                        <tr>
                          <td>{day1}</td>
                          <td>
                            {new Date(day.dt * 1000).toLocaleDateString()}
                          </td>
                          <td>
                            <img src={symbolArray[count]} />
                          </td>
                          <td>{day.main.temp} &#8451;</td>
                          <td>{day.main.temp_min} &#8451;</td>
                          <td>{day.main.temp_max} &#8451;</td>
                          <td>{day.wind.speed} m/s</td>
                          <td>{day.weather[0].main}</td>
                          <td>{day.weather[0].description}</td>
                        </tr>
                      </tbody>
                    </table>
                  );
                }
              })}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Week;
