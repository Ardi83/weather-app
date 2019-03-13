import React, { Component } from "react";
import { Consumer } from "./Context";
import "../App.css";

class Hourly extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          let symbolArray = [];
          let count = -1;
          return (
            <div className="container my-0">
              {value.HourlyTemp.map(day => {
                symbolArray.push(
                  `https://openweathermap.org/img/w/${day.weather[0].icon}.png`
                );
                count++;
                return (
                  <table
                    style={{ textAlign: "center" }}
                    className="table col-md-7 bg-info mb-0"
                    key={day.dt}
                  >
                    <tbody>
                      <tr>
                        <td> {day.dt_txt}</td>
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
              })}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Hourly;
