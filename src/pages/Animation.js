















// import React, { useEffect, useState } from "react";
// import { PulseLoader } from "react-spinners";
// import { RiDeleteBin5Line } from "react-icons/ri";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchAllAnimations,
//   createAnimation,
//   removeAnimation,
// } from "../features/animation/animationSlice";
// import { uploadVideo } from "../features/upload/uploadSlice";

// const Animation = () => {
//   const [loading, setLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [video, setVideo] = useState("");
//   const [amount, setAmount] = useState("");
//   const [validity, setValidity] = useState("");

//   const animationState = useSelector((state) => state?.animation?.animations || []);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     dispatch(fetchAllAnimations());
//   }, []);

//   const handleAddPackage = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   const handleFileChange = async (e) => {
//     const file = e.currentTarget.files[0];
//     if (file) {
//       try {
//         const res = await dispatch(uploadVideo([file]));
//         const fileName = res?.payload?.fileName;
//         if (fileName) {
//           const fullUrl = `https://upload.projectlive.online/files/${fileName}`;
//           setVideo(fullUrl);
//         } else {
//           console.warn("No fileName returned from upload");
//         }
//       } catch (err) {
//         console.error("Upload error:", err);
//       }
//     }
//   };

//   const handleSavePackage = async () => {
//     if (!video || !amount || !validity) return;

//     const data = {
//       gif: video, // the field is called gif in backend, even though it's video
//       audio: "",  // optional or empty
//       amount : Number(amount) ,
//       validity: Number(validity) ,
//     };

//     const result = await dispatch(createAnimation(data));
//     if (createAnimation.fulfilled.match(result)) {
//       dispatch(fetchAllAnimations());
//     }

//     handleCloseModal();
//     setVideo("");
//     setAmount("");
//     setValidity("");
//   };

//   const handleDelete = async (id) => {
//     const result = await dispatch(removeAnimation(id));
//     if (result) {
//       dispatch(fetchAllAnimations());
//     }
//   };

//   return (
//     <div>
//       {loading ? (
//         <div className="spinner">
//           <PulseLoader color="#31baff" />
//         </div>
//       ) : (
//         <div className="container">
//           <div className="margin">
//             <div className="d-flex align-items-center justify-content-between ffff">
//               <h6>Animation:</h6>
//               <button className="addBtn" onClick={handleAddPackage}>
//                 +Add
//               </button>
//             </div>

//             <div className="package-list">
//               {animationState.map((item, index) => (
//                 <div
//                   key={index}
//                   className="package-item d-flex align-items-center justify-content-between mb-2 p-2 border rounded"
//                 >
//                   <div className="d-flex align-items-center">
//                     <video
//                       src={item?.gif}
//                       controls
//                       style={{ width: "60px", height: "40px", objectFit: "cover" }}
//                     />
//                     <div className="ms-3">
//                       <h6 className="mb-1" style={{ fontSize: "13px" }}>
//                         Amount: {item?.amount}
//                       </h6>
//                       <p className="mb-0" style={{ fontSize: "11px" }}>
//                         Validity: {item?.validity} days
//                       </p>
//                     </div>
//                   </div>
//                   <button className="btn btn-danger" onClick={() => handleDelete(item?._id)}>
//                     <RiDeleteBin5Line className="pb-1" size={20} />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Modal */}
//       {showModal && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             background: "rgba(0, 0, 0, 0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 1000,
//             padding: "20px",
//           }}
//         >
//           <div
//             style={{
//               background: "white",
//               padding: "20px",
//               borderRadius: "8px",
//               width: "400px",
//             }}
//           >
//             <h5>Add New Animation</h5>
//             <div className="form-group">
//               <div>
//                 <p className="mt-2" style={{ fontWeight: "600" }}>Upload Video</p>
//               </div>
//               <input type="file" accept="video/*" className="form-control" onChange={handleFileChange} />
//               {video && (
//                 <video
//                   src={video}
//                   controls
//                   style={{ width: "100%", height: '200px', marginTop: 10, borderRadius: 5 }}
//                 />
//               )}

//               <p className="mt-3" style={{ fontWeight: "600" }}>Amount</p>
//               <input
//                 type="number"
//                 className="form-control"
//                 placeholder="Enter amount"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//               />

//               <p className="mt-3" style={{ fontWeight: "600" }}>Validity (days)</p>
//               <input
//                 type="number"
//                 className="form-control"
//                 placeholder="Enter validity"
//                 value={validity}
//                 onChange={(e) => setValidity(e.target.value)}
//               />
//             </div>

//             <div className="d-flex justify-content-between mt-4">
//               <button className="btn btnCancel" onClick={handleCloseModal}>Cancel</button>
//               <button className="btn btnSave" onClick={handleSavePackage}>Save</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Animation;
























import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllAnimations,
  createAnimation,
  removeAnimation,
} from "../features/animation/animationSlice";
import { uploadVideo } from "../features/upload/uploadSlice";

const Animation = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [video, setVideo] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [validity, setValidity] = useState("");

  const animationState = useSelector((state) => state?.animation?.animations || []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllAnimations());
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
          const fullUrl = `https://upload.nrtuki.xyz/files/${fileName}`;
          setVideo(fullUrl);
        } else {
          console.warn("No fileName returned from upload");
        }
      } catch (err) {
        console.error("Upload error:", err);
      }
    }
  };

  const handleSavePackage = async () => {
    if (!name || !video || !amount || !validity) return;

    const data = {
      name,
      videoUrl: video, // renamed from gif to videoUrl
      amount: Number(amount),
      validity: Number(validity),
    };

    const result = await dispatch(createAnimation(data));
    if (createAnimation.fulfilled.match(result)) {
      dispatch(fetchAllAnimations());
    }

    handleCloseModal();
    setName("");
    setVideo("");
    setAmount("");
    setValidity("");
  };

  const handleDelete = async (id) => {
    const result = await dispatch(removeAnimation(id));
    if (result) {
      dispatch(fetchAllAnimations());
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
              <h6>Animation:</h6>
              <button className="addBtn" onClick={handleAddPackage}>
                +Add
              </button>
            </div>

            <div className="package-list">
              {animationState?.map((item, index) => (
                <div
                  key={index}
                  className="package-item d-flex align-items-center justify-content-between mb-2 p-2 border rounded"
                >
                  <div className="d-flex align-items-center">

                    <video
                      src={item?.videoUrl}
                      muted
                      autoPlay
                      loop
                      playsInline
                      className="package-image me-3"
                      style={{ width: "50px", height: "50px", borderRadius: "5px", objectFit: "cover" }}
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
            <h5>Add New Animation</h5>
            <div className="form-group">
              <p className="mt-2" style={{ fontWeight: "600" }}>Upload Video</p>
              <input type="file" accept="video/*" className="form-control" onChange={handleFileChange} />
              {video && (
                <video
                  src={video}
                  controls
                  style={{ width: "100%", height: '200px', marginTop: 10, borderRadius: 5 }}
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

export default Animation;
