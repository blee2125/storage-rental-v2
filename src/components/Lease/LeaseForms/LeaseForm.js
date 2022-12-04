import React, {useEffect} from "react";
import { Form } from "react-bootstrap";
import CalcFunc from "../../../functions/CalcFunc";
import LeaseCustomerForm from "./LeaseCustomerForm";
import LeaseStorageUnitForm from "./LeaseStorageUnitForm";
import LeaseDateForm from "./LeaseDateForm";
import LeaseRateForm from "./LeaseRateForm";

export const LeaseForm = (props) => {
  const calcTotal = () => {
    let t = CalcFunc.calcTotal(props.leaseObject.startDate, props.leaseObject.endDate, props.leaseObject.rate)
    props.updateData('totalCost', t)
  }

  useEffect(() => {
    calcTotal()
    // eslint-disable-next-line
  }, [props.leaseObject.rate, props.leaseObject.startDate, props.leaseObject.endDate])

  return (
    <div>
    <Form >
      <LeaseCustomerForm
        customers={props.customers}
        customerId={props.leaseObject.customerId}
        updateData={props.updateData}
      />
      <LeaseDateForm
        editForm={props.editForm}
        updateData={props.updateData}
        leaseObject={props.leaseObject}
      />
      {(props.leaseObject.startDate === '' || props.leaseObject.endDate === '') ? '' :
      <LeaseStorageUnitForm
        units={props.units}
        unitId={props.leaseObject.unitId}
        updateData={props.updateData}
        leaseObject={props.leaseObject}
      />}
      {props.leaseObject.unitId !== '' ?
      <LeaseRateForm
        editForm={props.editForm}
        updateData={props.updateData}
        leaseObject={props.leaseObject}
        units={props.units}
        unitId={props.leaseObject.unitId}
      /> : '' }
    </Form>
    Total Cost ${props.leaseObject.totalCost > 0 ? Number(props.leaseObject.totalCost).toFixed(2) : 0}
    </div>
  );
}

export default LeaseForm;