function formatData({ formData,extracost,summary,data }) {
    
    const { consignorDetails, shipmentDetails, shipment, consigneeDetails } = formData;
    console.log(shipment);


    const consigneer = {
        id: Math.random(),
        consigneerName: consignorDetails.consignorName,
        consigneerPhone: consignorDetails.consignorPhone,
        consigneerGST_Adhaar: consignorDetails.consignorGST_Adhaar,
        consignieeName: consigneeDetails.consigneeName,
        consignieePhone: consigneeDetails.consigneePhone,
        consignieeGST_Adhaar: consigneeDetails.consigneeGST_Adhaar
    };



    const shipmentData = {
        shipmentid: Math.random(),
        articleName: shipmentDetails.articleName,
        no_of_Articles: shipmentDetails.noOfArticles,
        freight: shipmentDetails.freight,
        hamaliL: shipmentDetails.lh,
        hamaliu: shipmentDetails.uh,
        Net_Weight: shipmentDetails.netWeight,
        Gross_Weight: shipmentDetails.grossWeight,
        LR: shipment.offlineLRNumber,
        paymentId: shipment.paymentType
    };

    const shipmentDetails2 = {
        toBranch : shipment.toBranch,
        fromBrach : "Kalki",
        shipmentDate : Date.now(),
        paymentType : shipment.paymentType,
        status :"Booked",
        LR : shipment.offlineLRNumber,
        Innovice:extracost.invoice,
        EwayBill:extracost.ewayBill,
        TotalCost : summary.totalCost
    }



    console.log("Formatted consigneer:", consigneer);
    console.log("Formatted shipmentData:",shipmentData);
    console.log("Formatted:",shipmentDetails2)
    console.log("Formatted Extra Cost:",extracost);

    // Return both consigneer and shipmentData together
    return {
        consigneer,
        data,
        shipmentDetails2,
        extracost, 
    };
}

export default formatData;
