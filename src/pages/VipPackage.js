// import React, { useEffect, useState } from "react";
// import { PulseLoader } from "react-spinners";
// import { RiDeleteBin5Line } from "react-icons/ri";
// import moment from "moment";
// import { useNavigate } from "react-router-dom";
// import { allPackage,  } from "../features/package/packageSlice";
// import { useDispatch, useSelector } from "react-redux";
// const VipPackage = () => {
//     const [loading, setLoading] = useState(false);
//     const packageState = useSelector((state) => state?.package?.packages || []);
//     console.log('packageState', packageState);


//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     // Demo data


//     useEffect(() => {
//         dispatch(allPackage({ type: "vip" })); // fetch filtered VIP packages
//     }, [dispatch]);


//     const formattedDate = (dateString) => {
//         return moment(dateString).format("M/D/YYYY h:mm A");
//     };

//     const handleDelete = async (id) => {
//         // const response = await dispatch(deletePackage(id))
//         // if (response) {
//         //     dispatch(allPackage())
//         // }
//     };

//     const handleAddPackage = () => {
//         navigate("/xnet/add-package");
//     };


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
//                                 <h6>VIP Package:</h6>
//                                 <button className="addBtn" onClick={handleAddPackage} >+Add</button>
//                             </div>

//                             {/* Package List */}
//                             <div className="package-list">
//                                 {
//                                     packageState.map((item) => (
//                                         <div
//                                             key={item.id}
//                                             className="package-item d-flex align-items-center justify-content-between mb-2 p-2 border rounded"
//                                         >
//                                             <div className="d-flex align-items-center">
//                                                 <img
//                                                     src={item?.imageUrl} // Can be a static image or a GIF
//                                                     alt="Package"
//                                                     className="package-image me-3"
//                                                     style={{ width: "50px", height: "50px", borderRadius: "5px" }}
//                                                 />
//                                                 <div>
//                                                     <h6 className="mb-1">{item?.name}</h6>
//                                                     <p className="mb-0">Type: VIP</p>
//                                                     <p className="mb-0 text-muted ddate">
//                                                         Added on: {formattedDate(item?.createdAt)}
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                             <button
//                                                 className="btn btn-danger"
//                                                 onClick={() => handleDelete(item?._id)}
//                                             >
//                                                 <RiDeleteBin5Line className="pb-1" size={20} />
//                                             </button>
//                                         </div>
//                                     ))
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default VipPackage;





// import React, { useEffect, useState } from "react";
// import { PulseLoader } from "react-spinners";
// import { RiDeleteBin5Line } from "react-icons/ri";
// import moment from "moment";
// import { useNavigate } from "react-router-dom";
// import { allPackage, deletePackage } from "../features/package/packageSlice";
// import { useDispatch, useSelector } from "react-redux";
// const Package = () => {
//     const [loading, setLoading] = useState(false);
//     const packageState = useSelector((state) => state?.package?.packages || []);
//     console.log(packageState);

//     const navigate = useNavigate();
//     const dispatch = useDispatch();


//         useEffect(() => {
//             dispatch(allPackage({ type: "vvip" })); // fetch filtered VIP packages
//         }, [dispatch]);

//     const formattedDate = (dateString) => {
//         return moment(dateString).format("M/D/YYYY h:mm A");
//     };

//     const handleDelete = async (id) => {
//         const response = await dispatch(deletePackage(id))
//         if (response) {
//             dispatch(allPackage())
//         }
//     };

//     const handleAddPackage = () => {
//         navigate("/xnet/add-package");
//       };


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
//                             <div className="d-flex align-items-center justify-content-between ">
//                                 <h6>VVIP Package:</h6>
//                                 <button className="addBtn" onClick={handleAddPackage} >+Add</button>
//                             </div>

//                             {/* Package List */}
//                             <div className="package-list">
//                                 {(
//                                     packageState.map((item) => (
//                                         <div
//                                             key={item.id}
//                                             className="package-item d-flex align-items-center justify-content-between mb-2 p-2 border rounded"
//                                         >
//                                             <div className="d-flex align-items-center">
//                                                 <img
//                                                     src={item?.imageUrl} // Can be a static image or a GIF
//                                                     alt="Package"
//                                                     className="package-image me-3"
//                                                     style={{ width: "50px", height: "50px", borderRadius: "5px" }}
//                                                 />
//                                                 <div>
//                                                     <h6 className="mb-1">{item?.name}</h6>
//                                                     <p className="mb-0">Type: VVIP</p>
//                                                     <p className="mb-0 text-muted ddate">
//                                                         Added on: {formattedDate(item?.createdAt)}
//                                                     </p>
//                                                 </div>
//                                             </div>
//                                             <button
//                                                 className="btn btn-danger"
//                                                 onClick={() => handleDelete(item?.id)}
//                                             >
//                                                 <RiDeleteBin5Line className="pb-1" size={20} />
//                                             </button>
//                                         </div>
//                                     ))
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Package;


import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { RiDeleteBin5Line, RiEdit2Line } from "react-icons/ri";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { allPackage, removeVipPackage } from "../features/package/packageSlice";
import { useDispatch, useSelector } from "react-redux";
import PackageEditModal from "../components/PackageEditModal";

const VipPackage = () => {
    const [loading, setLoading] = useState(false);
    const packageState = useSelector((state) => state?.package?.packages || []);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);

    const handleEdit = (item) => {
        setSelectedPackage(item);
        setEditModalVisible(true);
    };

    useEffect(() => {
        dispatch(allPackage({ type: "vip" }));
    }, [dispatch]);

    const formattedDate = (dateString) => {
        return moment(dateString).format("M/D/YYYY h:mm A");
    };

    const handleDeleteVipPackage = async (id) => {
        await dispatch(removeVipPackage(id));
        dispatch(allPackage({ type: "vip" }));
    };

    const handleAddPackage = () => {
        navigate("/xnet/add-package");
    };

    const handleRefresh = () => {
        dispatch(allPackage({ type: "vip" }));
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
                            <div className="d-flex align-items-center justify-content-between ">
                                <h6>VIP Package:</h6>
                                <button className="addBtn" onClick={handleAddPackage}>
                                    +Add
                                </button>
                            </div>

                            {/* Package List */}
                            <div className="package-list">
                                {packageState.map((item) => (
                                    <div
                                        key={item.id}
                                        className="package-item d-flex align-items-center justify-content-between mb-2 p-2 border rounded"
                                    >
                                        <div className="d-flex align-items-center">
                                            <img
                                                src={item?.imageUrl}
                                                alt="Package"
                                                className="package-image me-3"
                                                style={{ width: "50px", height: "50px", borderRadius: "5px" }}
                                            />
                                            <div>
                                                <h6 className="mb-1">{item?.name}</h6>
                                                <p className="mb-0">Type: VVIP</p>
                                                <p className="mb-0 text-muted ddate">
                                                    Added on: {formattedDate(item?.createdAt)}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="d-flex gap-2">
                                            {/* Edit Button */}
                                            <button
                                                className="op-btn"
                                                onClick={() => handleEdit(item)}
                                                title="Edit"
                                            >
                                                <RiEdit2Line size={12} />
                                            </button>

                                            {/* Delete Button */}
                                            <button
                                                className="op-btn2"
                                                onClick={() => handleDeleteVipPackage(item?.id)}
                                                title="Delete"
                                            >
                                                <RiDeleteBin5Line size={12} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <PackageEditModal
                show={editModalVisible}
                onClose={() => setEditModalVisible(false)}
                packageItem={selectedPackage}
                onSubPackageAdded={handleRefresh}
            />
        </div>
    );
};

export default VipPackage;
