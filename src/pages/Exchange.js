

// import React, { useEffect, useState } from "react";
// import { PulseLoader } from "react-spinners";
// import { RiDeleteBin5Line } from "react-icons/ri";
// import moment from "moment";
// import { useNavigate } from "react-router-dom";
// import { MdClose } from "react-icons/md";
// import { allPackage } from "../features/package/packageSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { listResellers, makeReseller, removeReseller } from "../features/reseller/resellerSlice";

// const Exchange = () => {
//     const [loading, setLoading] = useState(false);
//     const [showModal, setShowModal] = useState(false);
//     const [showDetailsModal, setShowDetailsModal] = useState(false);
//     const [regNo, setRegNo] = useState("");
//     const [agencyDetails, setAgencyDetails] = useState(null);

//     const resellerState = useSelector((state) => state?.reseller?.reseller || []);
//     console.log(resellerState);


//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const handleChange = (e) => {
//         setRegNo(e.target.value);
//     };

//     useEffect(() => {
//         dispatch(listResellers());
//     }, [dispatch]);

//     const handleAddPackage = () => {
//         setShowModal(true);
//     };

//     const handleCloseModal = () => {
//         setShowModal(false);
//     };

//     const handleSavePackage = async () => {
//         if (regNo.trim()) {
//             // const result = await dispatch(createAgency({ regNo }));
//             const result = await dispatch(makeReseller(Number(regNo)));
//             if (makeReseller.fulfilled.match(result)) {
//                 dispatch(listResellers());
//             }
//         }
//         handleCloseModal();
//         setRegNo('');
//     };

//     const handleDelete = async (regNo) => {
//         const result = await dispatch(removeReseller(regNo)); // 🔁 Ensure it's a number
//         if (removeReseller.fulfilled.match(result)) {
//             dispatch(listResellers());
//         }
//     };


//     // const handleDelete = async (regNo) => {
//     //     await dispatch(removeReseller(regNo));

//     // };



//     const isNumber = /^\d+$/.test(regNo.trim());

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
//                                 <h6>Exchange Rate:</h6>
//                                 <button className="addBtn" onClick={handleAddPackage}>
//                                     +Add
//                                 </button>
//                             </div>

//                             <div className="package-list">
//                                 {resellerState?.map((item, index) => (
//                                     <div
//                                         key={index}
//                                         className="package-item d-flex align-items-center justify-content-between mb-2 p-2 border rounded"

//                                     >
//                                         <div className="d-flex align-items-center"  >
//                                             <img
//                                                 src={item?.profilePic}
//                                                 alt="img"
//                                                 className="package-image me-3"
//                                                 style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: 'cover' }}
//                                             />
//                                             <div>
//                                                 <h6 className="mb-1" style={{ fontSize: '13px' }}>Reseller ID: {item?.regNumber}</h6>
//                                                 <p className="mb-0" style={{ fontSize: '13px' }}>Name: {item?.fullname}</p>
//                                                 <p className="mb-0" style={{ fontSize: '11px' }}>
//                                                     Total Diamond: {item?.diamond}
//                                                 </p>
//                                             </div>
//                                         </div>
//                                         {/* <button className="btn btn-danger" >
//                                             <RiDeleteBin5Line className="pb-1" size={15} />
//                                         </button> */}
//                                         <button className="btn btn-danger px-2 pb-2" style={{ lineHeight: 1 }} onClick={() => handleDelete(item?.regNumber)}>
//                                             <RiDeleteBin5Line size={16} />
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
//                 }}>
//                     <div style={{
//                         background: 'white',
//                         padding: '20px',
//                         borderRadius: '8px',
//                         width: '400px',
//                         textAlign: 'center',
//                     }}>
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

//                         <div style={{
//                             display: 'flex',
//                             justifyContent: 'space-between',
//                             width: '70%',
//                             margin: 'auto',
//                         }}>
//                             <button style={{

//                                 color: '#ffffff',
//                                 cursor: isNumber ? 'pointer' : 'not-allowed',
//                             }} className="btn mt-4 btnCancel" onClick={handleCloseModal}>
//                                 Cancel
//                             </button>
//                             <button
//                                 className="btn mt-4 btnSave"
//                                 onClick={handleSavePackage}
//                                 disabled={!isNumber}
//                                 style={{
//                                     backgroundColor: isNumber ? '#2BE5D8' : '#cccccc',
//                                     color: isNumber ? '#ffffff' : '#666666',
//                                     cursor: isNumber ? 'pointer' : 'not-allowed',
//                                 }}
//                             >
//                                 Add
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}


//         </div>
//     );
// };

// export default Exchange;








import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    listResellers,
    makeReseller,
    removeReseller,
} from "../features/reseller/resellerSlice";
import { addDiamondExchange, getAllDiamondExchanges, removeDiamondExchange } from "../features/withdraw/withdrawSlice";

const Exchange = () => {
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [regNo, setRegNo] = useState("");
    const [diamond, setDiamond] = useState("");
    const [amount, setAmount] = useState("");

    const exchangeList = useSelector((state) => state.withdraw.withdraw);;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllDiamondExchanges());
    }, [dispatch]);

    const handleAddPackage = () => {
        setShowModal(true);
        setDiamond("");
        setAmount("");
        setRegNo("");
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    // const handleSavePackage = async () => {
    //     if (regNo.trim()) {
    //         const result = await dispatch(makeReseller(Number(regNo)));
    //         if (makeReseller.fulfilled.match(result)) {
    //             dispatch(getAllDiamondExchanges());
    //         }
    //     }
    //     handleCloseModal();
    //     setRegNo("");
    // };

    const handleDelete = async (id) => {
        const result = await dispatch(removeDiamondExchange(id));
        if (removeDiamondExchange.fulfilled.match(result)) {
            dispatch(getAllDiamondExchanges());
        }
    };

    const handleExchange = async () => {
        if (!diamond || !amount || isNaN(diamond) || isNaN(amount)) return;

        const result = await dispatch(
            addDiamondExchange({ diamond: Number(diamond), amount: Number(amount) })
        );

        if (addDiamondExchange.fulfilled.match(result)) {
            console.log("✅ Exchange successful", result.payload);
            dispatch(getAllDiamondExchanges());
            setDiamond("");
            setAmount("");
            handleCloseModal();
        }
    };

    return (
        <div>
            {loading ? (
                <div className="spinner">
                    <PulseLoader color="#31baff" />
                </div>
            ) : (
                <div className="container">
                    <div className="margin">
                        <div className="d-flex align-items-center justify-content-between ffff">
                            <h6>Exchange Rate:</h6>
                            <button className="addBtn" onClick={handleAddPackage}>
                                +Add
                            </button>
                        </div>

                        <div className="package-list">
                            {exchangeList?.map((item, index) => (
                                <div
                                    key={index}
                                    className="package-item d-flex align-items-center justify-content-between mb-2 p-2 border rounded"
                                >
                                    <div className="d-flex align-items-center">

                                        <div>
                                            <h6 className="mb-1" style={{ fontSize: "13px" }}>
                                                Diamond: {item?.diamond}
                                            </h6>
                                            <p className="mb-0" style={{ fontSize: "13px" }}>
                                                BDT: {item?.amount}
                                            </p>
                                            {/* <p className="mb-0" style={{ fontSize: "11px" }}>
                        Total Diamond: {item?.diamond}
                      </p> */}
                                        </div>
                                    </div>
                                    <button
                                        className="btn btn-danger px-2 pb-2"
                                        style={{ lineHeight: 1 }}
                                        onClick={() => handleDelete(item?.id)}
                                    >
                                        <RiDeleteBin5Line size={16} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {showModal && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                        padding: "20px",
                    }}
                >
                    <div
                        style={{
                            background: "white",
                            padding: "20px",
                            borderRadius: "8px",
                            width: "400px",
                            textAlign: "center",
                        }}
                    >
                        <h5>Add Diamond Exchange</h5>

                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control mt-2"
                                placeholder="Diamond"
                                value={diamond}
                                onChange={(e) => setDiamond(e.target.value)}
                            />
                            <input
                                type="text"
                                className="form-control mt-2"
                                placeholder="Amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "70%",
                                margin: "auto",
                            }}
                        >
                            <button
                                className="btn mt-4 btnCancel"
                                onClick={handleCloseModal}
                                style={{ color: "#ffffff" }}
                            >
                                Cancel
                            </button>
                            <button
                                className="btn mt-4 btnSave"
                                onClick={handleExchange}
                                disabled={
                                    !diamond || !amount || isNaN(diamond) || isNaN(amount)
                                }
                                style={{
                                    backgroundColor:
                                        diamond && amount && !isNaN(diamond) && !isNaN(amount)
                                            ? "#2BE5D8"
                                            : "#cccccc",
                                    color:
                                        diamond && amount && !isNaN(diamond) && !isNaN(amount)
                                            ? "#ffffff"
                                            : "#666666",
                                    cursor:
                                        diamond && amount && !isNaN(diamond) && !isNaN(amount)
                                            ? "pointer"
                                            : "not-allowed",
                                }}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Exchange;
