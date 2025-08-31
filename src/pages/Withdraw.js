
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWithdrawRequestsByStatus, updateWithdrawRequestStatus } from "../features/withdraw/withdrawSlice";

const Withdraw = () => {
    const dispatch = useDispatch();
    const { withdrawRequests, isLoading } = useSelector((state) => state.withdraw);
    console.log(withdrawRequests);
    const withdrawState = useSelector((state) => state?.withdraw?.withdrawRequest);
    console.log(withdrawState);



    const [activeTab, setActiveTab] = useState("pending");
    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(getWithdrawRequestsByStatus(activeTab));
    }, [dispatch, activeTab]);

    const handleStatusChange = (id, status) => {
        dispatch(updateWithdrawRequestStatus({ id, status }));
    };

    const filteredData = withdrawState
        ?.filter((item) => item.status === activeTab)
        ?.filter((item) =>
            item.diamondExchangeId?.toString()?.includes(search)
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
                <h2 className="h5 fw-bold mb-2">Withdraw Requests</h2>

                <div className="d-flex gap-3 mb-3 mt-3">
                    {renderTab("Pending", "pending")}
                    {renderTab("Paid", "paid")}
                    {renderTab("Rejected", "rejected")}
                </div>

                <input
                    type="text"
                    placeholder="Search by Id..."
                    className="form-control mb-3"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

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
                            <p><strong>Sending Name:</strong> {item?.userFullname}</p>
                            <p><strong>Diamond Amount:</strong> {item?.diamondExchange?.diamond}</p>
                            <p><strong>Amount:</strong> {item?.diamondExchange?.amount} BDT</p>
                            <p><strong>Payment Type:</strong> {item.paymentType}</p>
                            <p><strong>Acc No:</strong> {item?.userNumber}</p>
                            <p><strong>Status:</strong> <span className="text-capitalize">{item?.status}</span></p>

                            {activeTab === "pending" && (
                                <div className="d-flex gap-2 mt-2">
                                    <button
                                        className="btn btn-success btn-sm"
                                        onClick={() => handleStatusChange(item.id, "accepted")}
                                    >
                                        Paid
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

export default Withdraw;
