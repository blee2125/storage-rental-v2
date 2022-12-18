import React from "react";
import jsPDF from "jspdf";
import { renderToString } from "react-dom/server";
import LeasePDF from "./LeasePDF";

const DownloadLeasePDF = (props) => {
    const string = renderToString(<LeasePDF 
        lease={props.lease}
        customer={props.customer}
        unit={props.unit}
    />);

    const pdf = new jsPDF({
        orientation: 'p',
        unit: 'px',
        format: 'a4',
        putOnlyUsedFonts:true
    });

    pdf.html(string, {
        callback: function (pdf) {
            pdf.save(`${props.customer.name}-Unit${props.unit.unitNumber}`);
        }
    });
};

export default DownloadLeasePDF