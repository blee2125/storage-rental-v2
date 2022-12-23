import React from "react";
import { Col, Row } from 'react-bootstrap';
import UnitStats from "../DataStats/UnitStats";
import CustomerStats from "../DataStats/CustomerStats";
import LeasePieChart from "../DataStats/LeasePieChart";
import BalanceStats from "../DataStats/BalanceStats";
import PaymentStats from "../DataStats/PaymentStats";

function Home(props) {

    return (
        <div style={{margin: '25px'}}>
            <Row>
                <Col lg='auto'><LeasePieChart /></Col>
                <Col lg='auto'><UnitStats /></Col>
                <Col lg='auto'><BalanceStats /></Col>
                <Col lg='auto'><PaymentStats /></Col>
                <Col lg='auto'><CustomerStats /></Col>
            </Row>
        </div>
    )
}

export default (Home)