import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { allGift, deleteGift } from '../features/gift/giftSlice';
import { PulseLoader } from 'react-spinners';
import moment from 'moment';

function Gift() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const giftState = useSelector((state) => state?.gift?.gift?.data || []);
    console.log(giftState);

    const [loading, setLoading] = useState(false);




    const formattedDate = (dateString) => {
        return moment(dateString).format("M/D/YYYY h:mm A");
    };



    useEffect(() => {
        dispatch(allGift())
    }, [])


    const handleDelete = async (id) => {
        const response = await dispatch(deleteGift(id))
        if (response) {
            dispatch(allGift())
        }
    };



    const handleAddPackage = () => {
        navigate("/xnet/add-gift");
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
                                <h6>Gift:</h6>
                                <button className="addBtn" onClick={handleAddPackage} >+Add</button>
                            </div>

                            {/* Package List */}
                            <div className="package-list">
                                {giftState.length > 0 ? (
                                    giftState?.map((item) => (
                                        <div
                                            key={item.id}
                                            className="package-item d-flex align-items-center justify-content-between mb-2 p-2 border rounded"
                                        >
                                            <div className="d-flex align-items-center">
                                                <img
                                                    src={item?.gifUrl}
                                                    muted
                                                    autoPlay
                                                    loop
                                                    playsInline
                                                    className="package-image me-3"
                                                    style={{ width: "50px", height: "50px", borderRadius: "5px", objectFit: "cover" }}
                                                />
                                                <div>
                                                    <h6 className="mb-1">Amount: {item?.amount}</h6>
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

    )
}

export default Gift