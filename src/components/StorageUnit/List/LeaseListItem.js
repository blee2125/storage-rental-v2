import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LeaseListItem(props) {
    let navigate = useNavigate();
    const customer = useSelector((state) => state.customerState.customerArray.filter(c => c._id === props.lease.customerId)[0])

    const cronLease = () => {
        const startSplit = props.lease.startDate.split('-')
        const startYear = Number(startSplit[0])
        const startMonth = Number(startSplit[1])
        const startDay = Number(startSplit[2])
        const endSplit = props.lease.endDate.split('-')
        const endYear = Number(endSplit[0])
        const endMonth = Number(endSplit[1])
        const endDay = Number(endSplit[2])
        const today = new Date()
        const todayYear = today.getFullYear()
        const todayMonth = today.getMonth() + 1
        const todayDay = today.getDate()
        if (endYear < todayYear) {
            return 'past' //past year
        }  else if (startYear > todayYear) {
            return 'future' //fut year
        } else {
            if (endMonth < todayMonth) {
                return 'past' //cur year, past month
            } else if (endMonth === todayMonth) {
                if (endDay < todayDay) {
                    return 'past' //cur year, cur month, past day
                }
            }
            if (startMonth > todayMonth) {
                return 'future' //fut month
            } else if (startMonth === todayMonth) {
                if (startDay > todayDay) {
                    return 'future' //cur month, fut day
                }
            }
            return 'current'
        }
    }

    const viewLease = () => {
        let path = `../../leases/view/${props.lease._id}`
        navigate(path)
    }

    const viewCustomer = () => {
        let path = `../../customers/view/${props.lease.customerId}`
        navigate(path)
    }

    return (
        <tr >
            <td onClick={viewLease}>{props.lease.startDate} - {props.lease.endDate}</td>
            <td>{cronLease()}</td>
            <td onClick={viewCustomer}>{customer.name}</td>
        </tr>
    );
}

export default LeaseListItem;