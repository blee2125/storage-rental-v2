import React from "react";
import { connect } from "react-redux";
import UnitStats from "../DataStats/UnitStats";
import CustomerStats from "../DataStats/CustomerStats";
import LeasePieChart from "../DataStats/LeasePieChart";
import { Col, Row } from 'react-bootstrap';
import BalanceStats from "../DataStats/BalanceStats";

function Home(props) {

    return (
        <div>
            <Row>
                <Col lg='auto'><UnitStats /></Col>
                <Col lg='auto'><LeasePieChart /> </Col>
                <Col lg='auto'><BalanceStats /> </Col>
            </Row>
            
            <CustomerStats />

        </div>
    )
}

export default connect(null, null) (Home)