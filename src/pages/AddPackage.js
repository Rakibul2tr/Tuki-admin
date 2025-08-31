// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { createPackage } from "../features/package/packageSlice";
// import { useDispatch } from "react-redux";
// import axios from "axios";
// import { uploadPackageImg } from "../features/upload/uploadSlice";

// const AddPackage = () => {
//     const dispatch = useDispatch();

//     // Validation Schema
//     const validationSchema = Yup.object({
//         name: Yup.string().required("Package name is required"),
//         amount: Yup.number()
//             .required("Amount is required")
//             .min(0, "Amount must be greater than or equal to 0"),
//         validity: Yup.number()
//             .required("Validity is required")
//             .min(1, "Validity must be at least 1 day"),
//             imgUrl: Yup.string().required("Image is required"), // Image should be a URL after upload
//     });

//     // Initial Form Values
//     const initialValues = {
//         name: "",
//         amount: "",
//         validity: "",
//         imgUrl: "",
//         type: "",
//     };

//     // Submit Handler
//     const handleSubmit = async (values, { resetForm }) => {
//         console.log("Form submitted", values);
//         const response = await dispatch(createPackage(values));
//         console.log(response);

//         resetForm();
//     };

//     return (
//         <div className="container">
//             <div className="margin">
//                 <h5 className="text-center">Add Package</h5>
//                 <div className="mt-4">
//                     <Formik
//                         initialValues={initialValues}
//                         validationSchema={validationSchema}
//                         onSubmit={handleSubmit}
//                     >
//                         {({ setFieldValue }) => (
//                             <Form>
//                                 <div className="mb-3">
//                                     <label htmlFor="name" className="form-label">
//                                         Name
//                                     </label>
//                                     <Field
//                                         type="text"
//                                         name="name"
//                                         id="name"
//                                         className="form-control"
//                                         placeholder="Enter Name"
//                                     />
//                                     <ErrorMessage
//                                         name="name"
//                                         component="div"
//                                         className="text-danger mt-1"
//                                     />
//                                 </div>
//                                 <div className="mb-3">
//                                     <label htmlFor="amount" className="form-label">
//                                         Amount
//                                     </label>
//                                     <Field
//                                         type="number"
//                                         name="amount"
//                                         id="amount"
//                                         className="form-control"
//                                         placeholder="Enter amount"
//                                     />
//                                     <ErrorMessage
//                                         name="amount"
//                                         component="div"
//                                         className="text-danger mt-1"
//                                     />
//                                 </div>

//                                 <div className="mb-3">
//                                     <label htmlFor="validity" className="form-label">
//                                         Validity (Days)
//                                     </label>
//                                     <Field
//                                         type="number"
//                                         name="validity"
//                                         id="validity"
//                                         className="form-control"
//                                         placeholder="Enter validity in days"
//                                     />
//                                     <ErrorMessage
//                                         name="validity"
//                                         component="div"
//                                         className="text-danger mt-1"
//                                     />
//                                 </div>

//                                 <div className="mb-3">
//                                     <label htmlFor="type" className="form-label">
//                                         Type
//                                     </label>
//                                     <Field
//                                         as="select"
//                                         name="type"
//                                         id="type"
//                                         className="form-control"
//                                     >
//                                         <option value="">Select Type</option>
//                                         <option value="VIP">VIP</option>
//                                         <option value="VVIP">VVIP</option>
//                                     </Field>
//                                     <ErrorMessage
//                                         name="type"
//                                         component="div"
//                                         className="text-danger mt-1"
//                                     />
//                                 </div>

//                                 <div className="mb-3">
//                                     <label htmlFor="image" className="form-label">
//                                         Upload Image
//                                     </label>
//                                     <input
//                                         type="file"
//                                         id="imgUrl"
//                                         className="form-control"
//                                         onChange={async (event) => {
//                                             const file = event.target.files[0];
//                                             if (file) {
//                                                 const imageUrl = await dispatch(uploadPackageImg([file])).unwrap(); // Wrap with array
//                                                 if (imageUrl) {
//                                                     console.log('from pafe',imageUrl[0]?.url);

//                                                     setFieldValue("imgUrl", imageUrl[0]?.url); // Assuming imageUrl contains the uploaded image URL
//                                                 }
//                                             }
//                                         }}
//                                     />
//                                     <ErrorMessage
//                                         name="imgUrl"
//                                         component="div"
//                                         className="text-danger mt-1"
//                                     />
//                                 </div>

//                                 <div className="text-center mt-5">
//                                     <button type="submit" className="addBtn">
//                                         Add Package
//                                     </button>
//                                 </div>
//                             </Form>
//                         )}
//                     </Formik>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AddPackage;








// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { createPackage } from "../features/package/packageSlice";
// import { useDispatch } from "react-redux";
// import { uploadPackageImg } from "../features/upload/uploadSlice";
// import { useNavigate } from "react-router-dom";
// import { colors } from "../utils/colors";

// const AddPackage = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Validation Schema
//   const validationSchema = Yup.object({
//     name: Yup.string().required("Package name is required"),
//     amount: Yup.number()
//       .required("Amount is required")
//       .min(0, "Amount must be greater than or equal to 0"),
//     validity: Yup.number()
//       .required("Validity is required")
//       .min(1, "Validity must be at least 1 day"),
//     imgUrl: Yup.string().required("Image is required"), // Image should be a URL after upload
//   });

//   // Initial Form Values
//   const initialValues = {
//     name: "",
//     amount: "",
//     validity: "",
//     imgUrl: "",
//     type: "",
//   };

//   // Submit Handler
//   const handleSubmit = async (values, { resetForm }) => {
//     console.log("Form submitted", values);
//     const response = await dispatch(createPackage(values));
//     console.log(response);
//     resetForm();
//   };

//   return (

//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h2 style={styles.heading}>Add New Package</h2>

//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//           enableReinitialize
//         >
//           {({ setFieldValue, values, isValid, dirty, isSubmitting }) => (
//             <Form style={styles.form}>
//               {/* Package Name */}
//               <div style={styles.formGroup}>
//                 <label style={styles.label} htmlFor="name">
//                   Package Name
//                 </label>
//                 <Field
//                   type="text"
//                   name="name"
//                   id="name"
//                   placeholder="Enter package name"
//                   style={styles.input}
//                 />
//                 <ErrorMessage
//                   name="name"
//                   component="div"
//                   style={styles.error}
//                 />
//               </div>

//               {/* Amount */}
//               <div style={styles.formGroup}>
//                 <label style={styles.label} htmlFor="amount">
//                   Amount (Price)
//                 </label>
//                 <Field
//                   type="number"
//                   name="amount"
//                   id="amount"
//                   placeholder="Enter amount (e.g., 500)"
//                   style={styles.input}
//                 />
//                 <ErrorMessage
//                   name="amount"
//                   component="div"
//                   style={styles.error}
//                 />
//               </div>

//               {/* Validity */}
//               <div style={styles.formGroup}>
//                 <label style={styles.label} htmlFor="validity">
//                   Validity (in Days)
//                 </label>
//                 <Field
//                   type="number"
//                   name="validity"
//                   id="validity"
//                   placeholder="Enter validity period (e.g., 30)"
//                   style={styles.input}
//                 />
//                 <ErrorMessage
//                   name="validity"
//                   component="div"
//                   style={styles.error}
//                 />
//               </div>

//               {/* Package Type */}
//               <div style={styles.formGroup}>
//                 <label style={styles.label} htmlFor="type">
//                   Package Type
//                 </label>
//                 <Field as="select" name="type" id="type" style={styles.select}>
//                   <option value="">Select</option>
//                   <option value="VIP">VIP</option>
//                   <option value="VVIP">VVIP</option>
//                 </Field>
//                 <ErrorMessage
//                   name="type"
//                   component="div"
//                   style={styles.error}
//                 />
//               </div>

//               {/* Image Upload */}
//               <div style={styles.formGroup}>
//                 <label style={styles.label} htmlFor="imgUrlInput">
//                   Upload Image
//                 </label>
//                 <input
//                   type="file"
//                   id="imgUrlInput"
//                   name="imgUrlInput"
//                   style={styles.inputFile}
//                   accept="image/*"
//                   onChange={(e) => {
//                     const file = e.target.files[0];
//                     if (file) {
//                       const reader = new FileReader();
//                       reader.onloadend = () => {
//                         setFieldValue("imgUrl", reader.result);
//                       };
//                       reader.readAsDataURL(file);
//                     }
//                   }}
//                 />
//                 <Field type="hidden" name="imgUrl" />
//                 <ErrorMessage
//                   name="imgUrl"
//                   component="div"
//                   style={styles.error}
//                 />

//                 {/* Preview */}
//                 {values.imgUrl && (
//                   <div style={styles.imagePreview}>
//                     <img
//                       src={values.imgUrl}
//                       alt="Preview"
//                       style={styles.imageThumb}
//                     />
//                   </div>
//                 )}
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 style={styles.button}
//                 disabled={!isValid || !dirty || isSubmitting}
//               >
//                 {isSubmitting ? "Adding..." : "Add Package"}
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };
// const styles = {
//   container: {
//     // minHeight: "60vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "0px",
//     position: "absolute",
//     top: 50,
//     left: 0,
//     overflow: "hidden",
//     // maxHeight: "80vh",
//   },
//   card: {
//     width: "100%",
//     maxWidth: "500px",
//     padding: "40px 30px",
//     borderRadius: "8px",
//     textAlign: "center",
//     maxHeight: "80vh", // fixed height
//     overflowY: "auto", // scroll when needed
//     minHeight: "60vh",
//   },
//   heading: {
//     fontSize: "24px",
//     marginBottom: "20px",
//     color: `${colors.textColor}`,
//   },
//   form: {
//     textAlign: "left",
//   },
//   formGroup: {
//     marginBottom: "15px",
//   },
//   label: {
//     display: "block",
//     marginBottom: "5px",
//     color: "#555",
//     fontWeight: "500",
//   },
//   input: {
//     width: "100%",
//     padding: "10px 15px",
//     border: `1px solid ${colors.borderColor}`,
//     borderRadius: "5px",
//     fontSize: "16px",
//   },
//   select: {
//     width: "100%",
//     padding: "10px 15px",
//     border: `1px solid ${colors.borderColor}`,
//     borderRadius: "5px",
//     fontSize: "16px",
//     backgroundColor: "#fff",
//   },
//   inputFile: {
//     width: "100%",
//     padding: "10px",
//     fontSize: "16px",
//   },
//   select: {
//     width: "100%",
//     padding: "12px",
//     fontSize: "16px",
//     borderRadius: "8px",
//     border: `1px solid ${colors.borderColor}`,
//     backgroundColor: "#fff",
//     appearance: "none", // remove default arrow
//     WebkitAppearance: "none", // for Safari
//     MozAppearance: "none", // for Firefox
//     backgroundImage: `url("data:image/svg+xml;charset=US-ASCII,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23999' viewBox='0 0 16 16'><path d='M4 6l4 4 4-4z'/></svg>")`,
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "right 10px center",
//     backgroundSize: "12px",
//   },
//   error: {
//     color: "red",
//     fontSize: "14px",
//     marginTop: "5px",
//   },
//   imagePreview: {
//     marginTop: "10px",
//     textAlign: "center",
//   },
//   imageThumb: {
//     width: "100px",
//     height: "100px",
//     objectFit: "cover",
//     borderRadius: "8px",
//     marginTop: "10px",
//   },
//   button: {
//     width: "100%",
//     padding: "12px",
//     backgroundColor: `${colors.buttonBg}`,
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     fontSize: "16px",
//     cursor: "pointer",
//     marginTop: "20px",
//   },
// };

// export default AddPackage;



































































// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useDispatch } from "react-redux";
// import { createPackage } from "../features/package/packageSlice";
// import { useNavigate } from "react-router-dom";
// import { colors } from "../utils/colors";
// import { uploadImage } from "../features/upload/uploadSlice";

// const AddPackage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const validationSchema = Yup.object({
//     name: Yup.string().required("Name is required"),
//     type: Yup.string().required("Type is required"),
//     imgUrl: Yup.string().required("Image is required"),
//   });

//   const initialValues = {
//     name: "",
//     type: "",
//     imgUrl: "",
//   };

//   const handleSubmit = async (values, { resetForm }) => {
//     console.log("Submitting:", values);
//     const res = await dispatch(createPackage(values));
//     console.log("Response:", res);
//     resetForm();
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h2 style={styles.heading}>Add Package</h2>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({ setFieldValue, values, isSubmitting, isValid, dirty }) => (
//             <Form style={styles.form}>
//               {/* Name */}
//               <div style={styles.formGroup}>
//                 <label style={styles.label} htmlFor="name">Name</label>
//                 <Field
//                   type="text"
//                   name="name"
//                   id="name"
//                   placeholder="Enter name"
//                   style={styles.input}
//                 />
//                 <ErrorMessage name="name" component="div" style={styles.error} />
//               </div>

//               {/* Type */}
//               <div style={styles.formGroup}>
//                 <label style={styles.label} htmlFor="type">Type</label>
//                 <Field as="select" name="type" id="type" style={styles.select}>
//                   <option value="">Select</option>
//                   <option value="vip">VIP</option>
//                   <option value="vvip">VVIP</option>
//                 </Field>
//                 <ErrorMessage name="type" component="div" style={styles.error} />
//               </div>

//               {/* Image Upload */}
//               <div style={styles.formGroup}>
//                 <label style={styles.label}>Upload Image</label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={async (e) => {
//                     const file = e.target.files[0];
//                     if (file) {
//                       try {
//                         const formData = new FormData();
//                         formData.append("file", file);

//                         const res = await dispatch(uploadImage(formData)).unwrap();
//                         console.log("📤 Upload response:", res);

//                         const fileName = res?.filename
//                         const fullUrl = `https://upload.projectlive.online/files/${fileName}`;
//                         setFieldValue("imgUrl", fullUrl);
//                       } catch (err) {
//                         console.error("❌ Upload failed:", err);
//                       }
//                     }
//                   }}
//                   style={styles.inputFile}
//                 />
//                 <Field type="hidden" name="imgUrl" />
//                 <ErrorMessage name="imgUrl" component="div" style={styles.error} />
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 style={styles.button}
//                 disabled={!isValid || !dirty || isSubmitting}
//               >
//                 {isSubmitting ? "Submitting..." : "Add Package"}
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     paddingTop: 60,
//   },
//   card: {
//     width: "100%",
//     maxWidth: "500px",
//     padding: "30px",
//     borderRadius: "8px",
//     backgroundColor: "#fff",
//   },
//   heading: {
//     textAlign: "center",
//     marginBottom: "20px",
//     fontSize: "22px",
//     color: colors.textColor,
//   },
//   form: {
//     textAlign: "left",
//   },
//   formGroup: {
//     marginBottom: "15px",
//   },
//   label: {
//     display: "block",
//     marginBottom: "6px",
//     fontWeight: 500,
//     color: "#333",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     border: `1px solid ${colors.borderColor}`,
//     borderRadius: "6px",
//   },
//   select: {
//     width: "100%",
//     padding: "10px",
//     border: `1px solid ${colors.borderColor}`,
//     borderRadius: "6px",
//     backgroundColor: "#fff",
//   },
//   inputFile: {
//     width: "100%",
//     fontSize: "14px",
//   },
//   error: {
//     color: "red",
//     fontSize: "13px",
//     marginTop: "4px",
//   },
//   imagePreview: {
//     marginTop: "10px",
//   },
//   imageThumb: {
//     width: "100px",
//     height: "100px",
//     objectFit: "cover",
//     borderRadius: "6px",
//   },
//   button: {
//     width: "100%",
//     padding: "12px",
//     backgroundColor: colors.buttonBg,
//     color: "#fff",
//     border: "none",
//     borderRadius: "6px",
//     fontSize: "16px",
//     cursor: "pointer",
//     marginTop: "15px",
//   },
// };

// export default AddPackage;



















































import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createPackage } from "../features/package/packageSlice";
import { uploadImage, uploadVideo } from "../features/upload/uploadSlice";
import { colors } from "../utils/colors";
import { useNavigate } from "react-router-dom";

const AddPackage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    type: Yup.string().required("Type is required"),
    imgUrl: Yup.string().required("Image is required"),
  });

  const initialValues = {
    name: "",
    type: "",
    imgUrl: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    const payload = {
      name: values.name,
      type: values.type,
      imageUrl: values.imgUrl,
    };

    const res = await dispatch(createPackage(payload));
    if (res?.type === 'package/create/fulfilled') {
      resetForm();
      if (res?.payload?.result?.type === "vip") {
        navigate('/xnet/vip-package');
      } else {
        navigate('/xnet/package');
      }

    }

  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Add Package</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values, isSubmitting, isValid, dirty }) => (
            <Form style={styles.form}>
              {/* Name */}
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="name">Name</label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter name"
                  style={styles.input}
                />
                <ErrorMessage name="name" component="div" style={styles.error} />
              </div>

              {/* Type */}
              <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="type">Type</label>
                <Field as="select" name="type" id="type" style={styles.select}>
                  <option value="">Select</option>
                  <option value="vip">VIP</option>
                  <option value="vvip">VVIP</option>
                </Field>
                <ErrorMessage name="type" component="div" style={styles.error} />
              </div>

              {/* Image Upload */}
              <div style={styles.formGroup}>
                <label style={styles.label}>Upload Image</label>
                <input
                  type="file"
                  accept="image/*"
                  // onChange={async (e) => {
                  //   const file = e.target.files[0];
                  //   if (file) {
                  //     try {
                  //       const formData = new FormData();
                  //       formData.append("file", file);

                  //       const res = await dispatch(uploadVideo(formData)).unwrap();
                  //       const fileName = res?.filename || res?.file || file.name;
                  //       const fullUrl = `https://upload.projectlive.online/files/${fileName}`;
                  //       setFieldValue("imgUrl", fullUrl);
                  //     } catch (err) {
                  //       console.error("❌ Upload failed:", err);
                  //     }
                  //   }
                  // }}

                  onChange={async (e) => {
                    const file = e.target.files[0];
                    if (file) {
                      try {
                        const formData = new FormData();
                        formData.append("file", file); // ✅ backend expects "file"

                        const res = await dispatch(uploadImage(formData)).unwrap(); // ✅ res = { url: ... }
                        setFieldValue("imgUrl", res.url); // ✅ direct access

                      } catch (err) {
                        console.error("❌ Upload failed:", err);
                      }
                    }
                  }}
                  style={styles.inputFile}
                />
                <Field type="hidden" name="imgUrl" />
                <ErrorMessage name="imgUrl" component="div" style={styles.error} />
                {values.imgUrl && (
                  <div style={styles.imagePreview}>
                    <img src={values.imgUrl} alt="Preview" style={styles.imageThumb} />
                  </div>
                )}
              </div>

              <button
                type="submit"
                style={styles.button}
                disabled={!isValid || !dirty || isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Add Package"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    paddingTop: 60,
  },
  card: {
    width: "100%",
    maxWidth: "500px",
    padding: "30px",
    borderRadius: "8px",
    backgroundColor: "#fff",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "22px",
    color: colors.textColor,
  },
  form: {
    textAlign: "left",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "6px",
    fontWeight: 500,
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: `1px solid ${colors.borderColor}`,
    borderRadius: "6px",
  },
  select: {
    width: "100%",
    padding: "10px",
    border: `1px solid ${colors.borderColor}`,
    borderRadius: "6px",
    backgroundColor: "#fff",
  },
  inputFile: {
    width: "100%",
    fontSize: "14px",
  },
  error: {
    color: "red",
    fontSize: "13px",
    marginTop: "4px",
  },
  imagePreview: {
    marginTop: "10px",
  },
  imageThumb: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "6px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: colors.buttonBg,
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "15px",
  },
};

export default AddPackage;