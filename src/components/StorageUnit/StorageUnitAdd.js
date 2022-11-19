import React, {useState} from "react";
import { Button } from "react-bootstrap"
import { connect } from "react-redux";
import { createStorageUnit } from "../../reducers/StorageUnitReducer"
import StorageUnitForm from "./StorageUnitForms/StorageUnitForm";

function StorageUnitAdd(props) {
    const [storageUnitObject, setStorageUnitObject] = useState({
        unitNumber: ''
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
                console.log(data)
            })
            .catch((e) => {console.log(e)});
        }
    }

    return (
        <div>
            Create Storage Unit
            <StorageUnitForm 
                storageUnitObject={storageUnitObject}
                updateData={updateData}
            />
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default connect(null, { createStorageUnit }) (StorageUnitAdd)