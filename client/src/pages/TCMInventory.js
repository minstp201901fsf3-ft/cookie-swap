import React, { Component } from "react";
import Navbar from "../components/Navbar"
import MainWrapper from "../components/MainWrapper"
import Sidebar from "../components/Sidebar"
import ExcessCookieBody from "../components/ExcessCookieBody"
import SideBtn from "../components/SideBtn"

class TCMInventory extends Component {
    // Take from database and pass to state as troopInv
    state = {
        troopInv:{}
    };
    
    render(){
        return (
            <>
                    {/* Navbar passes a prop which will be the navbar title */}
                    <Navbar title="Excess Cookie Inventory"/>
                    {/* Wrapper for the excess inventory, passes a prop which ids the wrapper 
                    tabs from the Navbar then swap which wrapper is seen based off this id*/}
                    <MainWrapper id="excessinventory">
                        {/* Sidebar which will take SideBtn as children */}
                        <Sidebar>
                            {/* pass SideBtn with name and link props to populate sidebar */}
                            <SideBtn 
                            name="button"
                            />
                        </Sidebar>
                        {/* Table for excess cookie data, will pull from database and 
                        pass props through state to populate table
                        Data will be passed through state and props to here, could use separate 
                        component for table and thead then use props.children to fill with map
                        of the rows */}
                        <ExcessCookieBody/>
                    </MainWrapper>
                    {/* Wrapper for invetory of logged in troop, passes a prop which ids the wrapper 
                    tabs from the Navbar then swap which wrapper is seen based off this id */}
                    <MainWrapper id="yourinventory">
                        {/* Sidebar which will take SideBtn as children */}
                        <Sidebar>
                            {/* pass SideBtn with name and link props to populate sidebar */}
                            <SideBtn 
                            name="button"
                            />
                        </Sidebar>
                    </MainWrapper>
            </>

        )
    }

}

export default TCMInventory