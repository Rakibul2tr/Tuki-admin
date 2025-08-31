








// import React, { useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";
// import { RiDeleteBin5Line, RiEdit2Line } from "react-icons/ri";
// import { useDispatch } from "react-redux";
// import { uploadImage } from "../features/upload/uploadSlice";
// import { createVipSubPackage } from "../features/package/packageSlice";

// const PackageEditModal = ({ show, onClose, packageItem }) => {
//   const dispatch = useDispatch();

//   console.log('packageItempackageItempackageItem', packageItem);


//   const [showForm, setShowForm] = useState(false);
//   const [subPackages, setSubPackages] = useState([]);

//   const [formData, setFormData] = useState({
//     name: "",
//     amount: "",
//     validity: "",
//     imageUrl: "", // holds uploaded URL
//   });

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       try {
//         const uploadData = new FormData();
//         uploadData.append("file", file);
//         const res = await dispatch(uploadImage(uploadData)).unwrap(); // { url }
//         setFormData((prev) => ({ ...prev, imageUrl: res.url }));
//       } catch (err) {
//         console.error("❌ Upload failed:", err);
//       }
//     }
//   };

//   const handleAddSubPackage = async () => {
//     const payload = {
//       vipPackageId: packageItem?.id,
//       name: formData.name,
//       amount: Number(formData.amount),
//       validity: Number(formData.validity),
//       imageUrl: formData.imageUrl,
//       entryAnimation: null,
//     };

//     await dispatch(createVipSubPackage(payload));

//     // For demo: local preview
//     setSubPackages([...subPackages, packageItem?.VipSubPackages]);

//     // Reset form
//     setFormData({
//       name: "",
//       amount: "",
//       validity: "",
//       imageUrl: "",
//     });
//     setShowForm(false);
//   };

//   const handleDeleteSub = (index) => {
//     setSubPackages(subPackages.filter((_, i) => i !== index));
//   };

//   return (
//     <Modal show={show} onHide={onClose} centered size="lg" dialogClassName="custom-modal-height">
//       <Modal.Header closeButton>
//         <Modal.Title  style={{ fontSize: "16px", fontWeight: "500"}}>Edit Package: {packageItem?.name}</Modal.Title>
//       </Modal.Header>

//       <Modal.Body>
//         <div className="d-flex justify-content-end mb-3">
//           <Button
//             variant="primary"
//             onClick={() => setShowForm(!showForm)}
//             style={{ fontSize: "14px", padding: "4px 10px" }}
//           >
//             {showForm ? "Cancel" : "+ Sub-Package"}
//           </Button>
//         </div>

//         {showForm && (
//           <div className="border p-3 rounded mb-4">
//             <Form.Group className="mb-2">
//               <Form.Label>Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleFormChange}
//               />
//             </Form.Group>

//             <Form.Group className="mb-2">
//               <Form.Label>Amount</Form.Label>
//               <Form.Control
//                 type="number"
//                 name="amount"
//                 value={formData.amount}
//                 onChange={handleFormChange}
//               />
//             </Form.Group>

//             <Form.Group className="mb-2">
//               <Form.Label>Validity (in days)</Form.Label>
//               <Form.Control
//                 type="number"
//                 name="validity"
//                 value={formData.validity}
//                 onChange={handleFormChange}
//               />
//             </Form.Group>

//             <Form.Group className="mb-2">
//               <Form.Label>Image</Form.Label>
//               <Form.Control
//                 type="file"
//                 name="image"
//                 onChange={handleImageUpload}
//               />
//               {formData.imageUrl && (
//                 <img
//                   src={formData.imageUrl}
//                   alt="preview"
//                   className="mt-2"
//                   style={{ width: 50, height: 50, borderRadius: 5 }}
//                 />
//               )}
//             </Form.Group>

//             <Button variant="success" onClick={handleAddSubPackage}>
//               Save Sub-Package
//             </Button>
//           </div>
//         )}

//         {/* Sub-Packages List */}
//         <div>
//           {subPackages.map((sp, index) => (
//             <div
//               key={index}
//               className="d-flex align-items-center justify-content-between border p-2 mb-2 rounded"
//             >
//               <div className="d-flex align-items-center">
//                 <img
//                   src={sp.imageUrl}
//                   alt="sub-img"
//                   style={{ width: 40, height: 40, borderRadius: 5, marginRight: 10 }}
//                 />
//                 <div>
//                   <p className="mb-0">
//                     <strong>Amount:</strong> {sp.amount}
//                   </p>
//                   <p className="mb-0 text-muted">Validity: {sp.validity} days</p>
//                 </div>
//               </div>
//               <div>
//                 <Button variant="outline-warning" size="sm" className="me-2">
//                   <RiEdit2Line />
//                 </Button>
//                 <Button
//                   variant="outline-danger"
//                   size="sm"
//                   onClick={() => handleDeleteSub(index)}
//                 >
//                   <RiDeleteBin5Line />
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default PackageEditModal;




// import React, { useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";
// import { RiDeleteBin5Line, RiEdit2Line } from "react-icons/ri";
// import { useDispatch } from "react-redux";
// import { uploadImage } from "../features/upload/uploadSlice";
// import { allPackage, createVipSubPackage, deleteVipSubPackage } from "../features/package/packageSlice";

// const PackageEditModal = ({ show, onClose, packageItem, onSubPackageAdded }) => {
//     const dispatch = useDispatch();

//     const [showForm, setShowForm] = useState(false);
//     const [formData, setFormData] = useState({
//         name: "",
//         amount: "",
//         validity: "",
//         imageUrl: "",
//     });

//     const handleFormChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleImageUpload = async (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             try {
//                 const uploadData = new FormData();
//                 uploadData.append("file", file);
//                 const res = await dispatch(uploadImage(uploadData)).unwrap();
//                 setFormData((prev) => ({ ...prev, imageUrl: res.url }));
//             } catch (err) {
//                 console.error("❌ Upload failed:", err);
//             }
//         }
//     };

//     // const handleAddSubPackage = async () => {
//     //     const payload = {
//     //         vipPackageId: packageItem?.id,
//     //         name: formData.name,
//     //         amount: Number(formData.amount),
//     //         validity: Number(formData.validity),
//     //         imageUrl: formData.imageUrl,
//     //         entryAnimation: null,
//     //     };

//     //     await dispatch(createVipSubPackage(payload));

//     //     // Optional: trigger refetch from parent if provided
//     //     if (typeof onSubPackageAdded === "function") {
//     //         onSubPackageAdded();
//     //     }

//     //     // Reset form
//     //     setFormData({
//     //         name: "",
//     //         amount: "",
//     //         validity: "",
//     //         imageUrl: "",
//     //     });


//     //     dispatch(allPackage({ type: "vvip" }));
//     //     setShowForm(false);
//     // };


//     const handleAddSubPackage = async () => {
//         const payload = {
//             vipPackageId: packageItem?.id,
//             name: formData.name,
//             amount: Number(formData.amount),
//             validity: Number(formData.validity),
//             imageUrl: formData.imageUrl,
//             entryAnimation: null,
//         };

//         await dispatch(createVipSubPackage(payload));

//         // Trigger parent refetch
//         if (typeof onSubPackageAdded === "function") {
//             await onSubPackageAdded(); // 🔁 refresh data
//         }

//         // Reset and close modal
//         setFormData({
//             name: "",
//             amount: "",
//             validity: "",
//             imageUrl: "",
//         });

//         setShowForm(false);
//         onClose(); // ✅ Close modal after success
//     };




//     return (
//         <Modal show={show} onHide={onClose} centered size="lg" dialogClassName="custom-modal-height">
//             <Modal.Header closeButton>
//                 <Modal.Title style={{ fontSize: "16px", fontWeight: "500" }}>
//                     Edit Package: {packageItem?.name}
//                 </Modal.Title>
//             </Modal.Header>

//             <Modal.Body>
//                 {/* Add Sub-Package Button */}
//                 <div className="d-flex justify-content-end mb-3">
//                     <Button
//                         variant="primary"
//                         onClick={() => setShowForm(!showForm)}
//                         style={{ fontSize: "14px", padding: "4px 10px" }}
//                     >
//                         {showForm ? "Cancel" : "+ Sub-Package"}
//                     </Button>
//                 </div>

//                 {/* Sub-Package Form */}
//                 {showForm && (
//                     <div className="border p-3 rounded mb-4">
//                         <Form.Group className="mb-2">
//                             <Form.Label>Name</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 name="name"
//                                 value={formData.name}
//                                 onChange={handleFormChange}
//                             />
//                         </Form.Group>

//                         <Form.Group className="mb-2">
//                             <Form.Label>Amount</Form.Label>
//                             <Form.Control
//                                 type="number"
//                                 name="amount"
//                                 value={formData.amount}
//                                 onChange={handleFormChange}
//                             />
//                         </Form.Group>

//                         <Form.Group className="mb-2">
//                             <Form.Label>Validity (in days)</Form.Label>
//                             <Form.Control
//                                 type="number"
//                                 name="validity"
//                                 value={formData.validity}
//                                 onChange={handleFormChange}
//                             />
//                         </Form.Group>

//                         <Form.Group className="mb-2">
//                             <Form.Label>Image</Form.Label>
//                             <Form.Control
//                                 type="file"
//                                 name="image"
//                                 onChange={handleImageUpload}
//                             />
//                             {formData.imageUrl && (
//                                 <img
//                                     src={formData.imageUrl}
//                                     alt="preview"
//                                     className="mt-2"
//                                     style={{ width: 50, height: 50, borderRadius: 5 }}
//                                 />
//                             )}
//                         </Form.Group>

//                         <Button variant="success" onClick={handleAddSubPackage}>
//                             Save Sub-Package
//                         </Button>
//                     </div>
//                 )}

//                 {/* Sub-Packages List */}
//                 <div>
//                     {packageItem?.VipSubPackages?.length > 0 ? (
//                         packageItem?.VipSubPackages.map((sp, index) => (
//                             <div
//                                 key={index}
//                                 className="d-flex align-items-center justify-content-between border p-2 mb-2 rounded"
//                             >
//                                 <div className="d-flex align-items-center">
//                                     <img
//                                         src={sp.imageUrl}
//                                         alt="sub-img"
//                                         style={{ width: 40, height: 40, borderRadius: 5, marginRight: 10 }}
//                                     />
//                                     <div>
//                                         <p className="mb-0">
//                                             <strong>Name:</strong> {sp.name}
//                                         </p>
//                                         <p className="mb-0">
//                                             <strong>Amount:</strong> {sp.amount}
//                                         </p>
//                                         <p className="mb-0 text-muted">Validity: {sp.validity} days</p>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <Button variant="outline-warning" size="sm" className="me-2">
//                                         <RiEdit2Line />
//                                     </Button>
//                                     <Button
//                                         variant="outline-danger"
//                                         size="sm"
//                                         onClick={async () => {
//                                             await dispatch(deleteVipSubPackage(sp.id));
//                                             dispatch(allPackage({ type: "vvip" })); // 🔁 Refresh updated list
//                                              onClose();
//                                         }}
//                                     >
//                                         <RiDeleteBin5Line />
//                                     </Button>
//                                 </div>
//                             </div>
//                         ))
//                     ) : (
//                         <p className="text-muted">No sub-packages found.</p>
//                     )}
//                 </div>
//             </Modal.Body>
//         </Modal>
//     );
// };

// export default PackageEditModal;





















import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { RiDeleteBin5Line, RiEdit2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  uploadImage,
} from "../features/upload/uploadSlice";
import {
  allPackage,
  createVipSubPackage,
  deleteVipSubPackage,
  updateVipSubPackage,
} from "../features/package/packageSlice";

const PackageEditModal = ({ show, onClose, packageItem, onSubPackageAdded }) => {
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editSubId, setEditSubId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    validity: "",
    imageUrl: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const uploadData = new FormData();
        uploadData.append("file", file);
        const res = await dispatch(uploadImage(uploadData)).unwrap();
        setFormData((prev) => ({ ...prev, imageUrl: res.url }));
      } catch (err) {
        console.error("❌ Upload failed:", err);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      amount: "",
      validity: "",
      imageUrl: "",
    });
    setEditMode(false);
    setEditSubId(null);
    setShowForm(false);
  };

  const handleSubmit = async () => {
    const payload = {
      name: formData.name,
      amount: Number(formData.amount),
      validity: Number(formData.validity),
      imageUrl: formData.imageUrl,
      entryAnimation: null,
    };

    if (editMode && editSubId) {
      await dispatch(updateVipSubPackage({ id: editSubId, data: payload }));
    } else {
      await dispatch(createVipSubPackage({
        ...payload,
        vipPackageId: packageItem?.id,
      }));
    }

    if (typeof onSubPackageAdded === "function") {
      await onSubPackageAdded();
    }

    resetForm();
    onClose();
  };

  const handleEditSubPackage = (sp) => {
    setEditMode(true);
    setEditSubId(sp.id);
    setFormData({
      name: sp.name,
      amount: sp.amount,
      validity: sp.validity,
      imageUrl: sp.imageUrl,
    });
    setShowForm(true);
  };

  return (
    <Modal show={show} onHide={onClose} centered size="lg" dialogClassName="custom-modal-height">
      <Modal.Header closeButton>
        <Modal.Title style={{ fontSize: "16px", fontWeight: "500" }}>
          Edit Package: {packageItem?.name}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* Add/Edit Sub-Package Button */}
        <div className="d-flex justify-content-end mb-3">
          <Button
            variant="primary"
            onClick={() => {
              resetForm();
              setShowForm(!showForm);
            }}
            style={{ fontSize: "14px", padding: "4px 10px" }}
          >
            {showForm ? "Cancel" : "+ Sub-Package"}
          </Button>
        </div>

        {/* Sub-Package Form */}
        {showForm && (
          <div className="border p-3 rounded mb-4">
            <Form.Group className="mb-2">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleFormChange}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Validity (in days)</Form.Label>
              <Form.Control
                type="number"
                name="validity"
                value={formData.validity}
                onChange={handleFormChange}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" name="image" onChange={handleImageUpload} />
              {formData.imageUrl && (
                <img
                  src={formData.imageUrl}
                  alt="preview"
                  className="mt-2"
                  style={{ width: 50, height: 50, borderRadius: 5 }}
                />
              )}
            </Form.Group>

            <Button variant="success" onClick={handleSubmit}>
              {editMode ? "Update Sub-Package" : "Save Sub-Package"}
            </Button>
          </div>
        )}

        {/* Sub-Packages List */}
        <div>
          {packageItem?.VipSubPackages?.length > 0 ? (
            packageItem?.VipSubPackages.map((sp, index) => (
              <div
                key={index}
                className="d-flex align-items-center justify-content-between border p-2 mb-2 rounded"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={sp.imageUrl}
                    alt="sub-img"
                    style={{ width: 40, height: 40, borderRadius: 5, marginRight: 10 }}
                  />
                  <div>
                    <p className="mb-0"><strong>Name:</strong> {sp.name}</p>
                    <p className="mb-0"><strong>Amount:</strong> {sp.amount}</p>
                    <p className="mb-0 text-muted">Validity: {sp.validity} days</p>
                  </div>
                </div>
                <div>
                  <Button
                    variant="outline-warning"
                    size="sm"
                    className="me-2"
                    onClick={() => handleEditSubPackage(sp)}
                  >
                    <RiEdit2Line />
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={async () => {
                      await dispatch(deleteVipSubPackage(sp.id));
                      dispatch(allPackage({ type: "vvip" }));
                      onClose();
                    }}
                  >
                    <RiDeleteBin5Line />
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted">No sub-packages found.</p>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PackageEditModal;
