




// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { createPackage } from "../features/package/packageSlice";
// import { useDispatch } from "react-redux";
// import { uploadPackageImg } from "../features/upload/uploadSlice";
// import { useNavigate } from "react-router-dom";
// import { createGift } from "../features/gift/giftSlice";
// import { colors } from "../utils/colors";

// const AddGift = () => {
//      const navigate = useNavigate();
//     const dispatch = useDispatch();

//     // Validation Schema
//     const validationSchema = Yup.object({
//         amount: Yup.number()
//             .required("Amount is required")
//             .min(0, "Amount must be greater than or equal to 0"),
//         gif: Yup.string().required("Gif is required"), // Image should be a URL after upload
//         audio: Yup.string().required("Audio is required"), // Image should be a URL after upload
//     });

//     // Initial Form Values
//     const initialValues = {
//         amount: "",
//         gif: "",
//         audio: "",
//     };

//     // Submit Handler
//     const handleSubmit = async (values, { resetForm }) => {
//         console.log("Form submitted", values);
//         const response = await dispatch(createGift(values));
//         console.log(response);
//         resetForm();
//     };

//     return (
//       <div className="container" style={styles.container}>
//         <div className="formContainer" style={styles.formContainer}>
//           <h5 className="text-center" style={styles.formHeader}>
//             Add Gift
//           </h5>
//           <div className="mt-4" style={styles.formContent}>
//             <Formik
//               initialValues={initialValues}
//               validationSchema={validationSchema}
//               onSubmit={handleSubmit}
//             >
//               {({ setFieldValue, isValid, dirty }) => (
//                 <Form>
//                   <div className="mb-3" style={styles.formGroup}>
//                     <label
//                       htmlFor="amount"
//                       className="form-label"
//                       style={styles.formLabel}
//                     >
//                       Amount
//                     </label>
//                     <Field
//                       type="number"
//                       name="amount"
//                       id="amount"
//                       className="form-control"
//                       placeholder="Enter amount"
//                       style={styles.formInput}
//                     />
//                     <ErrorMessage
//                       name="amount"
//                       component="div"
//                       className="text-danger mt-1"
//                     />
//                   </div>

//                   <div className="mb-3">
//                     <label htmlFor="validity" className="form-label">
//                       Enter Gif url
//                     </label>
//                     <Field
//                       type="text"
//                       name="gif"
//                       id="gif"
//                       className="form-control"
//                       placeholder="Enter Gif url"
//                       style={styles.formInput}
//                     />
//                     <ErrorMessage
//                       name="gif"
//                       component="div"
//                       className="text-danger mt-1"
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="audio" className="form-label">
//                       Enter Audio url
//                     </label>
//                     <Field
//                       type="text"
//                       name="audio"
//                       id="audio"
//                       className="form-control"
//                       placeholder="Enter Audio url"
//                       style={styles.formInput}
//                     />
//                     <ErrorMessage
//                       name="audio"
//                       component="div"
//                       className="text-danger mt-1"
//                     />
//                   </div>
//                   <div
//                     className="text-center mt-4"
//                     style={styles.submitBtnContainer}
//                   >
//                     <button
//                       type="submit"
//                       className={`addBtn ${
//                         !isValid || !dirty ? "disabled-btn" : ""
//                       }`}
//                       disabled={!isValid || !dirty}
//                       style={{
//                         ...styles.submitBtn,

//                       }}
//                     >
//                       Add Gift
//                     </button>
//                   </div>
//                 </Form>
//               )}
//             </Formik>
//           </div>
//         </div>
//       </div>
//     );
// };

// const styles = {
//   container: {
//     backgroundColor: "#f0f2f5",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "20px",
//     position: "absolute",
//     top: 80,
//     left: 0,
//     overflow: "hidden",
//   },
//   formContainer: {
//     width: "100%",
//     maxWidth: "500px",
//     backgroundColor: "#fff",
//     padding: "40px 30px",
//     borderRadius: "8px",
//     boxShadow: "0 2px 8px rgba(186, 17, 228, 0.44)",
//     // textAlign: "center",
//     maxHeight: "60vh", // fixed height
//     overflowY: "auto", // scroll when needed
//     minHeight: "40vh",
//   },
//   formHeader: {
//     textAlign: "start",
//     fontSize: "20px",
//     color: "#333",
//     marginBottom: "20px",
//   },
//   formContent: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   formGroup: {
//     marginBottom: "20px",
//   },
//   formLabel: {
//     fontSize: "14px",
//     fontWeight: 600,
//     color: "#555",
//     marginBottom: "8px",
//   },
//   formInput: {
//     width: "100%",
//     padding: "10px",
//     fontSize: "16px",
//     border: `1px solid ${colors.borderColor}`,
//     borderRadius: "5px",
//     boxSizing: "border-box",
//     outline: "none",
//   },
//   formInputFocus: {
//     borderColor: "#007bff",
//     boxShadow: "0 0 5px rgba(0, 123, 255, 0.5)",
//   },
//   errorMessage: {
//     color: "#f44336",
//     fontSize: "12px",
//     marginTop: "5px",
//   },
//   submitBtnContainer: {
//     textAlign: "center",
//   },
//   submitBtn: {
//     width: "100%",
//     padding: "12px",
//     backgroundColor: `${colors.buttonBg}`,
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     fontSize: "16px",
//     fontWeight: 600,
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//   },
//   submitBtnHover: {
//     backgroundColor: "#0056b3",
//   },
//   submitBtnDisabled: {
//     backgroundColor: "#ddd",
//     cursor: "not-allowed",
//   },
// };

// export default AddGift;




// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { uploadPackageImg, uploadVideo } from "../features/upload/uploadSlice";
// import { createGift } from "../features/gift/giftSlice";
// import { colors } from "../utils/colors";

// const AddGift = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const validationSchema = Yup.object({
//     amount: Yup.number()
//       .required("Amount is required")
//       .min(0, "Amount must be >= 0"),
//     video: Yup.string().required("Video is required"),
//   });

//   const initialValues = {
//     amount: "",
//     video: "",
//   };

//   const handleSubmit = async (values, { resetForm }) => {
//     console.log("Submitting:", values);
//     const response = await dispatch(createGift(values));
//     console.log("Gift created:", response);
//     resetForm();
//   };

//   const handleFileChange = async (e, setFieldValue) => {
//     const file = e.currentTarget.files[0];
//     if (file) {
//       console.log("Selected video file:", file);
//       try {
//         const res = await dispatch(uploadVideo([file])); // uploadVideo expects array
//         console.log("Upload response:", res);

//         // Assuming response is: [{ url: '...' }]
//         const uploadedUrl = res?.payload?.[0]?.url;
//         if (uploadedUrl) {
//           setFieldValue("video", uploadedUrl);
//           console.log("Video URL set in form:", uploadedUrl);
//         } else {
//           console.warn("No URL returned from upload");
//         }
//       } catch (err) {
//         console.error("Upload error:", err);
//       }
//     }
//   };

//   return (
//     <div className="container" style={styles.container}>
//       <div className="formContainer" style={styles.formContainer}>
//         <h5 className="text-center" style={styles.formHeader}>
//           Add Gift
//         </h5>
//         <div className="mt-4" style={styles.formContent}>
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >
//             {({ setFieldValue, isValid, dirty }) => (
//               <Form>
//                 {/* Amount Input */}
//                 <div className="mb-3" style={styles.formGroup}>
//                   <label htmlFor="amount" className="form-label" style={styles.formLabel}>
//                     Amount
//                   </label>
//                   <Field
//                     type="number"
//                     name="amount"
//                     id="amount"
//                     className="form-control"
//                     placeholder="Enter amount"
//                     style={styles.formInput}
//                   />
//                   <ErrorMessage name="amount" component="div" className="text-danger mt-1" />
//                 </div>

//                 {/* Video Upload */}
//                 <div className="mb-3">
//                   <label htmlFor="video" className="form-label" style={styles.formLabel}>
//                     Upload Video
//                   </label>
//                   <input
//                     type="file"
//                     accept="video/*"
//                     onChange={(e) => handleFileChange(e, setFieldValue)}
//                     className="form-control"
//                     style={styles.formInput}
//                   />
//                   <ErrorMessage name="video" component="div" className="text-danger mt-1" />
//                 </div>

//                 {/* Hidden field to store uploaded URL */}
//                 <Field type="hidden" name="video" />

//                 {/* Submit Button */}
//                 <div className="text-center mt-4" style={styles.submitBtnContainer}>
//                   <button
//                     type="submit"
//                     className={`addBtn ${!isValid || !dirty ? "disabled-btn" : ""}`}
//                     disabled={!isValid || !dirty}
//                     style={styles.submitBtn}
//                   >
//                     Add Gift
//                   </button>
//                 </div>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     // backgroundColor: "#f0f2f5",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "20px",
//     position: "absolute",
//     top: 80,
//     left: 0,
//     overflow: "hidden",
//     width: "100%",
//   },
//   formContainer: {
//     width: "100%",
//     maxWidth: "500px",
//     backgroundColor: "#fff",
//     // padding: "40px 30px",
//     borderRadius: "8px",
//     // boxShadow: "0 2px 8px rgba(186, 17, 228, 0.44)",
//     maxHeight: "60vh",
//     overflowY: "auto",
//     minHeight: "40vh",
//   },
//   formHeader: {
//     textAlign: "start",
//     fontSize: "20px",
//     color: "#333",
//     marginBottom: "20px",
//   },
//   formContent: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   formGroup: {
//     marginBottom: "20px",
//   },
//   formLabel: {
//     fontSize: "14px",
//     fontWeight: 600,
//     color: "#555",
//     marginBottom: "8px",
//   },
//   formInput: {
//     width: "100%",
//     padding: "10px",
//     fontSize: "16px",
//     border: `1px solid ${colors.borderColor}`,
//     borderRadius: "5px",
//     boxSizing: "border-box",
//     outline: "none",
//   },
//   errorMessage: {
//     color: "#f44336",
//     fontSize: "12px",
//     marginTop: "5px",
//   },
//   submitBtnContainer: {
//     textAlign: "center",
//   },
//   submitBtn: {
//     width: "100%",
//     padding: "12px",
//     backgroundColor: `${colors.buttonBg}`,
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     fontSize: "16px",
//     fontWeight: 600,
//     cursor: "pointer",
//     transition: "background-color 0.3s",
//   },
// };

// export default AddGift;


















// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { uploadVideo } from "../features/upload/uploadSlice";
// import { createGift } from "../features/gift/giftSlice";
// import { colors } from "../utils/colors";

// const AddGift = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const validationSchema = Yup.object({
//     amount: Yup.number()
//       .required("Amount is required")
//       .min(0, "Amount must be >= 0"),
//     video: Yup.string().required("Video is required"),
//   });

//   const initialValues = {
//     amount: "",
//     video: "",
//   };

//   // const handleSubmit = async (values, { resetForm }) => {
//   //   console.log("Submitting:", values);
//   //   const response = await dispatch(createGift(values));
//   //   console.log("Gift created:", response);
//   //   resetForm();
//   // };

//   const handleSubmit = async (values, { resetForm }) => {
//     console.log("Submitting form values:", values);

//     const payload = {
//       amount: values.amount,
//       videoUrl: values.video, // Rename before sending to API
//     };

//     const response = await dispatch(createGift(payload));

//     console.log("Gift created:", response);

//     // Check if request succeeded
//     if (response?.type === 'gift/create/fulfilled'    ) {
//       resetForm();
//       navigate('/xnet/gift');
//     } else {
//       console.warn("Gift creation failed.");
//     }
//   };

//   const handleFileChange = async (e, setFieldValue) => {
//     const file = e.currentTarget.files[0];
//     if (file) {
//       console.log("Selected video file:", file);
//       try {
//         const res = await dispatch(uploadVideo([file]));
//         console.log("Upload response:", res);

//         const fileName = res?.payload?.fileName;
//         if (fileName) {
//           const fullUrl = `https://upload.nrtuki.xyz/files/${fileName}`;
//           setFieldValue("video", fullUrl);
//           console.log("Video URL set in form:", fullUrl);
//         } else {
//           console.warn("No fileName returned from upload");
//         }
//       } catch (err) {
//         console.error("Upload error:", err);
//       }
//     }
//   };

//   return (
//     <div className="container" style={styles.container}>
//       <div className="formContainer" style={styles.formContainer}>
//         <h5 className="text-center" style={styles.formHeader}>
//           Add Gift
//         </h5>
//         <div className="mt-4" style={styles.formContent}>
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >
//             {({ setFieldValue, isValid, dirty, values }) => {
//               const canSubmit = values.amount && values.video;

//               return (
//                 <Form>
//                   {/* Amount Input */}
//                   <div className="mb-3" style={styles.formGroup}>
//                     <label htmlFor="amount" className="form-label" style={styles.formLabel}>
//                       Amount
//                     </label>
//                     <Field
//                       type="number"
//                       name="amount"
//                       id="amount"
//                       className="form-control"
//                       placeholder="Enter amount"
//                       style={styles.formInput}
//                     />
//                     <ErrorMessage name="amount" component="div" className="text-danger mt-1" />
//                   </div>

//                   {/* Video Upload */}
//                   <div className="mb-3">
//                     <label htmlFor="video" className="form-label" style={styles.formLabel}>
//                       Upload Video
//                     </label>
//                     <input
//                       type="file"
//                       accept="video/*"
//                       onChange={(e) => handleFileChange(e, setFieldValue)}
//                       className="form-control"
//                       style={styles.formInput}
//                     />
//                     <ErrorMessage name="video" component="div" className="text-danger mt-1" />
//                   </div>

//                   {/* Hidden field to store uploaded URL */}
//                   <Field type="hidden" name="video" />

//                   {/* Submit Button */}
//                   <div className="text-center mt-4" style={styles.submitBtnContainer}>
//                     <button
//                       type="submit"
//                       className={`addBtn ${!canSubmit ? "disabled-btn" : ""}`}
//                       disabled={!canSubmit}
//                       style={{
//                         ...styles.submitBtn,
//                         backgroundColor: canSubmit ? colors.buttonBg : "#ccc",
//                         cursor: canSubmit ? "pointer" : "not-allowed",
//                       }}
//                     >
//                       Add Gift
//                     </button>
//                   </div>
//                 </Form>
//               );
//             }}
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: "20px",
//     position: "absolute",
//     top: 80,
//     left: 0,
//     overflow: "hidden",
//     width: "100%",
//   },
//   formContainer: {
//     width: "100%",
//     maxWidth: "500px",
//     backgroundColor: "#fff",
//     borderRadius: "8px",
//     maxHeight: "60vh",
//     overflowY: "auto",
//     minHeight: "40vh",
//   },
//   formHeader: {
//     textAlign: "start",
//     fontSize: "20px",
//     color: "#333",
//     marginBottom: "20px",
//   },
//   formContent: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   formGroup: {
//     marginBottom: "20px",
//   },
//   formLabel: {
//     fontSize: "14px",
//     fontWeight: 600,
//     color: "#555",
//     marginBottom: "8px",
//   },
//   formInput: {
//     width: "100%",
//     padding: "10px",
//     fontSize: "16px",
//     border: `1px solid ${colors.borderColor}`,
//     borderRadius: "5px",
//     boxSizing: "border-box",
//     outline: "none",
//   },
//   submitBtnContainer: {
//     textAlign: "center",
//   },
//   submitBtn: {
//     width: "100%",
//     padding: "12px",
//     color: "#fff",
//     border: "none",
//     borderRadius: "5px",
//     fontSize: "16px",
//     fontWeight: 600,
//     transition: "background-color 0.3s",
//   },
// };

// export default AddGift;



















import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { uploadVideo } from "../features/upload/uploadSlice"; // Assuming same API supports all files
import { createGift } from "../features/gift/giftSlice";
import { colors } from "../utils/colors";

const AddGift = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    amount: Yup.number()
      .required("Amount is required")
      .min(0, "Amount must be >= 0"),
    gif: Yup.string().required("GIF is required"),
    audio: Yup.string().required("Audio is required"),
  });

  const initialValues = {
    amount: "",
    gif: "",
    audio: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log("Submitting form values:", values);

    const payload = {
      amount: values.amount,
      gifUrl: values.gif,
      audioUrl: values.audio,
    };

    const response = await dispatch(createGift(payload));
    console.log("Gift created:", response);

    if (response?.type === 'gift/create/fulfilled') {
      resetForm();
      navigate('/xnet/gift');
    } else {
      console.warn("Gift creation failed.");
    }
  };

  const handleFileChange = async (e, setFieldValue, fieldName) => {
    const file = e.currentTarget.files[0];
    if (file) {
      console.log(`Selected ${fieldName} file:`, file);
      try {
        const res = await dispatch(uploadVideo([file]));
        const fileName = res?.payload?.fileName;
        if (fileName) {
          const fullUrl = `https://upload.nrtuki.xyz/files/${fileName}`;
          setFieldValue(fieldName, fullUrl);
          console.log(`${fieldName} URL set:`, fullUrl);
        } else {
          console.warn("No fileName returned from upload");
        }
      } catch (err) {
        console.error("Upload error:", err);
      }
    }
  };

  return (
    <div className="container" style={styles.container}>
      <div className="formContainer" style={styles.formContainer}>
        <h5 className="text-center" style={styles.formHeader}>Add Gift</h5>
        <div className="mt-4" style={styles.formContent}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values }) => {
              const canSubmit = values.amount && values.gif && values.audio;
              return (
                <Form>
                  {/* Amount */}
                  <div className="mb-3" style={styles.formGroup}>
                    <label htmlFor="amount" className="form-label" style={styles.formLabel}>Amount</label>
                    <Field
                      type="number"
                      name="amount"
                      id="amount"
                      className="form-control"
                      placeholder="Enter amount"
                      style={styles.formInput}
                    />
                    <ErrorMessage name="amount" component="div" className="text-danger mt-1" />
                  </div>

                  {/* GIF Upload */}
                  <div className="mb-3">
                    <label htmlFor="gif" className="form-label" style={styles.formLabel}>Upload GIF</label>
                    <input
                      type="file"
                      accept="image/gif"
                      onChange={(e) => handleFileChange(e, setFieldValue, "gif")}
                      className="form-control"
                      style={styles.formInput}
                    />
                    <ErrorMessage name="gif" component="div" className="text-danger mt-1" />
                  </div>
                  <Field type="hidden" name="gif" />

                  {/* Audio Upload */}
                  <div className="mb-3">
                    <label htmlFor="audio" className="form-label" style={styles.formLabel}>Upload Audio</label>
                    <input
                      type="file"
                      accept="audio/*"
                      onChange={(e) => handleFileChange(e, setFieldValue, "audio")}
                      className="form-control"
                      style={styles.formInput}
                    />
                    <ErrorMessage name="audio" component="div" className="text-danger mt-1" />
                  </div>
                  <Field type="hidden" name="audio" />

                  {/* Submit */}
                  <div className="text-center mt-4" style={styles.submitBtnContainer}>
                    <button
                      type="submit"
                      className={`addBtn ${!canSubmit ? "disabled-btn" : ""}`}
                      disabled={!canSubmit}
                      style={{
                        ...styles.submitBtn,
                        backgroundColor: canSubmit ? colors.buttonBg : "#ccc",
                        cursor: canSubmit ? "pointer" : "not-allowed",
                      }}
                    >
                      Add Gift
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    position: "absolute",
    top: 80,
    left: 0,
    overflow: "hidden",
    width: "100%",
  },
  formContainer: {
    width: "100%",
    maxWidth: "500px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    maxHeight: "60vh",
    overflowY: "auto",
    minHeight: "40vh",
  },
  formHeader: {
    textAlign: "start",
    fontSize: "20px",
    color: "#333",
    marginBottom: "20px",
  },
  formContent: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "20px",
  },
  formLabel: {
    fontSize: "14px",
    fontWeight: 600,
    color: "#555",
    marginBottom: "8px",
  },
  formInput: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: `1px solid ${colors.borderColor}`,
    borderRadius: "5px",
    boxSizing: "border-box",
    outline: "none",
  },
  submitBtnContainer: {
    textAlign: "center",
  },
  submitBtn: {
    width: "100%",
    padding: "12px",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: 600,
    transition: "background-color 0.3s",
  },
};

export default AddGift;
