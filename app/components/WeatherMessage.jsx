var React = require('react');

var WeatherMessage = React.createClass({

    render: function(){
        var {temp, location} = this.props;

        return(
            <p>Temperature is {temp} degree in {location}</p>
        )
    }
});

module.exports = WeatherMessage;