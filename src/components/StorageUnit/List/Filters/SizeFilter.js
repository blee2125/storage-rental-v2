import React, {useState, useEffect} from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";

function SizeFilter(props) {
    const units = useSelector((state) => state.storageUnitState.storageUnitArray)
    const [sizeArray, setSizeArray] = useState([]);

    const uniqueSize = () => {
        const sizeFilter = []
        units.forEach((unit) => {
          sizeFilter.push(unit.size)
        })
        function onlyUnique(value, index, self) {
          return self.indexOf(value) === index;
        }
        const filteredSize = sizeFilter.filter(onlyUnique)
        setSizeArray(filteredSize)
    }

    const mapSize = sizeArray.map((s, index) => {
        return <option value={s} key={index}>{s}</option>
    })

    useEffect(() => {
        uniqueSize()
        // eslint-disable-next-line
    }, [props])

    return (
        <div>
            <Form >
                <Form.Group className="mb-3" controlId="formGroupSize">
                    <Form.Label>Size</Form.Label>
                    <Form.Select
                    value={props.sizeFilter}
                    onChange={e => props.setSizeFilter(e.target.value)}
                    >
                    <option value=''>All</option>
                    {mapSize}
                    </Form.Select>
                </Form.Group>
            </Form>
        </div>
    )
}

export default (SizeFilter)