
import React, { useState, useEffect } from 'react';
// import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { MDBCard, MDBCardHeader, MDBCardBody, MDBIcon, MDBCardTitle, MDBInput, MDBCardText, MDBBtn, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { reactLocalStorage } from 'reactjs-localstorage';
import jsPDF from 'jspdf';
import "jspdf-autotable";


function MarketingDashboard() {
    const [Advertisements, setallAdvertisements] = useState([])
    const [DuplicateAdvertisements, setDuplicateallAdvertisements] = useState([])
    // const [searchName, setsearchName] = useState("")
    // const [AllPublished, setAllPublished] = useState([]);
    // const [setAllReject, setAllRejects] = useState([]);


    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        debugger;
        axios.get("http://localhost:5000/api/v1/getCampaign")
            .then(res => {
                setallAdvertisements(res.data);
                setDuplicateallAdvertisements(res.data);
            }
            )
            .catch(error => console.log(error));


    }, [])


    function handleSearch(searchItem) {
        const results = DuplicateAdvertisements?.filter((advertisement) => {
            return advertisement?.ItemName.toLowerCase().includes(searchItem.toLowerCase())

        })
        console.log(results);
        setallAdvertisements(results);
    }
    //generate pdf function
    const generatePDF = (advertisements) => {

        const doc = new jsPDF();
        const tableColumn = [
            "Campaign ID", "Item Code", "Item Name", "Media Type", "Target Audience", "Start Date", "End Date", "Price", "Discount", "Qantity", "Note", "Status"
        ];
        const tableRows = [];

        Advertisements.map((advertisements) => {
            const accountdata = [
                advertisements.CampaignID,
                advertisements.ItemCode,
                advertisements.ItemName,
                advertisements.MediaType,
                advertisements.TargetAudience,
                advertisements.StartDate,
                advertisements.EndDate,
                advertisements.Price,
                advertisements.Discount,
                advertisements.Qantity,
                advertisements.Note,
                advertisements.Status,


            ];
            tableRows.push(accountdata);
        });
        doc.text("SAP Super Marketing", 70, 8).setFontSize(13);
        doc.text("Marketing Report", 14, 16).setFontSize(13); //report details
        doc.autoTable(tableColumn, tableRows, {
            styles: { fontSize: 6 },
            startY: 35,
        });
        doc.save("Marketing details.pdf");
    };


    function remove(_id) {
        axios.delete("http://localhost:5000/api/v1/deleteCampaign/" + _id).then(() => {
            Swal.fire({
                title: "Success!",
                text: "Advertisement Delete",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"
            })

        }).catch((err) => {
            Swal.fire({
                title: "Error!",
                text: "Advertisement Not Delete",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"
            })
        })
    }

    function edit(
        CampaignID,
        ItemCode,
        ItemName,
        MediaType,
        TargetAudience,
        StartDate,
        EndDate,
        Price,
        Discount,
        Qantity,
        Note,
        Status
    ) {

        console.log(CampaignID, ItemCode, ItemName, MediaType, TargetAudience, StartDate, EndDate, Price, Discount, Qantity, Note, Status);

        reactLocalStorage.setObject("MarketingEdit", [CampaignID, ItemCode, ItemName, MediaType, TargetAudience, StartDate, EndDate, Price, Discount, Qantity, Note, Status]);
        window.location.href = "/editMarketing";
    }

 

    const clear = () => {
        const CampaignID = ""
        const ItemCode = ""
        const ItemName = ""
        const MediaType = ""
        const TargetAudience = ""
        const StartDate = ""
        const EndDate = ""
        const Price = ""
        const Discount = ""
        const Qantity = ""
        const Note = ""
        const Status = ""
        const editBtn = ""
        reactLocalStorage.setObject("MarketingEdit", [reactLocalStorage.setObject("MarketingEdit", [CampaignID, ItemCode, ItemName, MediaType, TargetAudience, StartDate, EndDate, Price, Discount, Qantity, Note, Status, editBtn])])
    }

    useEffect(() => {
        clear();
    }, [])
console.log(Advertisements);
    return (
        <div class="dashboard-main-wrapper" >

            <div class="dashboard-wrapper">
                <div style={{ paddingTop: '3%', paddingLeft: '2%', width: '98%' }}>
                    <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{ color: 'black' }}><i class="fas fa-home"></i>Marketing Dashboard</h4>
                    <hr />
                    <div className="container-fluid bg-white" style={{ paddingLeft: '5%', paddingTop: '2%', paddingBottom: '2%', paddingRight: '5%' }} >
                        <center>
                            <h1 className="text-uppercase text-black">SAP Retail Marketing</h1>
                        </center>
                        <hr />

                        <MDBRow style={{ marginTop: '1%' }}>
                            <MDBCol sm='4'>
                                <a href="PaymentDashboard">
                                    <MDBCard className=" bg-success square border-bottom border-5 border-dark bgdigram " style={{ boxShadow: '2px 3px 5px #BBBBBB' }}>
                                        <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'white' }}>
                                            <MDBIcon className="text-muted" /> 01<br />Active
                                        </MDBCardHeader>
                                    </MDBCard>
                                </a>
                            </MDBCol>
                            <MDBCol sm='4'>
                                <a href="EmployeeDashboard">
                                    <MDBCard className=" bg-primary square border-bottom border-5 border-dark bgdigram " style={{ boxShadow: '2px 3px 5px #BBBBBB' }}>
                                        <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'white' }}>
                                            <MDBIcon className="text-muted" /> 00<br />Processing
                                        </MDBCardHeader>
                                    </MDBCard>
                                </a>
                            </MDBCol>
                            <MDBCol sm='4'>
                                <a href="addMarketing">
                                    <MDBCard className=" bg-warning square border-bottom border-5 border-dark bgdigram " style={{ boxShadow: '2px 3px 5px #BBBBBB' }}>
                                        <MDBCardHeader className=" fw-bold mt-2 h1 pl-2 pt-5 pb-4 text-center text-uppercase" style={{ color: 'white' }}>
                                            <MDBIcon className="text-muted" />  00<br />Completed
                                        </MDBCardHeader>
                                    </MDBCard>
                                </a>
                            </MDBCol>

                        </MDBRow>
                        <div className="text-end mt-5">
                            <a href="addMarketing">
                                <MDBBtn className='btn-med' style={{ fontSize: '13px', fontWeight: 'light' }} outline color='dark'>
                                    New Campaign
                                </MDBBtn>{' '}&nbsp;&nbsp;
                            </a>
                            <a href="CustomerAdDashboard">
                                <MDBBtn className='btn-med' style={{ fontSize: '13px', fontWeight: 'light' }} outline color='primary'>
                                    Products
                                </MDBBtn>{' '}&nbsp;&nbsp;
                            </a>
                            <MDBBtn className='btn-med' style={{ fontSize: '13px', fontWeight: 'light' }} outline color='danger' onClick={generatePDF}>
                                Download
                            </MDBBtn>{' '}&nbsp;&nbsp;
                        </div>
                        <div className=" pt-1 mt-5">
                            <h6>Search Using Name</h6>
                            <MDBInput className="mt-3 bg-white" id='form1' type='text' onChange={(e) => {
                                handleSearch(e.target.value);
                            }} />

                        </div>

                        <br />

                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col-lg-9 mt-2 mb-2">

                </div>
                <div className=" col-lg-3 mt-2 mb-2">

                </div>
            </div>
            <br /> <br />


            <div className="p-3 mb-2 bg-primary text-dark rounded-3">

                <table className="table table-hover  table table-bordered border-info table table-info table-striped" style={{ marginTop: '5px' }}>
                    <thead>

                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Campaign ID</th>
                            <th scope="col">Item Code</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Media Type</th>
                            <th scope="col">Target Audience</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Price</th>
                            <th scope="col">Discount</th>
                            <th scope="col">Qantity</th>
                            <th scope="col">Note</th>
                            <th scope="col">Status</th>


                            <th scope="col">&nbsp;&nbsp;&nbsp;&nbsp;Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Advertisements.map((Advertisement, key) => (


                                <tr>
                                    <th scope="row"></th>
                                    <td>{Advertisement.CampaignID}</td>
                                    <td>{Advertisement.ItemCode}</td>
                                    <td>{Advertisement.ItemName}</td>
                                    <td>{Advertisement.MediaType}</td>
                                    <td>{Advertisement.TargetAudience}</td>
                                    <td>{Advertisement.StartDate}</td>
                                    <td>{Advertisement.EndDate}</td>
                                    <td>{Advertisement.Price}</td>
                                    <td>{Advertisement.Discount}</td>
                                    <td>{Advertisement.Qantity}</td>
                                    <td>{Advertisement.Note}</td>
                                    <td>{Advertisement.Status}</td>


                                    <td>
                                        <a className="btn btn-secondary" onClick={() => edit(
                                            Advertisement.CampaignID,
                                            Advertisement.ItemCode,
                                            Advertisement.ItemName,
                                            Advertisement.MediaType,
                                            Advertisement.TargetAudience,
                                            Advertisement.StartDate,
                                            Advertisement.EndDate,
                                            Advertisement.Price,
                                            Advertisement.Discount,
                                            Advertisement.Qantity,
                                            Advertisement.Note,
                                            Advertisement.Status

                                        )} >
                                            <i className="fas fa-edit"></i>&nbsp;Edit
                                        </a>

                                        &nbsp;
                                        <a className="btn btn-danger" href="#" onClick={() => remove(Advertisement._id)}>
                                            <i className="far fa-trash-alt"></i>&nbsp;Delete
                                        </a>
                                    </td>
                                </tr>


                            ))}
                    </tbody>

                </table>








            </div>

        </div >
    )
};


export default MarketingDashboard;