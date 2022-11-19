import React, {useState} from "react";
import { Button } from "react-bootstrap"
import { connect } from "react-redux";
import { updateStorageUnit } from "../../reducers/StorageUnitReducer"
import StorageUnitForm from "./StorageUnitForms/StorageUnitForm";

function StorageUnitEdit(props) {
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
            props.updateStorageUnit(storageUnitObject)
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

export default connect(null, { updateStorageUnit }) (StorageUnitEdit)