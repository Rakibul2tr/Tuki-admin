

import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { RiDeleteBin5Line } from "react-icons/ri";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { allPackage } from "../features/package/packageSlice";
import { useDispatch, useSelector } from "react-redux";
import { listResellers, makeReseller, removeReseller } from "../features/reseller/resellerSlice";
import { getModerators, makeModerator, removeModerator } from "../features/moderator/moderatorSlice";

const Moderator = () => {
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [regNo, setRegNo] = useState("");
    const [agencyDetails, setAgencyDetails] = useState(null);

    const moderatorState = useSelector((state) => state.moderator?.moderators || []);
    console.log(moderatorState);


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setRegNo(e.target.value);
    };

    useEffect(() => {
        dispatch(getModerators());
    }, [dispatch]);

    const handleAddPackage = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setShowDetailsModal(false);
    };

    const handleSavePackage = async () => {
        if (regNo.trim()) {
            // const result = await dispatch(createAgency({ regNo }));
            const result = await dispatch(makeModerator(Number(regNo)));
            if (makeModerator.fulfilled.match(result)) {
                dispatch(getModerators());
            }
        }
        handleCloseModal();
        setRegNo('');
    };

    const handleDelete = async (regNo) => {
        const result = await dispatch(removeModerator(regNo)); // 🔁 Ensure it's a number
        if (removeModerator.fulfilled.match(result)) {
            dispatch(getModerators());
        }
    };


    // const handleDelete = async (regNo) => {
    //     await dispatch(removeReseller(regNo));
        
    // };

    // const handleDetails = (params) => {
    //     setShowDetailsModal(true);
    //     setAgencyDetails(params);
    // };

    const isNumber = /^\d+$/.test(regNo.trim());

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
                            <div className="d-flex align-items-center justify-content-between ffff">
                                <h6>Moderator:</h6>
                                <button className="addBtn" onClick={handleAddPackage}>
                                    +Add
                                </button>
                            </div>

                            <div className="package-list">
                                {moderatorState?.map((item, index) => (
                                    <div
                                        key={index}
                                        className="package-item d-flex align-items-center justify-content-between mb-2 p-2 border rounded"

                                    >
                                        <div className="d-flex align-items-center"  >
                                            <img
                                                src={item?.profilePic}
                                                alt="img"
                                                className="package-image me-3"
                                                style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: 'cover' }}
                                            />
                                            <div>
                                                <h6 className="mb-1" style={{ fontSize: '13px' }}>Moderator ID: {item?.regNumber}</h6>
                                                <p className="mb-0" style={{ fontSize: '13px' }}>Name: {item?.fullname}</p>
                                            </div>
                                        </div>
                                        {/* <button className="btn btn-danger" >
                                            <RiDeleteBin5Line className="pb-1" size={15} />
                                        </button> */}
                                        <button className="btn btn-danger px-2 pb-2" style={{ lineHeight: 1 }} onClick={() => handleDelete(item?.regNumber)}>
                                            <RiDeleteBin5Line size={16} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

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
                    <div style={{
                        background: 'white',
                        padding: '20px',
                        borderRadius: '8px',
                        width: '400px',
                        textAlign: 'center',
                    }}>
                        <h5>Add New Moderator</h5>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mt-2"
                                name="regNo"
                                placeholder="Enter User ID"
                                value={regNo}
                                onChange={handleChange}
                            />
                        </div>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '70%',
                            margin: 'auto',
                        }}>
                            <button style={{

                                color: '#ffffff',
                                cursor: isNumber ? 'pointer' : 'not-allowed',
                            }} className="btn mt-4 btnCancel" onClick={handleCloseModal}>
                                Cancel
                            </button>
                            <button
                                className="btn mt-4 btnSave"
                                onClick={handleSavePackage}
                                disabled={!isNumber}
                                style={{
                                    backgroundColor: isNumber ? '#2BE5D8' : '#cccccc',
                                    color: isNumber ? '#ffffff' : '#666666',
                                    cursor: isNumber ? 'pointer' : 'not-allowed',
                                }}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showDetailsModal && (
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
                    <div style={{
                        background: 'white',
                        borderRadius: '8px',
                        width: '100%',
                        height: '85%',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <div style={{ padding: '10px' }} className="d-flex justify-content-between align-items-center">
                            <h6>Agency Details:</h6>
                            <div onClick={handleCloseModal}>
                                <MdClose className="cross" />
                            </div>
                        </div>
                        <div style={{ padding: '10px', flex: '1', overflowY: 'auto' }} className="no-scrollbar">
                            <p style={{ marginBottom: '10px' }}>Agency: {agencyDetails?.agency?.userName}</p>
                            <div style={{ maxHeight: '100%', overflowY: 'auto' }} className="no-scrollbar">
                                {
                                    agencyDetails?.hosts?.map((host, index) => {
                                        const durations = host?.user?.history.map(item => item.duration || "0");
                                        const totalDuration = durations.reduce((acc, curr) => {
                                            const duration = parseFloat(curr);
                                            if (isNaN(duration)) return acc;
                                            return acc + duration;
                                        }, 0);
                                        const formattedDuration = new Date(totalDuration * 1000).toISOString().substr(11, 8);

                                        return (
                                            <div key={index} style={{ padding: '10px', border: '1px solid black', marginBottom: '5px' }}>
                                                <p>{host?.user?.userName}</p>
                                                <p>Diamond: {host?.user?.daimond}</p>
                                                <p>Live: {host?.liveType}</p>
                                                <p>Total live: {formattedDuration}</p>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Moderator;
