// import React, { useEffect, useState } from "react";
// import { PulseLoader } from "react-spinners";
// import { RiDeleteBin5Line } from "react-icons/ri";
// import moment from "moment";
// import { useNavigate } from "react-router-dom";
// import { MdClose } from "react-icons/md";
// import { allPackage } from "../features/package/packageSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { allAgency, createAgency, deleteAgency } from "../features/agency/agencySlice";

// const Agency = () => {
//     const [loading, setLoading] = useState(false);
//     const [showModal, setShowModal] = useState(false); // Modal state
//     const [showDetailsModal, setShowDetailsModal] = useState(false); // Modal state
//     const [regNo, setRegNo] = useState("");
//     const [agencyDetails, setAgencyDetails] = useState(null);
//     console.log();

//     const agencyState = useSelector((state) => state?.agency?.agency?.data || []);
//     console.log(agencyState);

//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const handleChange = (e) => {
//         setRegNo(e.target.value);
//     };

//     useEffect(() => {
//         dispatch(allAgency());
//     }, []);


//     const handleAddPackage = () => {
//         setShowModal(true);
//     };

//     const handleCloseModal = () => {
//         setShowModal(false);
//         setShowDetailsModal(false)
//     };

//     const handleSavePackage = async () => {
//         if (regNo.trim()) {
//             const result = await dispatch(createAgency({ regNo }));
//             // Check if the createAgency action was successful
//             if (createAgency.fulfilled.match(result)) {
//                 dispatch(allAgency()); // Dispatch allAgency only after successful creation
//             }
//         }
//         handleCloseModal();
//         setRegNo('');
//     };

//     const handleDelete = async (id) => {
//         const result = await dispatch(deleteAgency(id));
//         // Check if the deleteAgency action was successful
//         if (deleteAgency.fulfilled.match(result)) {
//             dispatch(allAgency()); // Dispatch allAgency only after successful deletion
//         }
//     };


//     const handleDetails = (params) => {
//         setShowDetailsModal(true)
//         console.log(params);
//         setAgencyDetails(params)

//     }



//     return (
//         <div>
//             {loading ? (
//                 <div className="spinner">
//                     <PulseLoader color="#31baff" />
//                 </div>
//             ) : (
//                 <div>
//                     <div className="container">
//                         <div className="margin">
//                             <div className="d-flex align-items-center justify-content-between ffff">
//                                 <h6>Agency:</h6>
//                                 <button className="addBtn" onClick={handleAddPackage}>
//                                     +Add
//                                 </button>
//                             </div>

//                             {/* Package List */}
//                             <div className="package-list">
//                                 {agencyState.map((item, index) => (
//                                     <div
//                                         key={index}
//                                         className="package-item d-flex align-items-center justify-content-between mb-2 p-2 border rounded"
//                                         onClick={() => handleDetails(item)}
//                                     >
//                                         <div className="d-flex align-items-center">
//                                             <img
//                                                 src={item?.agency?.profilePic} // Can be a static image or a GIF
//                                                 alt="Package"
//                                                 className="package-image me-3"
//                                                 style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: 'cover' }}
//                                             />
//                                             <div>
//                                                 <h6 className="mb-1" style={{ fontSize: '13px' }}>Agent ID: {item?.agency?.regNo}</h6>
//                                                 <p className="mb-0" style={{ fontSize: '13px' }}>Name: {item?.agency?.userName}</p>
//                                                 <p className="mb-0" style={{ fontSize: '11px' }}>Total Diamond: {item?.hosts?.reduce((total, item) => total + (item?.user?.daimond || 0), 0) || 0}</p>

//                                             </div>
//                                         </div>
//                                         <button
//                                             className="btn btn-danger"
//                                             onClick={() => handleDelete(item?._id)}
//                                         >
//                                             <RiDeleteBin5Line className="pb-1" size={20} />
//                                         </button>
//                                     </div>
//                                 ))}

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}


//             {showModal && (
//                 <div style={{
//                     position: 'fixed',
//                     top: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '100%',
//                     background: 'rgba(0, 0, 0, 0.5)',
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     zIndex: 1000,
//                     padding: '20px',
//                 }}
//                 >
//                     <div
//                         style={{
//                             background: 'white',
//                             padding: '20px',
//                             borderRadius: '8px',
//                             width: '400px',
//                             textAlign: 'center',
//                         }}

//                     >
//                         <h5>Add New Agency</h5>
//                         <div className="form-group">
//                             <input
//                                 type="text"
//                                 className="form-control mt-2"
//                                 name="regNo"
//                                 placeholder="Enter User ID"
//                                 value={regNo}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <div
//                             style={{
//                                 display: 'flex',
//                                 justifyContent: 'space-between',
//                                 width: '70%',
//                                 margin: 'auto',
//                             }}
//                         >
//                             <button className="btn  mt-4 btnCancel" onClick={handleCloseModal}>
//                                 Cancel
//                             </button>
//                             <button className="btn  mt-4 btnSave" onClick={handleSavePackage}>
//                                 Add
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )
//             }
//             {showDetailsModal && (
//                 <div style={{
//                     position: 'fixed',
//                     top: 0,
//                     left: 0,
//                     width: '100%',
//                     height: '100%',
//                     background: 'rgba(0, 0, 0, 0.5)',
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     zIndex: 1000,
//                     padding: '20px',
//                 }}
//                 >
//                     <div
//                         style={{
//                             background: 'white',
//                             borderRadius: '8px',
//                             width: '100%', // Adjust width as needed
//                             height: '85%', // Adjust height as needed
//                             overflow: 'hidden', // Ensure content stays within modal
//                             display: 'flex',
//                             flexDirection: 'column'
//                         }}
//                     >
//                         <div
//                             style={{
//                                 padding: '10px'
//                             }}
//                             className="d-flex justify-content-between align-items-center">
//                             <h6>Agency Details:</h6>
//                             <div onClick={handleCloseModal}>
//                                 <MdClose className="cross" />
//                             </div>
//                         </div>
//                         <div
//                             style={{
//                                 padding: '10px',
//                                 flex: '1', // Allow this div to grow and take available space
//                                 overflowY: 'auto' // Enable scrolling if content overflows

//                             }}
//                               className="no-scrollbar"
//                         >
//                             <p
//                                 style={{
//                                     marginBottom: '10px',
//                                 }}
//                             >Agency: {agencyDetails?.agency?.userName}</p>

//                             <div
//                                 style={{
//                                     maxHeight: '100%', // Use full height of the parent div
//                                     overflowY: 'auto', // Enable scrolling if content overflows
//                                 }}
//                                 className="no-scrollbar"
//                             >
//                                 {
//                                     agencyDetails?.hosts?.map((host, index) => {
//                                         // Log all duration values
//                                         const durations = host?.user?.history.map(item => item.duration || "0");
//                                         console.log(`Host ${index} durations:`, durations);

//                                         // Calculate total duration
//                                         const totalDuration = durations.reduce((acc, curr) => {
//                                             const duration = parseFloat(curr);
//                                             console.log(`Processing duration: ${curr}, parsed: ${duration}`);
//                                             if (isNaN(duration)) {
//                                                 console.warn(`Invalid duration value: ${curr}`);
//                                                 return acc;
//                                             }
//                                             return acc + duration;
//                                         }, 0);

//                                         // Format total duration as HH:MM:SS
//                                         const formattedDuration = new Date(totalDuration * 1000).toISOString().substr(11, 8);

//                                         return (
//                                             <div key={index} style={{ padding: '10px', border: '1px solid black', marginBottom: '5px' }}>
//                                                 <p>{host?.user?.userName}</p>
//                                                 <p>Diamond: {host?.user?.daimond}</p>
//                                                 <p>Live: {host?.liveType}</p>
//                                                 <p>Total live: {formattedDuration}</p>
//                                             </div>
//                                         );
//                                     })
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div >
//     );
// };

// export default Agency;










import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { RiDeleteBin5Line } from "react-icons/ri";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { allPackage } from "../features/package/packageSlice";
import { useDispatch, useSelector } from "react-redux";
import { allAgency, createAgency, deleteAgency, fetchAcceptedRequestByAgentId } from "../features/agency/agencySlice";

const Agency = () => {
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [regNo, setRegNo] = useState("");
    const [agencyDetails, setAgencyDetails] = useState(null);
    const [acceptedRequests, setAcceptedRequests] = useState([]);

    const agencyState = useSelector((state) => state?.agency?.agency || []);
    console.log(agencyState);


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setRegNo(e.target.value);
    };

    useEffect(() => {
        dispatch(allAgency());
    }, [dispatch]);

    const handleAddPackage = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setShowDetailsModal(false);
        setAcceptedRequests([]);
    };

    const handleSavePackage = async () => {
        if (regNo.trim()) {
            // const result = await dispatch(createAgency({ regNo }));
            const result = await dispatch(createAgency({ regNo: Number(regNo) }));
            if (createAgency.fulfilled.match(result)) {
                dispatch(allAgency());
            }
        }
        handleCloseModal();
        setRegNo('');
    };

    const handleDelete = async (regNumber) => {
        const result = await dispatch(deleteAgency({ regNo: Number(regNumber) })); // 🔁 Ensure it's a number
        if (deleteAgency.fulfilled.match(result)) {
            dispatch(allAgency());
        }
    };

    const handleDetails = async (params) => {
        setShowDetailsModal(true);
        setAgencyDetails(params);
        const result = await dispatch(fetchAcceptedRequestByAgentId(params?.id)); // Use regNumber as agentId
        if (fetchAcceptedRequestByAgentId.fulfilled.match(result)) {
            setAcceptedRequests(result.payload.data); // Store response data locally
        }
    };

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
                                <h6>Agency:</h6>
                                <button className="addBtn" onClick={handleAddPackage}>
                                    +Add
                                </button>
                            </div>

                            <div className="package-list">
                                {agencyState?.map((item, index) => (
                                    <div
                                        key={index}
                                        className="package-item d-flex align-items-center justify-content-between mb-2 p-2 border rounded"

                                    >
                                        <div className="d-flex align-items-center" onClick={() => handleDetails(item)}>
                                            <img
                                                src={item?.profilePic}
                                                alt="img"
                                                className="package-image me-3"
                                                style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: 'cover' }}
                                            />
                                            <div>
                                                <h6 className="mb-1" style={{ fontSize: '13px' }}>Agent ID: {item?.regNumber}</h6>
                                                <p className="mb-0" style={{ fontSize: '13px' }}>Name: {item?.fullname}</p>
                                                <p className="mb-0" style={{ fontSize: '11px' }}>
                                                    Total Diamond: {item?.hosts?.reduce((total, item) => total + (item?.user?.daimond || 0), 0) || 0}
                                                </p>
                                            </div>
                                        </div>
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
                        <h5>Add New Agency</h5>
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
                            <p style={{ marginBottom: '10px' }}>Agency: {agencyDetails?.fullname}</p>
                            <div style={{ maxHeight: '100%', overflowY: 'auto' }} className="no-scrollbar">
                                {
                                    acceptedRequests?.map((host, index) => {
                                        // const durations = host?.user?.history.map(item => item.duration || "0");
                                        // const totalDuration = durations.reduce((acc, curr) => {
                                        //     const duration = parseFloat(curr);
                                        //     if (isNaN(duration)) return acc;
                                        //     return acc + duration;
                                        // }, 0);
                                        // const formattedDuration = new Date(totalDuration * 1000).toISOString().substr(11, 8);

                                        return (
                                            <div key={index} style={{ padding: '10px', border: '1px solid black', marginBottom: '5px' }}>
                                                <p>{host?.user?.fullname}</p>
                                                <p>Diamond: {host?.user?.diamond}</p>
                                                <p>Live: {host?.type}</p>
                                                {/* <p>Total live: {formattedDuration}</p> */}
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

export default Agency;
