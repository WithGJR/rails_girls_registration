
// The alias `bs` is from ../application.js

const Navbar = React.createClass({
  render() {
    return (
      <bs.Navbar brand={ this.props.brand }>
        <bs.Nav right eventKey={0}> {/* This is the eventKey referenced */}
          <bs.NavItem eventKey={1} href='#'>Link</bs.NavItem>
          <bs.NavItem eventKey={2} href='#'>Link</bs.NavItem>
          <bs.DropdownButton eventKey={3} title='Dropdown'>
            <bs.MenuItem eventKey='1'>Action</bs.MenuItem>
            <bs.MenuItem eventKey='2'>Another action</bs.MenuItem>
            <bs.MenuItem eventKey='3'>Something else here</bs.MenuItem>
            <bs.MenuItem divider />
            <bs.MenuItem eventKey='4'>Separated link</bs.MenuItem>
          </bs.DropdownButton>
        </bs.Nav>
      </bs.Navbar>
    )
  }
})
