import React from "react";
import { Col, Row } from 'react-bootstrap';
import UnitStats from "../DataStats/UnitStats";
import CustomerStats from "../DataStats/CustomerStats";
import LeasePieChart from "../DataStats/LeasePieChart";
import BalanceStats from "../DataStats/BalanceStats";

function Home(props) {

    return (
        <div>
            <Row>
                <Col lg='auto'><UnitStats /></Col>
                <Col lg='auto'><LeasePieChart /></Col>
                <Col lg='auto'><BalanceStats /></Col>
                <Col lg='auto'><CustomerStats /></Col>
            </Row>
        </div>
    )
}

export default (Home)