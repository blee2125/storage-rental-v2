import React, {useState, useEffect} from "react";
import { Button, Card } from "react-bootstrap"
import { connect, useSelector } from "react-redux";
import { updateStorageUnit } from "../../../reducers/StorageUnitReducer"
import StorageUnitForm from "./StorageUnitForm";
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
            <Card bg='light' border="secondary" style={{ padding: '25px', margin: "25px"}}>
                <h2>Edit Storage Unit</h2>
                <StorageUnitForm 
                    storageUnitObject={storageUnitObject}
                    updateData={updateData}
                />
            </Card>
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default connect(null, { updateStorageUnit }) (StorageUnitEdit)