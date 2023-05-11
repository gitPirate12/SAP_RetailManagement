
import React, { useState, useEffect } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { reactLocalStorage } from 'reactjs-localstorage';



function MarketingAdd() {

    const [CampaignID, setCampaignID] = useState("");
    const [ItemCode, setItemCode] = useState("");
    const [ItemName, setItemName] = useState("");
    const [MediaType, setMediaType] = useState("");
    const [TargetAudience, setTargetAudience] = useState("");
    const [StartDate, setStartDate] = useState("");
    const [EndDate, setEndDate] = useState("");
    const [Price, setPrice] = useState("");
    const [Discount, setDiscount] = useState("");
    const [Qantity, setQantity] = useState("");
    const [Note, setNote] = useState("");
    const [Status, setStatus] = useState("");

    function save(e) {

        e.preventDefault();
        const advertising = {
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
        }
        debugger;
        console.log(advertising);
        axios.post("http://localhost:5000/api/v1/addCampaign/", advertising).then(() => {

            Swal.fire({
                title: "Success!",
                text: "Booking Success!",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"
            })
        }).catch((err) => {

            Swal.fire({
                title: "Error!",
                text: "Booking Not Success",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"
            })
        })
    }

    return (
        <div class="dashboard-main-wrapper" >

            <div class="dashboard-wrapper">
                <div style={{ paddingTop: '3%', paddingLeft: '2%', width: '98%' }}>
                    <h4 className="text-uppercase  d-letter-spacing fw-bold" style={{ color: 'black' }}><i class="fas fa-home"></i>Admin Dashboard</h4>
                    <hr />
                    <div className="container-fluid bg-white" style={{ paddingLeft: '5%', paddingTop: '2%', paddingBottom: '2%', paddingRight: '5%' }} >
                        <center>
                            <h1 className="text-uppercase">Create Marketing  Campaign </h1>
                        </center>

                        <MDBRow>
                            <MDBCol sm='2'>
                                <MDBCard className='shadow-0'>

                                </MDBCard>
                            </MDBCol>
                            <MDBCol sm='1'></MDBCol>
                            <MDBCol sm='6'>
                                <MDBCard className='shadow-0'>
                                    <MDBCardBody>
                                        <div class="mb-3">
                                            <label class="form-label h3" style={{ fontWeight: "bolder" }}>Enter Campaign ID</label>
                                            <input type="text" class="form-control" style={{ fontSize: "17px" }} placeholder="Enter Campaign ID" onChange={(e) => {
                                                setCampaignID(e.target.value);
                                            }} />
                                        </div>

                                        <div class="mb-3">
                                            <label class="form-label h3" style={{ fontWeight: "bolder" }}>Enter Item Code</label>
                                            <input type="text" class="form-control" style={{ fontSize: "17px" }} placeholder="Enter Item Code" onChange={(e) => {
                                                setItemCode(e.target.value);
                                            }} />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label h3" style={{ fontWeight: "bolder" }}>Enter Item Name</label>
                                            <input type="text" class="form-control" style={{ fontSize: "17px" }} placeholder="Enter Item Name" onChange={(e) => {
                                                setItemName(e.target.value);
                                            }} />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label h3" style={{ fontWeight: "bolder" }}>Enter Media Type</label>
                                            <input type="text" class="form-control" style={{ fontSize: "17px" }} placeholder="Enter Media Type" onChange={(e) => {
                                                setMediaType(e.target.value);
                                            }} />
                                        </div>

                                        <div class="mb-3">
                                            <label class="form-label h3" style={{ fontWeight: "bolder" }}>Enter Target Audience</label>
                                            <input type="text" class="form-control" style={{ fontSize: "17px" }} placeholder="Enter Target Audience" onChange={(e) => {
                                                setTargetAudience(e.target.value);
                                            }} />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label h3" style={{ fontWeight: "bolder" }}>Enter Start Date</label>
                                            <input type="text" class="form-control" style={{ fontSize: "17px" }} placeholder="Enter Start Date" onChange={(e) => {
                                                setStartDate(e.target.value);
                                            }} />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label h3" style={{ fontWeight: "bolder" }}>Enter End Date</label>
                                            <input type="text" class="form-control" style={{ fontSize: "17px" }} placeholder="Enter End Date" onChange={(e) => {
                                                setEndDate(e.target.value);
                                            }} />
                                        </div>

                                        <div class="mb-3">
                                            <label class="form-label h3" style={{ fontWeight: "bolder" }}>Enter Price</label>
                                            <input type="text" class="form-control" style={{ fontSize: "17px" }} placeholder="Enter Price" onChange={(e) => {
                                                setPrice(e.target.value);
                                            }} />
                                        </div>

                                        <div class="mb-3">
                                            <label class="form-label h3" style={{ fontWeight: "bolder" }}>Enter Discount</label>
                                            <input type="text" class="form-control" style={{ fontSize: "17px" }} placeholder="Enter Discount" onChange={(e) => {
                                                setDiscount(e.target.value);
                                            }} />
                                        </div>

                                        <div class="mb-3">
                                            <label class="form-label h3" style={{ fontWeight: "bolder" }}>Enter Qantity</label>
                                            <input type="text" class="form-control" style={{ fontSize: "17px" }} placeholder="Enter Qantity" onChange={(e) => {
                                                setQantity(e.target.value);
                                            }} />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label h3" style={{ fontWeight: "bolder" }}>Enter Note</label>
                                            <input type="text" class="form-control" style={{ fontSize: "17px" }} placeholder="Enter Note" onChange={(e) => {
                                                setNote(e.target.value);
                                            }} />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label h3" style={{ fontWeight: "bolder" }}>Enter Status</label>
                                            <input type="text" class="form-control" style={{ fontSize: "17px" }} placeholder="Enter Status" onChange={(e) => {
                                                setStatus(e.target.value);
                                            }} />
                                        </div>

                                        <div className="text-end">
                                            <br />
                                            <button type="button" class="btn btn-dark" style={{ fontSize: "15px" }} onClick={save}>Save</button>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default MarketingAdd;