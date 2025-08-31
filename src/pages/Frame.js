import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchAllFrame,
    createFrame,
    removeFrame,
} from "../features/animation/animationSlice";
import { uploadVideo } from "../features/upload/uploadSlice";

const Frame = () => {
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [imageUrl, setImageUrl] = useState("");
    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");
    const [validity, setValidity] = useState("");

    const frameState = useSelector((state) => state?.animation?.frame || []);
    console.log(frameState);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchAllFrame());
    }, [dispatch]);

    const handleAddPackage = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleFileChange = async (e) => {
        const file = e.currentTarget.files[0];
        if (file) {
            try {
                const res = await dispatch(uploadVideo([file]));
                const fileName = res?.payload?.fileName;
                if (fileName) {
                    const fullUrl = `https://upload.projectlive.online/files/${fileName}`;
                    setImageUrl(fullUrl);
                } else {
                    console.warn("No fileName returned from upload");
                }
            } catch (err) {
                console.error("Upload error:", err);
            }
        }
    };

    const handleSavePackage = async () => {
        if (!name || !imageUrl || !amount || !validity) return;

        const data = {
            name,
            imageUrl, // ✅ renamed from videoUrl
            amount: Number(amount),
            validity: Number(validity),
        };

        const result = await dispatch(createFrame(data));
        if (createFrame.fulfilled.match(result)) {
            dispatch(fetchAllFrame());
        }

        handleCloseModal();
        setName("");
        setImageUrl("");
        setAmount("");
        setValidity("");
    };

    const handleDelete = async (id) => {
        const result = await dispatch(removeFrame(id));
        if (result) {
            dispatch(fetchAllFrame());
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
                            <h6>Frame:</h6>
                            <button className="addBtn" onClick={handleAddPackage}>
                                +Add
                            </button>
                        </div>

                        <div className="package-list">
                            {frameState?.map((item, index) => (
                                <div
                                    key={index}
                                    className="package-item d-flex align-items-center justify-content-between mb-2 p-2 border rounded"
                                >
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={item?.imageUrl}
                                            alt="frame"
                                            className="package-image me-3"
                                            style={{
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "5px",
                                                objectFit: "cover",
                                            }}
                                        />
                                        <div className="ms-3">
                                            <h6 className="mb-1" style={{ fontSize: "13px" }}>
                                                Name: {item?.name || "Unnamed"}
                                            </h6>
                                            <h6 className="mb-1" style={{ fontSize: "13px" }}>
                                                Amount: {item?.amount}
                                            </h6>
                                            <p className="mb-0" style={{ fontSize: "11px" }}>
                                                Validity: {item?.validity} days
                                            </p>
                                        </div>
                                    </div>
                                    <button className="btn btn-danger" onClick={() => handleDelete(item?.id)}>
                                        <RiDeleteBin5Line className="pb-1" size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Modal */}
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
                        }}
                    >
                        <h5>Add New Frame</h5>
                        <div className="form-group">
                            <p className="mt-2" style={{ fontWeight: "600" }}>Upload Image</p>
                            <input type="file" accept="image/*" className="form-control" onChange={handleFileChange} />
                            {imageUrl && (
                                <img
                                    src={imageUrl}
                                    alt="preview"
                                    style={{
                                        width: "100%",
                                        height: '200px',
                                        marginTop: 10,
                                        borderRadius: 5,
                                        objectFit: 'cover',
                                    }}
                                />
                            )}

                            <p className="mt-3" style={{ fontWeight: "600" }}>Name</p>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <p className="mt-3" style={{ fontWeight: "600" }}>Amount</p>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />

                            <p className="mt-3" style={{ fontWeight: "600" }}>Validity (days)</p>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter validity"
                                value={validity}
                                onChange={(e) => setValidity(e.target.value)}
                            />
                        </div>

                        <div className="d-flex justify-content-between mt-4">
                            <button className="btn btnCancel" onClick={handleCloseModal}>Cancel</button>
                            <button className="btn btnSave" onClick={handleSavePackage}>Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Frame;
