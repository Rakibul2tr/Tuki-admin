import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { RiDeleteBin5Line } from "react-icons/ri";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllDiamondPackage, removeDiamondPackage } from "../features/daimond/daimondSlice";
const Daimond = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const daimondState = useSelector((state) => state?.diamond.diamond || []);
    console.log(daimondState);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchAllDiamondPackage())
    }, [])


    const formattedDate = (dateString) => {
        return moment(dateString).format("M/D/YYYY h:mm A");
    };

    const handleDelete = async (id) => {
        const result = await dispatch(removeDiamondPackage(id))
        if (result) {
            dispatch(fetchAllDiamondPackage())
        }
    };


    const handleAddPackage = () => {
        navigate("/xnet/add-daimond");
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
                            <div className="d-flex align-items-center justify-content-between ffff">
                                <h6>Diamond:</h6>
                                <button className="addBtn" onClick={handleAddPackage} >+Add</button>
                            </div>

                            {/* Package List */}
                            <div className="package-list">
                                {daimondState?.length > 0 ? (
                                    daimondState?.map((item) => (
                                        <div
                                            key={item?.id}
                                            className="package-item d-flex align-items-center justify-content-between mb-2 py-2 px-3 border rounded"
                                        >
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <h6 className="mb-1">BDT: {item?.bdt}</h6>
                                                    <h6 className="mb-1">Daimonds: {item?.amount}</h6>
                                                    <p className="mb-0 text-muted ddate">
                                                        Added on: {formattedDate(item?.date)}
                                                    </p>
                                                </div>
                                            </div>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleDelete(item?.id)}
                                            >
                                                <RiDeleteBin5Line className="pb-1" size={20} />
                                            </button>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-center">No packages available.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Daimond;