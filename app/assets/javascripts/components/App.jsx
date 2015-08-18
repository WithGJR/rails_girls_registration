
// The alias `bs` is from ../application.js

const App = React.createClass({
    render() {
        return (
            <div id="App">
                <Navbar brand={ this.props.brand }></Navbar>
                <div className="container">
                    <Client></Client>
                    <bs.ButtonToolbar>
                        <bs.Button bsStyle='primary'>Primary</bs.Button>
                    </bs.ButtonToolbar>
                </div>
            </div>
        );
    }
})
