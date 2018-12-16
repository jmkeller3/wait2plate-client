import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import "./Navbar.css";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    }

    this.burgerToggle = this.burgerToggle.bind(this)
  }

  burgerToggle() {
    let linksEl = document.querySelector('.narrowLinks');
    if (linksEl.style.display === 'block') {
      linksEl.style.display = 'none';
    } else {
      linksEl.style.display = 'block';
    }
    if (this.state.showMenu === false) {
      this.setState({
        showMenu: true
      })
    } else {
      this.setState({
        showMenu: false
      })
    }
  }

  render() {

    return (
      <nav>
        <div className="navNarrow">
          <div className="Menu">
            {
              this.state.showMenu !== true
                ? <FontAwesomeIcon size={"2x"} icon="bars" onClick={this.burgerToggle} ></FontAwesomeIcon>
                : <FontAwesomeIcon size={"2x"} icon="times" onClick={this.burgerToggle}></FontAwesomeIcon>
            }
            <div className="narrowLinks">
              <Link to={`/`}>Home</Link>
              <Link to={`/restaurants`}>Restaurants</Link>
              <Link to={`/timer`}>Timer</Link>
              <Link to={`/account`}>Account</Link>
            </div>
          </div>
        </div>
        <div className="navWide">
          <div className="wideLinks">
            <Link to={`/`}>Home</Link>
            <Link to={`/restaurants`}>Restaurants</Link>
            <Link to={`/timer`}>Timer</Link>
            <Link to={`/account`}>Account</Link>
          </div>
        </div>
      </nav>
    );
  }
}

