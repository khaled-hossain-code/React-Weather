var React = require('react');
var {Link, IndexLink} = require('react-router'); 

var Navbar = React.createClass({
    render: function(){
        return (
            <div>
            <h1>Nav Bar</h1>
            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
            <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
            </div>
        )
    }
});

module.exports = Navbar;