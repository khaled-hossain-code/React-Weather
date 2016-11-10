var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
    
    getInitialState: function(){
        return {
            location: 'Dhaka',
            temp: 33
        }
    },

    handleSearch: function(location){
        this.setState({
            location:location,
            temp: 25
        })
    },

    render: function () {
        var {temp, location} = this.state;

        return (
            <div>
                <div>
                    <h2>Get Weather</h2>
                </div>
                <div>
                    <WeatherForm onSearch={this.handleSearch} />
                </div>
                <div>
                    <WeatherMessage temp={temp} location={location} />
                </div>
            </div>
        )
    }
});

module.exports = Weather;