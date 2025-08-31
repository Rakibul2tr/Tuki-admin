import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createNewDiamondPackage } from "../features/daimond/daimondSlice";
import { colors } from "../utils/colors";
import { useNavigate } from "react-router-dom";

const AddDaimond = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Validation Schema
  const validationSchema = Yup.object({
    bdt: Yup.number()
      .required("Amount is required")
      .min(0, "Amount must be greater than or equal to 0"),
    amount: Yup.number()
      .required("Daimond is required")
      .min(0, "Daimond must be greater than or equal to 0"),
  });

  // Initial Form Values
  const initialValues = {
    bdt: "", // Amount in currency (e.g., BDT)
    amount: "", // Number of daimonds
  };

  // Submit Handler
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await dispatch(createNewDiamondPackage(values)).unwrap(); // Dispatch and unwrap to handle errors
      console.log("Daimond created successfully:", response);
      resetForm(); // Reset form after successful submission
      navigate("/xnet/daimond"); // Redirect to the daimond page
    } catch (error) {
      console.error("Error creating daimond:", error);
    }
  };

  return (
    <div className="container" style={styles.container}>
      <div className="form-container" style={styles.formContainer}>
        <h5 className="text-center" style={styles.formHeader}>
          Add Diamond
        </h5>
        <div className="form-content" style={styles.formContent}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                {/* Amount in Currency */}
                <div className="form-group" style={styles.formGroup}>
                  <label
                    htmlFor="bdt"
                    className="form-label"
                    style={styles.formLabel}
                  >
                    Amount (BDT)
                  </label>
                  <Field
                    type="number"
                    name="bdt"
                    id="bdt"
                    className="form-input"
                    placeholder="Enter amount in BDT"
                    style={styles.formInput}
                  />
                  <ErrorMessage
                    name="bdt"
                    component="div"
                    className="error-message"
                    style={styles.errorMessage}
                  />
                </div>

                {/* Number of Diamonds */}
                <div className="form-group" style={styles.formGroup}>
                  <label
                    htmlFor="amount"
                    className="form-label"
                    style={styles.formLabel}
                  >
                    Diamonds
                  </label>
                  <Field
                    type="number"
                    name="amount"
                    id="amount"
                    className="form-input"
                    placeholder="Enter number of diamonds"
                    style={styles.formInput}
                  />
                  <ErrorMessage
                    name="amount"
                    component="div"
                    className="error-message"
                    style={styles.errorMessage}
                  />
                </div>

                {/* Submit Button */}
                <div
                  className="submit-btn-container"
                  style={styles.submitBtnContainer}
                >
                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={isSubmitting}
                    style={{
                      ...styles.submitBtn,
                      ...(isSubmitting ? styles.submitBtnDisabled : {}),
                    }}
                  >
                    {isSubmitting ? "Adding..." : "Add Diamonds"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};


const styles = {
  container: {
    // backgroundColor: "#f0f2f5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    position: "absolute",
    top: 80,
    left: 0,
    overflow: "hidden",
  },
  formContainer: {
    width: "100%",
    maxWidth: "500px",
    // backgroundColor: "#fff",
    padding: "40px 30px",
    borderRadius: "8px",
    // boxShadow: "0 2px 8px rgba(186, 17, 228, 0.44)",
    // textAlign: "center",
    maxHeight: "50vh", // fixed height
    overflowY: "auto", // scroll when needed
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
  formInputFocus: {
    borderColor: "#007bff",
    boxShadow: "0 0 5px rgba(0, 123, 255, 0.5)",
  },
  errorMessage: {
    color: "#f44336",
    fontSize: "12px",
    marginTop: "5px",
  },
  submitBtnContainer: {
    textAlign: "center",
  },
  submitBtn: {
    width: "100%",
    padding: "12px",
    backgroundColor: `${colors.buttonBg}`,
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: 600,
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  submitBtnHover: {
    backgroundColor: "#0056b3",
  },
  submitBtnDisabled: {
    backgroundColor: "#ddd",
    cursor: "not-allowed",
  },
};
export default AddDaimond;
