// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useLocation } from "react-router-dom";
// import MobileHeader from '../components/MobileHeader';
// import { PulseLoader } from 'react-spinners';
// import * as yup from "yup";
// import { useFormik } from "formik";
// import { allNumber, createNumber, deleteNumber } from "../features/number/numberSlice";
// import { RiDeleteBin5Line } from "react-icons/ri";
// import moment from 'moment';
// import { getPercentage, getReceive, getSend } from "../features/users/userSlice";
// import { getDiamondMetrics } from "../features/daimond/daimondSlice";
// import { useSocket } from "../context/SocketContext";
// let numberSchema = yup.object().shape({
//   number: yup.number().required("Name is Required"),
// });

// const Home = () => {

//   const [loading, setLoading] = useState(false);
//   const metricsState = useSelector((state) => state?.diamond?.metrics || []);
//   // console.log(metricsState);

//   const { socket, connected, connectSocket } = useSocket();




//   const today = new Date().toISOString().split('T')[0];


//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   let location = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {

//     dispatch(getDiamondMetrics());

//   }, [dispatch]);




//   const handleDelete = async (id) => {
//     const response = await dispatch(deleteNumber(id));
//     if (response) {
//       dispatch(allNumber());
//     }
//   };
//   const handleReset = async () => {
//     try {
//       const response = await fetch("https://api.livetreee.xyz/api/v5/total/delete/AllRecordsddddddd", {
//         method: "DELETE",
//       });

//       if (response.ok) {
//         console.log("All records deleted successfully");
//         dispatch(getDiamondMetrics());

//       } else {
//         console.error("Failed to delete records");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   const formattedDate = (dateString) => {
//     return moment(dateString).format('M/D-h:mmA');
//   };

//   return (
//     <div>
//       {loading ? (
//         <div className='spiner'>
//           <PulseLoader color="#31baff" />
//         </div>
//       ) : (
//         <div>

//           <div className='container'>
//             <div className="margin">
//               <div>
//                 <button onClick={handleReset} style={{ background: 'red', color: '#fff', borderRadius: '6px', border: 'none', marginBottom: '20px', paddingRight: '10px', paddingLeft: '10px' }}>Reset All</button>
//               </div>
//               <div className="dashGrid">
//                 <div style={{ background: '#8A2BE2', height: '100px', borderRadius: '10px', padding: '10px' }}>
//                   <div className="d-flex justify-content-between  align-items-center">
//                     <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>Total Percentage:</p>
//                     <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>Today</p>
//                   </div>
//                   <div className="mt-3">
//                     <p style={{ fontSize: '16px', fontWeight: '600', color: '#ffff' }}>{metricsState?.totalBonusToday}</p>
//                   </div>
//                 </div>
//                 <div style={{ background: '#FDC74E', height: '100px', borderRadius: '10px', padding: '10px' }}>
//                   <div className="d-flex justify-content-between  align-items-center">
//                     <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>Total Percentage:</p>
//                     <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>All Time</p>
//                   </div>
//                   <div className="mt-3">
//                     <p style={{ fontSize: '16px', fontWeight: '600', color: '#ffff' }}>{metricsState?.totalBonus}</p>
//                   </div>
//                 </div>
//                 <div style={{ background: '#98CC5F', height: '100px', borderRadius: '10px', padding: '10px' }}>
//                   <div className="d-flex justify-content-between  align-items-center">
//                     <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>Total Send:</p>
//                     <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>Today</p>
//                   </div>
//                   <div className="mt-3">
//                     <p style={{ fontSize: '16px', fontWeight: '600', color: '#ffff' }}>{metricsState?.totalSentToday}</p>
//                   </div>
//                 </div>
//                 <div style={{ background: '#5495E5', height: '100px', borderRadius: '10px', padding: '10px' }}>
//                   <div className="d-flex justify-content-between  align-items-center">
//                     <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>Total Send:</p>
//                     <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>All Time</p>
//                   </div>
//                   <div className="mt-3">
//                     <p style={{ fontSize: '16px', fontWeight: '600', color: '#ffff' }}>{metricsState?.totalSent}</p>
//                   </div>
//                 </div>
//                 <div style={{ background: '#E75061', height: '100px', borderRadius: '10px', padding: '10px' }}>
//                   <div className="d-flex justify-content-between  align-items-center">
//                     <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>Total Receive:</p>
//                     <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>Today</p>
//                   </div>
//                   <div className="mt-3">
//                     <p style={{ fontSize: '16px', fontWeight: '600', color: '#ffff' }}>{metricsState?.totalReceivedToday}</p>
//                   </div>
//                 </div>


//                 <div style={{ background: '#C2185B', height: '100px', borderRadius: '10px', padding: '10px' }}>
//                   <div className="d-flex justify-content-between  align-items-center">
//                     <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>Total Receive:</p>
//                     <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>All Time</p>
//                   </div>
//                   <div className="mt-3">
//                     <p style={{ fontSize: '16px', fontWeight: '600', color: '#ffff' }}>{metricsState?.totalReceived}</p>
//                   </div>
//                 </div>
//               </div>

//             </div>


//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;




























import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import MobileHeader from '../components/MobileHeader';
import { PulseLoader } from 'react-spinners';
import * as yup from "yup";
import { useFormik } from "formik";
import { allNumber, createNumber, deleteNumber } from "../features/number/numberSlice";
import { RiDeleteBin5Line } from "react-icons/ri";
import moment from 'moment';
import { getPercentage, getReceive, getSend } from "../features/users/userSlice";
import { getDiamondMetrics } from "../features/daimond/daimondSlice";
import { useSocket } from "../context/SocketContext";
import { Modal, Button } from 'react-bootstrap';

let numberSchema = yup.object().shape({
  number: yup.number().required("Name is Required"),
});

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false); // 🟢 Confirmation modal
  const metricsState = useSelector((state) => state?.diamond?.metrics || []);
  const { socket, connected, connectSocket } = useSocket();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getDiamondMetrics());
  }, [dispatch]);

  const handleDelete = async (id) => {
    const response = await dispatch(deleteNumber(id));
    if (response) {
      dispatch(allNumber());
    }
  };

  const confirmReset = async () => {
    try {
      const response = await fetch("https://api.nrtuki.xyz/diamond/metrics/reset", {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("✅ All records deleted successfully");
        dispatch(getDiamondMetrics());
      } else {
        console.error("❌ Failed to delete records");
      }
    } catch (error) {
      console.error("❌ Error:", error);
    } finally {
      setShowConfirm(false); // 🔴 Close modal
    }
  };

  const formattedDate = (dateString) => {
    return moment(dateString).format('M/D-h:mmA');
  };

  return (
    <>
      {loading ? (
        <div className='spiner'>
          <PulseLoader color="#31baff" />
        </div>
      ) : (
        <div className="container">
          <div className="margin">
            <div>
              <button
                onClick={() => setShowConfirm(true)}
                style={{
                  background: 'red',
                  color: '#fff',
                  borderRadius: '6px',
                  border: 'none',
                  marginBottom: '20px',
                  paddingRight: '10px',
                  paddingLeft: '10px'
                }}
              >
                Reset All
              </button>
            </div>

            <div className="dashGrid">
              <div style={{ background: '#8A2BE2', height: '100px', borderRadius: '10px', padding: '10px' }}>
                <div className="d-flex justify-content-between  align-items-center">
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>Total Percentage:</p>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>Today</p>
                </div>
                <div className="mt-3">
                  <p style={{ fontSize: '16px', fontWeight: '600', color: '#ffff' }}>{metricsState?.totalBonusToday}</p>
                </div>
              </div>

              <div style={{ background: '#FDC74E', height: '100px', borderRadius: '10px', padding: '10px' }}>
                <div className="d-flex justify-content-between  align-items-center">
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>Total Percentage:</p>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>All Time</p>
                </div>
                <div className="mt-3">
                  <p style={{ fontSize: '16px', fontWeight: '600', color: '#ffff' }}>{metricsState?.totalBonus}</p>
                </div>
              </div>

              <div style={{ background: '#98CC5F', height: '100px', borderRadius: '10px', padding: '10px' }}>
                <div className="d-flex justify-content-between  align-items-center">
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>Total Send:</p>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>Today</p>
                </div>
                <div className="mt-3">
                  <p style={{ fontSize: '16px', fontWeight: '600', color: '#ffff' }}>{metricsState?.totalSentToday}</p>
                </div>
              </div>

              <div style={{ background: '#5495E5', height: '100px', borderRadius: '10px', padding: '10px' }}>
                <div className="d-flex justify-content-between  align-items-center">
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>Total Send:</p>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>All Time</p>
                </div>
                <div className="mt-3">
                  <p style={{ fontSize: '16px', fontWeight: '600', color: '#ffff' }}>{metricsState?.totalSent}</p>
                </div>
              </div>

              <div style={{ background: '#E75061', height: '100px', borderRadius: '10px', padding: '10px' }}>
                <div className="d-flex justify-content-between  align-items-center">
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>Total Receive:</p>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>Today</p>
                </div>
                <div className="mt-3">
                  <p style={{ fontSize: '16px', fontWeight: '600', color: '#ffff' }}>{metricsState?.totalReceivedToday}</p>
                </div>
              </div>

              <div style={{ background: '#C2185B', height: '100px', borderRadius: '10px', padding: '10px' }}>
                <div className="d-flex justify-content-between  align-items-center">
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>Total Receive:</p>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#ffff' }}>All Time</p>
                </div>
                <div className="mt-3">
                  <p style={{ fontSize: '16px', fontWeight: '600', color: '#ffff' }}>{metricsState?.totalReceived}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🟡 Confirmation Modal */}
      <Modal show={showConfirm} onHide={() => setShowConfirm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Reset</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete all records?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirm(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmReset}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;










