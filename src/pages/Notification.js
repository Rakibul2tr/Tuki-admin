import React, { useEffect, useState } from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from 'moment';
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { allNotification, createNotification, deleteNotification, getActiveNotifications, removeNotification } from '../features/notification/notificationSlice';

function Notification() {
    const dispatch = useDispatch();
    const notificationState = useSelector((state) => state?.notification?.notifications || []);
    console.log('notificationState', notificationState);

    const [showModal, setShowModal] = useState(false);

    const handleAddNoti = () => {
        setShowModal(true)
    }

    useEffect(() => {
        dispatch(getActiveNotifications())
    }, [])

    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Title is required"),
            description: Yup.string().required("Description is required"),
        }),
        onSubmit: async (values, { resetForm }) => {
            const result = await dispatch(createNotification(values))
            if (result) {
                dispatch(getActiveNotifications())
            }
            resetForm();
            setShowModal(false);
        },
    });

    const formattedDate = (dateString) => {
        return moment(dateString).format("M/D/YYYY h:mm A");
    };

    // Delete notification
    const handleDelete = async (id) => {
        const result = await dispatch(removeNotification(id));
        if (result) {
            dispatch(getActiveNotifications())
        }
    };


    return (
        <div>
            <div className="container">
                <div className="margin">
                    <div className="d-flex align-items-center justify-content-between ffff">
                        <h6>Notification:</h6>
                        <button className="addBtn" onClick={handleAddNoti} >+Add</button>
                    </div>
                    <div className="package-list">
                        {
                            notificationState.map((item) => (
                                <div
                                    key={item._id}
                                    className="package-item d-flex align-items-center justify-content-between mb-2 p-2 border rounded"
                                >
                                    <div className="">

                                        <div>
                                            <h6 className="mb-1">Title: {item?.title}</h6>
                                            <p className="mb-0">Description: </p>
                                            <p className="mb-0">
                                                {item?.description?.split(" ").slice(0, 10).join(" ")}
                                                {item?.description?.split(" ").length > 10 && "..."}
                                            </p>
                                            <p className="mb-0 text-muted ddate mt-3">
                                                Added on: {formattedDate(item?.date)}
                                            </p>
                                        </div>
                                        <button
                                            className="btn btn-danger mt-3"
                                            onClick={() => handleDelete(item?.id)}
                                        >
                                            <RiDeleteBin5Line className="pb-1" size={20} />
                                        </button>
                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
                {showModal && (
                    <div
                        style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0,0,0,0.5)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: "white",
                                padding: "30px",
                                borderRadius: "10px",
                                width: '90%'
                            }}
                        >
                            <h4 style={{ marginBottom: "20px" }}>Add Notification</h4>
                            <form onSubmit={formik.handleSubmit}>
                                <div style={{ marginBottom: "15px" }}>
                                    <label style={{ display: "block", marginBottom: "5px" }}>Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formik.values.title}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            border: "1px solid #ccc",
                                            borderRadius: "5px",
                                        }}
                                    />
                                    {formik.touched.title && formik.errors.title && (
                                        <small style={{ color: "red" }}>{formik.errors.title}</small>
                                    )}
                                </div>
                                <div style={{ marginBottom: "15px" }}>
                                    <label style={{ display: "block", marginBottom: "5px" }}>Description</label>
                                    <textarea
                                        name="description"
                                        value={formik.values.description}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            border: "1px solid #ccc",
                                            borderRadius: "5px",
                                        }}
                                    ></textarea>
                                    {formik.touched.description && formik.errors.description && (
                                        <small style={{ color: "red" }}>{formik.errors.description}</small>
                                    )}
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        style={{
                                            padding: "10px 20px",
                                            backgroundColor: "#ccc",
                                            color: "black",
                                            border: "none",
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        style={{
                                            padding: "10px 20px",
                                            backgroundColor: "#007bff",
                                            color: "white",
                                            border: "none",
                                            borderRadius: "5px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Add
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Notification