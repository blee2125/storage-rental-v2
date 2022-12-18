import DateFunc from "../../../functions/DateFunc"
import FormatFunc from "../../../functions/FormatFunc"

const LeasePDF = (props) => (
    <div style={{margin: '25px', width: '400px'}}>
        <div style={{fontSize: 10, fontFamily: 'Arial'}}>
            <p style={{textAlign: 'center'}}><b>Storage Unit Lease</b></p>

            <table width={'100%'}>
                <tbody>
                    <tr>
                        <td width={'15%'}><b>Customer</b></td>
                        <td >{props.customer.name}</td>
                    </tr>
                    <tr>
                        <td ><b>Email</b></td>
                        <td >{props.customer.email}</td>
                    </tr>
                    <tr>
                        <td ><b>Phone</b></td>
                        <td >{FormatFunc.formatPhone(props.customer.phone)}</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <table width={'100%'}>
                <tbody>
                    <tr>
                        <td width={'20%'}><b>Unit</b></td>
                        <td width={'30%'}>{props.unit.unitNumber}</td>
                        <td width={'20%'}><b>Location</b></td>
                        <td width={'30%'}>{props.unit.location}</td>
                    </tr>
                    <tr>
                        <td width={'20%'}><b>Size</b></td>
                        <td width={'30%'}>{props.unit.size}</td>
                        <td width={'20%'}><b>Type</b></td>
                        <td width={'30%'}>{props.unit.type}</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <table width={'100%'}>
                <tbody>
                    <tr>
                        <td width={'20%'}><b>Start Date</b></td>
                        <td width={'30%'}>{DateFunc.monthDayYear(props.lease.startDate)}</td>
                        <td width={'20%'}><b>End Date</b></td>
                        <td width={'30%'}>{DateFunc.monthDayYear(props.lease.endDate)}</td>
                    </tr>
                    <tr>
                        <td width={'20%'}><b>Lease Length</b></td>
                        <td width={'30%'}>{DateFunc.leaseLength(props.lease.startDate, props.lease.endDate)}</td>
                        <td width={'20%'}><b>Rate</b></td>
                        <td width={'30%'}>{FormatFunc.formatDollar(props.lease.rate)}</td>
                    </tr>
                    <tr>
                        <td width={'20%'}><b>Total Cost</b></td>
                        <td width={'30%'}>{FormatFunc.formatDollar(props.lease.totalCost)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)

export default LeasePDF