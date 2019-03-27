import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      name: localStorage.getItem("name"),
      email: localStorage.getItem("email")
    };
  }

  handleLogout = () => {
    console.log("logout clicked");
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar dark expand="md" style={{ backgroundColor: "#f88600" }}>
          <NavbarBrand href="/">
            {" "}
            <strong>To Do List</strong>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.state.name ? (
                <NavItem>
                  <NavLink href="/todolist/">My To Do List</NavLink>
                </NavItem>
              ) : (
                <NavItem>
                  <NavLink href="/Signin/">My To Do List</NavLink>
                </NavItem>
              )}

              {this.state.name ? (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    My Profile
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="/UserInfo/">My Profile</DropdownItem>
                    <DropdownItem>Archived ToDos</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.handleLogout} href="/">
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              ) : (
                <NavItem>
                  <NavLink href="/Signin/">Sign in</NavLink>
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
