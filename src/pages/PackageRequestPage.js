// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//     fetchAllPackagePurchaseRequest,
//     updatePackagePurchaseRequestStatus,
// } from "../features/package/packageSlice";

// const PackageRequestPage = () => {
//     const dispatch = useDispatch();
//     const { packagePurchaseRequests, isLoading } = useSelector(
//         (state) => state.package
//     );

//     const [activeTab, setActiveTab] = useState("pending");
//     const [search, setSearch] = useState("");

//     useEffect(() => {
//         dispatch(fetchAllPackagePurchaseRequest());
//     }, [dispatch]);

//     const handleStatusChange = (id, status) => {
//         dispatch(updatePackagePurchaseRequestStatus({ id, status }));
//     };

//     const filteredData = packagePurchaseRequests
//         ?.filter((item) => item.status === activeTab)
//         ?.filter((item) =>
//             item.user?.regNumber?.toString()?.includes(search)
//         );

//     const renderTab = (label, value) => (
//         <button
//             className={`flex-1 py-2 text-center border-b-2 font-medium ${activeTab === value ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500"
//                 }`}
//             onClick={() => setActiveTab(value)}
//         >
//             {label}
//         </button>
//     );

//     return (
//         <div className="margin">
//             <div className="container">
//                 <div >
//                     <h2 className="text-lg font-bold mb-4">Package Requests</h2>

//                     <div className="flex border-b mb-4 text-sm">
//                         {renderTab("Pending", "pending")}
//                         {renderTab("Approved", "approved")}
//                         {renderTab("Rejected", "rejected")}
//                     </div>

//                     <input
//                         type="text"
//                         placeholder="Search by Reg Number..."
//                         className="border px-3 py-2 mb-4 rounded w-full text-sm"
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                     />

//                     {isLoading ? (
//                         <p>Loading...</p>
//                     ) : (
//                         <div className="space-y-4">
//                             {filteredData?.map((item) => (
//                                 <div key={item.id} className="border rounded p-3 text-sm">
//                                     <div className="flex items-center gap-2 mb-2">
//                                         <img
//                                             src={item.user?.profilePic}
//                                             alt="profile"
//                                             className="w-8 h-8 rounded-full"
//                                         />
//                                         <div>
//                                             <p className="font-semibold">{item.user?.fullname}</p>
//                                             <p className="text-xs text-gray-500">Reg #{item.user?.regNumber}</p>
//                                         </div>
//                                     </div>
//                                     <p><strong>Package:</strong> {item.vipSubPackage?.name}</p>
//                                     <p><strong>Payment Type:</strong> {item.paymentType}</p>
//                                     <p><strong>Txn No:</strong> {item.transactionNumber}</p>
//                                     <p><strong>Status:</strong> <span className="capitalize">{item.status}</span></p>

//                                     {activeTab === "pending" && (
//                                         <div className="flex gap-2 mt-2">
//                                             <button
//                                                 className="bg-green-500 text-white px-3 py-1 rounded"
//                                                 onClick={() => handleStatusChange(item.id, "approved")}
//                                             >
//                                                 Approve
//                                             </button>
//                                             <button
//                                                 className="bg-red-500 text-white px-3 py-1 rounded"
//                                                 onClick={() => handleStatusChange(item.id, "rejected")}
//                                             >
//                                                 Reject
//                                             </button>
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PackageRequestPage;













// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//     fetchAllPackagePurchaseRequest,
//     updatePackagePurchaseRequestStatus,
// } from "../features/package/packageSlice";

// const PackageRequestPage = () => {
//     const dispatch = useDispatch();
//     const { packagePurchaseRequests, isLoading } = useSelector(
//         (state) => state.package
//     );

//     const [activeTab, setActiveTab] = useState("pending");
//     const [search, setSearch] = useState("");

//     useEffect(() => {
//         dispatch(fetchAllPackagePurchaseRequest());
//     }, [dispatch]);

//     const handleStatusChange = (id, status) => {
//         dispatch(updatePackagePurchaseRequestStatus({ id, status }));
//     };

//     const filteredData = packagePurchaseRequests
//         ?.filter((item) => item.status === activeTab)
//         ?.filter((item) =>
//             item.user?.regNumber?.toString()?.includes(search)
//         );

//     const renderTab = (label, value) => (
//         <button
//             className={`flex-1 py-2 text-center border-b-2 font-medium ${activeTab === value ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500"
//                 }`}
//             onClick={() => setActiveTab(value)}
//         >
//             {label}
//         </button>
//     );

//     return (
//         <div className="h-screen flex flex-col p-3 " style={{marginTop: '70px'}}>
//             {/* Fixed Header */}
//             <div className="shrink-0 mb-3">
//                 <h2 className="text-lg font-bold mb-2">Package Requests</h2>

//                 <div className="d-flex gap-5 border-b mb-2 text-sm mt-3" style={{}}>
//                     {renderTab("Pending", "pending")}
//                     {renderTab("Approved", "approved")}
//                     {renderTab("Rejected", "rejected")}
//                 </div>

//                 <input
//                     type="text"
//                     placeholder="Search by Reg Number..."
//                     className="border px-3 py-2 mb-2 rounded w-full text-sm mt-3"
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                 />
//             </div>

//             {/* Scrollable List */}
//             <div className="flex-1 overflow-y-auto space-y-4">
//                 {isLoading ? (
//                     <p>Loading...</p>
//                 ) : (
//                     filteredData?.map((item) => (
//                         <div key={item.id} className="border rounded p-3 text-sm">
//                             <div className="d-flex items-center gap-2 mb-2">
//                                 <img
//                                     src={item.user?.profilePic}
//                                     alt="profile"
//                                     className="w-8 h-8 rounded-full"
//                                     style={{ height: '50px', width: '50px', borderRadius: '50%'}}
//                                 />
//                                 <div>
//                                     <p className="font-semibold">{item.user?.fullname}</p>
//                                     <p className="text-xs text-gray-500">Reg #{item.user?.regNumber}</p>
//                                 </div>
//                             </div>
//                             <p><strong>Package:</strong> {item.vipSubPackage?.name}</p>
//                             <p><strong>Payment Type:</strong> {item.paymentType}</p>
//                             <p><strong>Txn No:</strong> {item.transactionNumber}</p>
//                             <p><strong>Status:</strong> <span className="capitalize">{item.status}</span></p>

//                             {activeTab === "pending" && (
//                                 <div className="flex gap-2 mt-2">
//                                     <button
//                                         className="bg-green-500 text-white px-3 py-1 rounded"
//                                         onClick={() => handleStatusChange(item.id, "approved")}
//                                     >
//                                         Approve
//                                     </button>
//                                     <button
//                                         className="bg-red-500 text-white px-3 py-1 rounded"
//                                         onClick={() => handleStatusChange(item.id, "rejected")}
//                                     >
//                                         Reject
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// };

// export default PackageRequestPage;









import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchAllPackagePurchaseRequest,
    updatePackagePurchaseRequestStatus,
} from "../features/package/packageSlice";

const PackageRequestPage = () => {
    const dispatch = useDispatch();
    const { packagePurchaseRequests, isLoading } = useSelector(
        (state) => state.package
    );

    const [activeTab, setActiveTab] = useState("pending");
    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(fetchAllPackagePurchaseRequest());
    }, [dispatch]);

    const handleStatusChange = (id, status) => {
        dispatch(updatePackagePurchaseRequestStatus({ id, status }));
        dispatch(fetchAllPackagePurchaseRequest());
    };

    const filteredData = packagePurchaseRequests
        ?.filter((item) => item.status === activeTab)
        ?.filter((item) =>
            item.user?.regNumber?.toString()?.includes(search)
        );

    const renderTab = (label, value) => (
        <button
            className={`btn flex-fill text-capitalize border ${activeTab === value
                    ? "border-primary text-primary fw-bold"
                    : "text-secondary"
                }`}
            onClick={() => setActiveTab(value)}
        >
            {label}
        </button>
    );

    return (
        <div className="container-fluid" style={{ marginTop: '90px', height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <div className="mb-3">
                <h2 className="h5 fw-bold mb-2">Package Requests</h2>

                <div className="d-flex gap-3 mb-3 mt-3">
                    {renderTab("Pending", "pending")}
                    {renderTab("Approved", "accepted")}
                    {renderTab("Rejected", "rejected")}
                </div>

                <input
                    type="text"
                    placeholder="Search by ID..."
                    className="form-control mb-3"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Scrollable List */}
            <div className="overflow-auto" style={{ flex: 1 }}>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    filteredData?.map((item) => (
                        <div key={item?.id} className="card mb-3 p-3">
                            <div className="d-flex align-items-center mb-2">
                                <img
                                    src={item?.user?.profilePic}
                                    alt="profile"
                                    className="rounded-circle me-3"
                                    style={{ height: '50px', width: '50px', objectFit: 'cover' }}
                                />
                                <div>
                                    <div className="fw-semibold">{item?.user?.fullname}</div>
                                    <div className="text-muted small">ID: {item?.user?.regNumber}</div>
                                </div>
                            </div>
                            <p><strong>Package:</strong> {item?.vipSubPackage?.name}</p>
                            <p><strong>Prise:</strong> {item?.vipSubPackage?.amount} BDT</p>
                            <p><strong>Payment Type:</strong> {item.paymentType}</p>
                            <p><strong>Acc No:</strong> {item?.sendingNumber}</p>
                            <p><strong>Txn No:</strong> {item?.transactionNumber}</p>
                            <p><strong>Status:</strong> <span className="text-capitalize">{item?.status}</span></p>

                            {activeTab === "pending" && (
                                <div className="d-flex gap-2 mt-2">
                                    <button
                                        className="btn btn-success btn-sm"
                                        onClick={() => handleStatusChange(item.id, "accepted")}
                                    >
                                        Approve
                                    </button>
                                    <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => handleStatusChange(item.id, "rejected")}
                                    >
                                        Reject
                                    </button>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default PackageRequestPage;
