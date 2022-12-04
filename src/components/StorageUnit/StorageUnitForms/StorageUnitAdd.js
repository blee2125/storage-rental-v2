import React, {useState} from "react";
import { Button, Card } from "react-bootstrap"
import { connect, useDispatch } from "react-redux";
import { createStorageUnit } from "../../../reducers/StorageUnitReducer"
import StorageUnitForm from "./StorageUnitForm";
import { notify } from "../../../reducers/NotificationReducer";

function StorageUnitAdd(props) {
    const dispatch = useDispatch();
    const [storageUnitObject, setStorageUnitObject] = useState({
        unitNumber: '',
        type: '',
        size: '',
        location: '',
        standardRate: '',
        available: true
    });

    const updateData = (target, value) => {
        let updatedValue = {};
            updatedValue = {[target]: value};
        setStorageUnitObject(storageUnitObject => ({
            ...storageUnitObject,
            ...updatedValue
        }));        
    };

    const handleSubmit = () => {
        if (storageUnitObject.unitNumber !== '') {
            props.createStorageUnit(storageUnitObject)
            .unwrap()
            .then((data) => {
                dispatch(notify({message: `${data.unitNumber} Created`,type: 'success'}))
            })
            .catch((e) => {console.log(e)});
        }
    }

    return (
        <div>
            <Card bg='light' border="secondary" style={{ padding: '25px', margin: "25px"}}>
                <h2>Create Storage Units</h2>
                <StorageUnitForm 
                    storageUnitObject={storageUnitObject}
                    updateData={updateData}
                />
            </Card>
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default connect(null, { createStorageUnit, notify }) (StorageUnitAdd)