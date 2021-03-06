// Imported elements
import React, { Component } from "react";
import Navbar from "../components/Navbar";
import TradeTable from "../components/TradeTable";
import API from "../utils/API";

class TCMInventory extends Component {
  // Take from database and pass to state as troopInv
  state = {
    troopInv: "",
    openTrade: "",
    userid: ""
  };

  // As soon as the Page is loaded, call the open trades function
  componentDidMount() {
    this.openSwaps();
  }

  // Function to run all the open swaps onto the page
  openSwaps = () => {
    // Check if the user is logged in and if they are not looged in then send them to Login Page
    var TCM_userInfo = JSON.parse(sessionStorage.getItem("TCM_userInfo"));
    if (!TCM_userInfo) {
      document.location.href = "/";
    } else {
      // If the user has logged in then save the logged in User Id for future use
      this.setState({ userid: TCM_userInfo.id });
      let tradeData;
      let userData;
      let swaps = [];
      // Use API call to get all the open Trades from backend to display in the page
      API.getOpenSwaps()
        .then(res => {
          tradeData = res.data;
        })
        .then(() =>
          API.getTCMS()
            .then(res => {
              userData = res.data;
            })
            .then(() => {
              // go through each trade
              for (let i = 0; i < tradeData.length; i++) {
                for (let j = 0; j < userData.length; j++) {
                  if (
                    tradeData[i].tcmID_giver === userData[j].id &&
                    userData[j].id !== this.state.userid
                  ) {
                    swaps.push({
                      userID: this.state.userid,
                      id: tradeData[i].id,
                      name: userData[j].name,
                      troop: userData[j].troop,
                      city: userData[j].city,
                      tcmID_giver: tradeData[i].tcmID_giver,
                      cookie_type: tradeData[i].cookie_type,
                      cookie_amount: tradeData[i].cookie_amount
                    });
                    j = userData.length;
                  }
                }
              }
              this.setState({ openTrade: swaps });
            })
        );
    }

  };

    // Handles form submit
    claimFormSubmit = (event, i) => {
        event.preventDefault();
        API.claimCookies(this.state.openTrade[event.target.getAttribute('data-value')]);
        this.setState({
            id: "",
            name: "",
            troop: "",
            city: "",
            tcmID_giver: "",
            cookie_type: "",
            cookie_amount: ""
        })
        window.location.reload()
    }

    // Renders page
    render() {
    return (
      <>
        <Navbar title={"Troop Cookie Manager"} ahref={"/"} page={"tcm"} />
        {/* Once the Page is loaded show the Trade Table */}
        <div className="row">
          <div className="col col l10 push-l1 s12">
            <TradeTable
              tradeDetails={this.state.openTrade}
              currentUser={this.state.userid}
              claimFormSubmit={this.claimFormSubmit}
            />
          </div>
        </div>
      </>
    );
  }
}

export default TCMInventory;
