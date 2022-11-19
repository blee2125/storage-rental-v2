import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap"
import { connect, useSelector } from "react-redux";
import { updateStorageUnit } from "../../reducers/StorageUnitReducer"
import StorageUnitForm from "./StorageUnitForms/StorageUnitForm";
import { useParams, useNavigate } from "react-router-dom";

function StorageUnitEdit(props) {
    let navigate = useNavigate();
    const routeParams = useParams();
    const storageUnit = useSelector((state) => state.storageUnitState.storageUnitArray.filter(u => u._id === routeParams.id)[0])
    const [storageUnitObject, setStorageUnitObject] = useState({
        unitNumber: '',
        type: '',
        size: '',
        location: '',
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
            props.updateStorageUnit({id: storageUnit._id, data: storageUnitObject})
            .unwrap()
            .then((data) => {
                navigate(`/storage-units/view/${data._id}`)
            })
            .catch((e) => {console.log(e)});
        }
    }

    useEffect(() => {
        setStorageUnitObject(storageUnitObject => ({
            ...storageUnitObject,
            ...storageUnit
        }))
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            Edit Storage Unit
            <StorageUnitForm 
                storageUnitObject={storageUnitObject}
                updateData={updateData}
            />
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default connect(null, { updateStorageUnit }) (StorageUnitEdit)