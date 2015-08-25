
// The alias `bs` is from ../application.js

const App = React.createClass({
    render() {
        return (
            <div id="App">
                <Navbar brand={ this.props.brand }></Navbar>
                <div className="container">
                    <Client></Client>
                </div>
            </div>
        );
    }
})
