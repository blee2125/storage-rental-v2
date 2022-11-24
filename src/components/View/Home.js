import React from "react";
import { connect } from "react-redux";
import UnitStats from "../DataStats/UnitStats";
import CustomerStats from "../DataStats/CustomerStats";

function Home(props) {

    return (
        <div>
            home
            <UnitStats />
            <CustomerStats />
        </div>
    )
}

export default connect(null, null) (Home)