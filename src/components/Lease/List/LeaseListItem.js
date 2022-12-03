import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DateFunc from '../../../functions/DateFunc'

function LeaseListItem(props) {
    const customer = useSelector((state) => state.customerState.customerArray.filter(c => c._id === props.lease.customerId)[0])
    const unit = useSelector((state) => state.storageUnitState.storageUnitArray.filter(u => u._id === props.lease.unitId)[0])
    let navigate = useNavigate();
    const [balance, setBalance] = useState()

    const viewLease = () => {
        let path = `view/${props.lease._id}`
        navigate(path)
    }

    const leaseLength = DateFunc.leaseLength(props.lease.startDate, props.lease.endDate)

    function calcBalance() {
        if (props.lease) {
            let bal = props.lease.totalCost
            if (props.lease.payments > 0) {
                bal = bal - props.lease.payments
            }
            setBalance(bal)
        }
    }

    useEffect(() => {
        calcBalance()
        // eslint-disable-next-line
    }, [props])

    return (
        <tr onClick={()=> viewLease()}>
            <td>{unit ? unit.unitNumber : ''}</td>
            <td>{customer ? customer.name : ''}</td>
            <td>{props.lease.rate}</td>
            <td>{balance ? Number(balance).toFixed(2) : '0'}</td>
            <td>{props.lease.startDate}</td>
            <td>{props.lease.endDate}</td>
            <td>{leaseLength}</td>
        </tr>
    );
}

export default (LeaseListItem);