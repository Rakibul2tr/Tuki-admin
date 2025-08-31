import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allAnimation, createAnimation } from "../features/animation/animationSlice";
import { deleteAllSentDaiHistories, getAllSendHistories } from "../features/users/userSlice";
import moment from "moment";

const SendHistory = () => {
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false); // Modal state
    const [regNo, setRegNo] = useState("");
    const [gif, setGif] = useState("");  // New state for GIF
    const [audio, setAudio] = useState(""); // New state for audio
    const [amount, setAmount] = useState(""); // New state for amount
    const [validity, setValidity] = useState(""); // New state for validity
    const historyState = useSelector((state) => state?.auth?.sendHistory?.data || []);
    console.log(historyState);
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const filteredUsers = historyState.filter((user) =>
        user?.sendId?.regNo?.toString().includes(searchTerm.trim())
    );


    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };



    useEffect(() => {
        dispatch(getAllSendHistories());
    }, []);

    const handleAddPackage = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSavePackage = () => {
        dispatch(deleteAllSentDaiHistories());
        dispatch(getAllSendHistories());
        handleCloseModal()
    };


    return (
        <div>
            {loading ? (
                <div className="spinner">
                    <PulseLoader color="#31baff" />
                </div>
            ) : (
                <div>
                    <div className="container">
                        <div className="margin">

                            <div className="ffff2">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h6>Send History:</h6>
                                    <button className="addBtn" onClick={handleAddPackage}>
                                        <RiDeleteBin5Line style={{ color: 'red' }} className="pb-1" size={20} />
                                    </button>
                                </div>


                                <div style={{ marginBottom: '5px' }}>
                                    <input
                                        type="text"
                                        placeholder="Search by ID"
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                        style={{
                                            padding: '5px',
                                            width: '100%',
                                            borderRadius: '5px',
                                            border: '1px solid #ddd',
                                            marginTop: '10px'
                                        }}
                                    />
                                </div>



                            </div>




                            {/* Package List */}
                            <div className="package-list2 ">
                                {filteredUsers?.map((item, index) => (
                                    <div
                                        key={index}
                                        className="package-item d-flex align-items-center justify-content-between mb-2 p-2 border rounded"
                                    >
                                        <div>
                                            <div>
                                                <h6 className="mb-1" style={{ fontSize: '13px' }}>Sender: {item?.sendId?.regNo}</h6>
                                                <h6 className="mb-1" style={{ fontSize: '13px' }}>Receiver: {item?.receiveId?.regNo}</h6>
                                            </div>
                                            <div>
                                                <h6 className="mb-1" style={{ fontSize: '13px' }}>Amount: {item?.amount}</h6>
                                                <p className="mb-0" style={{ fontSize: '11px' }}>Date: {moment(item?.date).format('DD MMM YYYY hh:mm A')}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal */}
            {showModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000,
                    padding: '20px',
                }}>
                    <div
                        style={{
                            background: 'white',
                            padding: '20px',
                            borderRadius: '8px',
                            width: '400px',
                            textAlign: 'center',
                        }}
                    >
                        <h6 style={{color: 'red'}}>Are you sure delete all?</h6>


                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '70%',
                                margin: 'auto',
                            }}
                        >
                            <button className="btn btn-secondary mt-4" onClick={handleCloseModal}>
                                Cancel
                            </button>
                            <button className="btn btn-primary mt-4" onClick={handleSavePackage}>
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SendHistory;
