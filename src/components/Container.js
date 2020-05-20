import React, { Component } from "react";
import Header from "./Header";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import Footer from "./Footer";
import door from "../assets/images/door.jpg"
import gallery from "../assets/images/gallery.jpg"
import mailbox from "../assets/images/mailbox.jpg"

class Container extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderCurrentPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio />;
    } else {
      return <Contact />;
    } 
  }

  renderCurrentImage = () => {
    if (this.state.currentPage === "Home") {
      return <img src={door} alt={this.state.currentPage} className="splitscreen" />;
    } else if (this.state.currentPage === "Portfolio") {
      return <img src={gallery} alt={this.state.currentPage} className="splitscreen" />;
    } else {
      return <img src={mailbox} alt={this.state.currentPage} className="splitscreen" />;
    } 
  }

  render() {
    return (
      <div className="wrapper">
        <div className="row wrapper">
          <div className="col-12 col-lg-6 wrapper">
            <Header
              currentPage={this.state.currentPage}
              handlePageChange={this.handlePageChange}
            />
            <div className="container">
              {this.renderCurrentPage()}
            </div>
          </div>
          <div className="col-12 col-lg-6 wrapper">
            {this.renderCurrentImage()}
          </div>
        </div>
        <div className="row wrapper">
          <div className="col-12 wrapper">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
