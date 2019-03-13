import React, { Component } from "react";
import { Consumer } from "./Context";
import Weather from "./Weather";
import "../App.css";

class Info extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { temp, pressure, humidity, temp_min, temp_max } = value.main;
          const { country, sunrise, sunset } = value.sys;
          const { speed, deg } = value.wind;
          const { description, main } = value.weather;
          return (
            <div className="home">
              <div className="info ml-5">
                <h4>Country : {country}</h4>
                <h4>City : {value.name}</h4>
                <div style={{ display: "flex", textDecoration: "none" }}>
                  <div className="mr-1">
                    <img src={value.iconSrc} />
                  </div>
                  <div className="mr-1">
                    {value.cifa ? (
                      <h2>{temp}&#8451;</h2>
                    ) : (
                      <h2>{(temp * 9) / 5 + 32}&#8457;</h2>
                    )}
                  </div>
                  <select className="custom-select col-md-2" id="cifa">
                    <option defaultValue>&#8451;/&#8457;</option>
                    <option value="celi">&#8451;</option>
                    <option value="far">&#8457;</option>
                  </select>
                </div>
                <div className="mb-2">{new Date().toUTCString()}</div>
                <table>
                  <tbody className="table table-info">
                    <tr>
                      <th scope="row">Wind</th>
                      <td>
                        {speed} m/s, {deg}&deg;
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">Humidity</th>
                      <td>{humidity} %</td>
                    </tr>
                    <tr>
                      <th scope="row">Sunrise</th>
                      <td>{new Date(sunrise * 1000).toLocaleTimeString()}</td>
                    </tr>
                    <tr>
                      <th scope="row">Sunset</th>
                      <td>{new Date(sunset * 1000).toLocaleTimeString()}</td>
                    </tr>
                    <tr>
                      <th scope="row">Pressure</th>
                      <td>{pressure} hpa</td>
                    </tr>
                    <tr>
                      <th scope="row">Min Temp</th>
                      <td>{temp_min} &#8451;</td>
                    </tr>
                    <tr>
                      <th scope="row">Max Temp</th>
                      <td>{temp_max} &#8451;</td>
                    </tr>
                    <tr>
                      <th scope="row">main</th>
                      <td>{main}</td>
                    </tr>
                    <tr>
                      <th scope="row">Description</th>
                      <td>{description}</td>
                    </tr>
                    <tr>
                      <th scope="row">Coord</th>

                      <td>
                        Lat: {value.coord.lat} <div />
                        Lon: {value.coord.lon}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Weather />
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Info;
