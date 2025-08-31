// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { loginAdmin } from "../features/users/userSlice";

// function Login() {
//      const dispatch = useDispatch();
//      const navigate = useNavigate();
//   // Step 1: Initialize state for email and password
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // Step 2: Handle form submission
//   const handleLogin = async() => {
//     // Log the input data
//     console.log("Email:", email);
//     console.log("Password:", password);
//     const userData = {email, password}
//     const response = await dispatch(loginAdmin(userData))
//     if (response?.payload?.user) {
//         console.log('response', response);
//         navigate('/xnet/home');
//     }
//   };

//   // Styles (unchanged)
//   const styles = {
//     container: {
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//       backgroundColor: "#fff",
//     },
//     loginBox: {
//       backgroundColor: "#fff",
//       padding: "30px",
//       borderRadius: "10px",
//       width: "400px",
//       textAlign: "center",
//     },
//     heading: {
//       fontSize: "24px",
//       marginBottom: "20px",
//       color: "#333",
//     },
//     input: {
//       width: "100%",
//       padding: "10px",
//       margin: "10px 0",
//       borderRadius: "5px",
//       border: "1px solid #ddd",
//       fontSize: "16px",
//     },
//     button: {
//       width: "100%",
//       padding: "10px",
//       backgroundColor: "#007bff",
//       color: "#fff",
//       border: "none",
//       borderRadius: "5px",
//       fontSize: "16px",
//       cursor: "pointer",
//       marginTop: "10px",
//     },
//     link: {
//       display: "block",
//       marginTop: "15px",
//       color: "#007bff",
//       textDecoration: "none",
//       fontSize: "14px",
//     },
//     linkHover: {
//       textDecoration: "underline",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.loginBox}>
//         <h2 style={styles.heading}>Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           style={styles.input}
//           value={email} // Bind the input to state
//           onChange={(e) => setEmail(e.target.value)} // Update state on change
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           style={styles.input}
//           value={password} // Bind the input to state
//           onChange={(e) => setPassword(e.target.value)} // Update state on change
//         />
//         <button style={styles.button} onClick={handleLogin}>Login</button>
//         <Link to="/forgot-password" style={styles.link}>
//           Forgot Password?
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import { colors } from "../utils/colors";

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      setIsAuthenticated(true);
      navigate("/xnet/home");
    } else {
      alert("Please enter Email and Password");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        {/* Logo */}
        <img src={logo} alt="logo" style={styles.logo} />

        {/* Heading */}
        <h2 style={styles.heading}>Log In</h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email Address"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Login Button */}
        <button style={styles.button} onClick={handleLogin}>
          Log In
        </button>

        {/* Forgot Password Link */}
        <Link to="/forgot-password" style={styles.link}>
          Lost your password?
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f0f2f5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginBox: {
    width: "350px",
    backgroundColor: "#fff",
    padding: "40px 30px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(186, 17, 228, 0.44)",
    textAlign: "center",
    // border: "1px solid #ff00ff",
  },
  logo: {
    width: "80px",
    marginBottom: "20px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
    color: `${colors.textColor}`
  },
  input: {
    width: "100%",
    padding: "10px 15px",
    marginBottom: "15px",
    border: `1px solid ${colors.borderColor}`,
    borderRadius: "5px",
    fontSize: "16px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: `${colors.buttonBg}`,
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "15px",
  },
  link: {
    display: "block",
    marginTop: "10px",
     color: `${colors.textColor}`,
    fontSize: "14px",
    textDecoration: "none",
  },
};

export default Login;

