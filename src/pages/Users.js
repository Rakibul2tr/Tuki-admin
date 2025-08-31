

import React, { useState, useEffect, use } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import {
  addDiamondToUser,
  addReceive,
  addSend,
  blockADevice,
  blockUserDevice,
  deleteDaimond,
  deleteUser,
  deleteUserPurchase,
  fetchBlockedDevice,
  fetchUserByRegNo,
  getAllUsers,
  removeDiamondToUser,
  unblockADevice,
  updateRegNumberToUser,
  updateUser,
  updateUserProfile,
  userBlock,
  userLock,
} from "../features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { useFormik } from "formik";
import * as yup from "yup";
import { allPackage } from "../features/package/packageSlice";
import { uploadPackageImg, uploadVideo } from "../features/upload/uploadSlice";
import { MdOutlineBlock } from "react-icons/md";
import {
  FaLock,
  FaLockOpen,
  FaUserClock,
  FaUserLock,
  FaRegGem,
} from "react-icons/fa";
import {
  MdMobileFriendly,
  MdOutlineMobileOff,
  MdPhonelinkLock,
} from "react-icons/md";
import { allAnimation } from "../features/animation/animationSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let numberSchema = yup.object().shape({
  daimond: yup.number(),
});

const Users = () => {



  const [users, setUsers] = useState([]); // Store the list of users
  const [searchTerm, setSearchTerm] = useState(""); // Search term for filtering
  const [currentPage, setCurrentPage] = useState(1); // Store the current page
  const userSate = useSelector((state) => state?.auth.users || []);
  const blockedDevice = useSelector((state) => state?.auth?.BlockedDevices || []);
  console.log("userSate", blockedDevice);
  const [diamondType, setDiamondType] = useState("add"); // 'add' or 'remove'
  const [diamondAmount, setDiamondAmount] = useState(""); // numeric input
  const packageState = useSelector((state) => state?.package?.packages || []);
  const animationState = useSelector(
    (state) => state?.animation?.animation || []
  );
  const userByRegNo = useSelector((state) => state.auth.userByRegNo);
  const usersPerPage = 30; // Users per page
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [selectedUser, setSelectedUser] = useState(null);

  const [showPopup, setShowPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showDevicePopup, setShowDevicePopup] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false);
  const [idForDelete, setIdForDelete] = useState(null);
  const [idForLock, setIdForLock] = useState(null);
  const [idForDeviceLock, setIdForDeviceLock] = useState(null);
  const [idUserBlock, setIdUserBlock] = useState(null);
  const [forDaimond, setForDainomd] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [regNumber, setRegNumber] = useState('');
  const hasNextPage = userSate.length === usersPerPage;
  const [userByReg, setUserByReg] = useState(null);

  console.log("users", idForDeviceLock);

  // const { users, isLoading, totalCount } = useSelector((state) => state.auth);

  console.log(forDaimond);

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(fetchBlockedDevice());
      const trimmed = searchTerm.trim();
      if (trimmed === "") {
        // 👈 No search term — fetch full user list
        dispatch(getAllUsers({
          page: currentPage,
          limit: usersPerPage,
        }));
        setUserByReg(null);

      } else if (!isNaN(trimmed)) {
        // 👈 Numeric input — fetch by regNo
        dispatch(fetchUserByRegNo(trimmed));
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [dispatch, searchTerm, currentPage]);


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };


  const paginationButtonStyle = {
    margin: "0 5px",
    padding: "5px 10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: '20px'
  };


  // const filteredUsers = userSate?.filter((user) => user?.regNumber?.toString().includes(searchTerm.trim())).sort((a, b) => a.regNumber - b.regNumber);

  // const indexOfLastUser = currentPage * usersPerPage;
  // const indexOfFirstUser = indexOfLastUser - usersPerPage;
  // const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  // const currentUsers = userSate;


  useEffect(() => {
    setUserByReg(userByRegNo);
  }, [userByRegNo]);


  const currentUsers = userByReg ? [userByReg] : userSate;
  console.log(currentUsers);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle update
  const handleUpdate = (user) => {
    setSelectedUser(user); // Set the selected user for editing
    setIsModalOpen(true); // Open the modal
  };
  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setForDainomd(false);
    setSelectedUser(null); // Reset the selected user
  };



  const handleDelete = (user) => {
    setIdForDelete(user?.id); // keep this as-is
    setShowDeletePopup(true);
  };


  const handleDelOk = async () => {
    if (!idForDelete) return;

    const response = await dispatch(deleteUser(idForDelete));
    if (response.meta?.requestStatus === "fulfilled") {
      dispatch(getAllUsers({
        page: currentPage,
        limit: usersPerPage,
        regNumber: searchTerm.trim() || undefined,
      }));
    }
    setShowDeletePopup(false);
  };



  // const handleBlock = (userId) => {
  //   setIdForLock(userId);
  //   setShowPopup(true);
  // };
  const handleDeviceBlock = (params) => {
    console.log("params", params);

    setIdForDeviceLock({ ...params, action: 'block' });
    console.log("idForDeviceLock", idForDeviceLock);

    setShowDevicePopup(true);
  };
  const handleDeviceUnBlock = (params) => {
    console.log("params", params);

    setIdForDeviceLock({ ...params, action: 'unblock' });

    setShowDevicePopup(true);
  };







  const handleUserBlock = (params) => {
    setIdUserBlock(params);
    console.log(params);

    setShowUserPopup(true);
  };

  const handleCancel = () => {
    setShowDeletePopup(false);
    setShowPopup(false);
    setShowDevicePopup(false);
    setShowUserPopup(false);
  };

  const handleOk = async () => {
    const response = await dispatch(userLock({ id: idForLock?._id }));
    if (response) {
      dispatch(getAllUsers());
    }
    setShowPopup(false);
  };
  const handleDeviceBlockOk = async () => {
    const deviceId = idForDeviceLock?.deviceId;

    try {

      if (idForDeviceLock?.action === 'unblock') {
        const res = await dispatch(unblockADevice(deviceId)).unwrap();

      } else {
        const res = await dispatch(blockADevice(deviceId)).unwrap();
      }


      dispatch(getAllUsers({
        page: currentPage,
        limit: usersPerPage,
        regNumber: searchTerm.trim() || undefined,
      }));

      dispatch(fetchBlockedDevice());
    } catch (err) {
      console.error('❌ Block failed', err);
    }


    setShowDevicePopup(false);
  };
  const handleUserBlockOk = async () => {
    const response = await dispatch(userBlock({ id: idUserBlock?._id }));
    if (response) {
      dispatch(getAllUsers());
    }
    setShowUserPopup(false);
  };


  const goNExt = () => {
    setCurrentPage(currentPage + 1)
    console.log(currentPage)
  }





  const handleUpdateDai = (user) => {
    setSelectedUser(user);
    setDiamondAmount("");
    setDiamondType("add");
    setForDainomd(true);
    setIsModalOpen(true);
  };

  const handleDiamondToggle = (user) => {
    const updatedValue = !user.isDiamondBlocked;
    const payload = {
      isDiamondBlocked: updatedValue
    };

    dispatch(updateUser({ id: user.id, data: payload }))
      .unwrap()
      .then((res) => {
        console.log("✅ isDiamondBlocked toggled", res);
        dispatch(getAllUsers({
          page: currentPage,
          limit: usersPerPage,
          regNumber: searchTerm.trim() || undefined,
        }));
      })
      .catch((err) => {
        console.error("❌ Failed to toggle isDiamondBlocked", err);
      });
  };


  const handleAccountBlock = (user) => {
    const updatedValue = !user.isAccountBlocked;
    const payload = {
      isAccountBlocked: updatedValue
    };

    dispatch(updateUser({ id: user.id, data: payload }))
      .unwrap()
      .then((res) => {
        console.log("✅ isDiamondBlocked toggled", res);
        dispatch(getAllUsers({
          page: currentPage,
          limit: usersPerPage,
          regNumber: searchTerm.trim() || undefined,
        }));
      })
      .catch((err) => {
        console.error("❌ Failed to toggle isDiamondBlocked", err);
      });
  };


  const handleUpdateId = (user) => {
    setSelectedUser(user);
    setRegNumber(user?.regNumber || '');
    setShowModal(true);
  };

  const handleSave = async () => {
    try {
      const response = await dispatch(updateRegNumberToUser({
        userId: selectedUser.id,
        newRegNumber: Number(regNumber),
      })).unwrap();

      dispatch(getAllUsers({
        page: currentPage,
        limit: usersPerPage,
        regNumber: searchTerm.trim() || undefined,
      }));
      setShowModal(false);
    } catch (err) {
      toast.error("❌ Failed to update reg number");
      console.error(err);
    }
  };




  const handleBlock = async (deviceId) => {

  };

  const handleUnblock = async (deviceId) => {
    try {
      const res = await dispatch(unblockADevice(deviceId)).unwrap();
      console.log('✅ Device unblocked', res);
    } catch (err) {
      console.error('❌ Unblock failed', err);
    }
  };


  const handleRemovePurchase = (userId, name) => {
    dispatch(deleteUserPurchase({ userId, name }))
      .unwrap()
      .then((res) => {
        console.log("✅ Removed:", res);
        dispatch(getAllUsers({
          page: currentPage,
          limit: usersPerPage,
          regNumber: searchTerm.trim() || undefined,
        }));
      })
      .catch((err) => {
        console.error("❌ Error removing purchase:", err);
      });
  };





  return (
    <div>
      <div className="margin">
        <div className="container">
          <h1>User List</h1>

          {/* Search Bar */}
          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Search by ID"
              value={searchTerm}
              onChange={handleSearchChange}
              style={{
                padding: "8px",
                width: "100%",
                borderRadius: "5px",
                border: "1px solid #ddd",
              }}
            />
          </div>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                minWidth: "1200px",
              }}
            >
              <thead>
                <tr>
                  <th style={thStyle}>ID</th>
                  <th style={thStyle}>Image</th>
                  <th style={thStyle}>User Name</th>
                  <th style={thStyle}>Diamond</th>
                  <th style={thStyle}>Account Type</th>
                  <th style={thStyle}>Package</th>
                  <th style={thStyle}>User Type</th>
                  <th style={thStyle}>Purchased Package</th>
                  <th style={thStyle}>Entry Animation</th>
                  <th style={thStyle}>Diamond Lock</th>
                  <th style={thStyle}>User Block</th>
                  <th style={thStyle}>Device Block</th>
                  <th style={thStyle}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentUsers?.map((user, index) => (
                  <tr key={index}>
                    <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                      {user?.regNumber}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                      <img
                        src={user?.profilePic}
                        alt={"logo"}
                        style={{ width: 20, height: 20, borderRadius: 10 }}
                      />
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {user?.fullname}
                    </td>
                    <td
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      💎 {user?.diamond}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {user.accountType}
                    </td>
                    <td
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {user.packageType || "No package"}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      {user.role}
                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        {user?.ActivePackage?.name || "N/A"}

                        {
                          user?.ActivePackage?.name && (
                            <div style={{ backgroundColor: "red", padding: "3px 10px", borderRadius: "5px", cursor: "pointer" }} onClick={() => handleRemovePurchase(user.id, 'vip_package')}>
                              <p style={{ fontSize: '12px', color: "#fff" }}>Remove</p>
                            </div>
                          )
                        }


                      </div>

                    </td>
                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        {user?.ActiveAnimation?.name || "N/A"}

                        {
                          user?.ActiveAnimation?.name && (
                            <div style={{ backgroundColor: "red", padding: "3px 10px", borderRadius: "5px", cursor: "pointer" }} onClick={() => handleRemovePurchase(user.id, 'animation')}>
                              <p style={{ fontSize: '12px', color: "#fff" }}>Remove</p>
                            </div>
                          )
                        }


                      </div>

                    </td>
                    <td
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        color: user.isLocked === true ? "red" : "green",
                      }}
                    >
                      {user.isLocked === true ? "Locked" : "N/A"}
                    </td>
                    <td
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        color: user.isBlockedByAdmin === true ? "red" : "green",
                      }}
                    >
                      {user.isBlockedByAdmin === true ? "Blocked" : "N/A"}
                    </td>
                    <td
                      style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        color: user.deviceBlocked === true ? "red" : "green",
                      }}
                    >
                      {user.deviceBlocked === true ? "Blocked" : "N/A"}
                    </td>
                    <td
                      style={{
                        border: "1px solid #ddd",
                        padding: "10px",
                        display: "flex",
                      }}
                    >
                      <button
                        onClick={() => handleUpdateDai(user)}
                        style={{
                          marginRight: "10px",
                          backgroundColor: "#05a5e9",
                          border: "none",
                          borderRadius: "5px",
                        }}
                      >
                        <FaRegGem
                          className="pb-1"
                          size={15}
                          style={{ color: "#fff" }}
                        />
                      </button>


                      <button
                        onClick={() => handleUpdateId(user)}
                        style={{
                          marginRight: "1px",
                          backgroundColor: "#05d5e4e2",
                          border: "none",
                          borderRadius: "5px",
                        }}
                      >
                        <FaEdit
                          className="pb-1"
                          size={15}
                          style={{ color: "#fff" }}
                        />
                      </button>


                      {user?.isDiamondBlocked === true ? (
                        <button
                          onClick={() => handleDiamondToggle(user)}
                          style={{
                            backgroundColor: "rgb(255, 126, 13)",
                            border: "none",
                            borderRadius: "5px",
                            marginLeft: "10px",
                          }}
                        >
                          <FaLock className="pb-1" size={15} style={{ color: "#fff" }} />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleDiamondToggle(user)}
                          style={{
                            backgroundColor: "rgb(255, 126, 13)",
                            border: "none",
                            borderRadius: "5px",
                            marginLeft: "10px",
                          }}
                        >
                          <FaLockOpen className="pb-1" size={15} style={{ color: "#fff" }} />
                        </button>
                      )}


                      {user?.isAccountBlocked === true ? (
                        <button
                          onClick={() => handleAccountBlock(user)}
                          style={{
                            backgroundColor: "#ff4208",
                            border: "none",
                            borderRadius: "5px",
                            marginLeft: "10px",
                          }}
                        >
                          <FaUserLock
                            className="pb-1"
                            size={15}
                            style={{ color: "#fff" }}
                          />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleAccountBlock(user)}
                          style={{
                            backgroundColor: "#ff4208",
                            border: "none",
                            borderRadius: "5px",
                            marginLeft: "10px",
                          }}
                        >
                          <FaUserClock
                            ckOpen
                            className="pb-1"
                            size={15}
                            style={{ color: "#fff" }}
                          />
                        </button>
                      )}


                      {/* {user?.Devices && user.Devices.length > 0 ? (
                        <button
                          onClick={() => handleDeviceBlock(user)}
                          style={{
                            backgroundColor: "#2f94fd",
                            border: "none",
                            borderRadius: "5px",
                            marginLeft: "10px",
                          }}
                        >
                          <MdPhonelinkLock
                            className="pb-1"
                            size={18}
                            style={{ color: "#fff" }}
                          />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleDeviceBlock(user)}
                          style={{
                            backgroundColor: "#2f94fd",
                            border: "none",
                            borderRadius: "5px",
                            marginLeft: "10px",
                          }}
                        >
                          <MdMobileFriendly
                            ckOpen
                            className="pb-1"
                            size={18}
                            style={{ color: "#fff" }}
                          />
                        </button>
                      )} */}


                      {(() => {
                        const isDeviceBlocked = blockedDevice.some(
                          b => b.deviceId === user.deviceId && b.isBlocked
                        );

                        return (
                          <>
                            {isDeviceBlocked ? (
                              <button
                                onClick={() => handleDeviceUnBlock(user)}
                                style={{
                                  backgroundColor: "#2f94fd",
                                  border: "none",
                                  borderRadius: "5px",
                                  marginLeft: "10px",
                                }}
                              >
                                <MdPhonelinkLock
                                  className="pb-1"
                                  size={18}
                                  style={{ color: "#fff" }}
                                />
                              </button>
                            ) : (
                              <button
                                onClick={() => handleDeviceBlock(user)}
                                style={{
                                  backgroundColor: "#2f94fd",
                                  border: "none",
                                  borderRadius: "5px",
                                  marginLeft: "10px",
                                }}
                              >
                                <MdMobileFriendly
                                  ckOpen
                                  className="pb-1"
                                  size={18}
                                  style={{ color: "#fff" }}
                                />
                              </button>

                            )}
                          </>
                        );
                      })()}


                      {/* <button
                        onClick={() => handleDelete(user)}
                        style={{
                          backgroundColor: "red",
                          border: "none",
                          borderRadius: "5px",
                          marginLeft: "10px",
                        }}
                      >
                        <RiDeleteBin5Line
                          className="pb-1"
                          size={15}
                          style={{ color: "#fff" }}
                        />
                      </button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: "center", marginTop: 20 }}>
            <button
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
              style={paginationButtonStyle}
            >
              Prev
            </button>

            {/* {Array.from({ length: Math.ceil(currentPage / usersPerPage) }, (_, i) => i + 1)
              .filter(
                (page) =>
                  page === 1 ||
                  page === Math.ceil(currentPage / usersPerPage) ||
                  Math.abs(page - currentPage) <= 2
              )
              .map((page, i, arr) => {
                // Insert ellipsis
                if (i > 0 && page - arr[i - 1] > 1) {
                  return (
                    <span key={`ellipsis-${i}`} style={{ margin: "0 5px" }}>
                      ...
                    </span>
                  );
                }

                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    style={{
                      ...paginationButtonStyle,
                      backgroundColor: currentPage === page ? "#05d5e4e2" : "#eee",
                      color: currentPage === page ? "#fff" : "#000",
                    }}
                  >
                    {page}
                  </button>
                );
              })} */}

            {Array.from({ length: currentPage + 2 }, (_, i) => i + 1)
              .filter((page) => page === 1 || Math.abs(page - currentPage) <= 1)
              .map((page, i, arr) => {
                // Add ellipsis between non-consecutive pages
                if (i > 0 && page - arr[i - 1] > 1) {
                  return (
                    <span key={`ellipsis-${i}`} style={{ margin: "0 5px" }}>
                      ...
                    </span>
                  );
                }

                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    style={{
                      ...paginationButtonStyle,
                      backgroundColor: currentPage === page ? "#2BE5D8" : "#eee",
                      color: currentPage === page ? "#fff" : "#000",
                    }}
                  >
                    {page}
                  </button>
                );
              })}





            <button
              onClick={() => {
                const nextPage = currentPage + 1;
                console.log("Next page:", nextPage);
                setCurrentPage(nextPage);
              }}
              // disabled={currentPage === Math.ceil(totalCount / usersPerPage)}
              style={paginationButtonStyle}
            >
              Next
            </button>
          </div>

        </div>
      </div>

      {/* Modal */}

      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 400,
              backgroundColor: "#fff",
              borderRadius: 8,
              padding: 20,
            }}
          >
            <h2

              style={{
                marginBottom: '20px'
              }}

            >Update Diamond</h2>

            {/* Tab Switch */}
            <div style={{ display: "flex", marginBottom: 20 }}>
              <button
                style={{
                  flex: 1,
                  padding: 10,
                  backgroundColor: diamondType === "add" ? "#05d5e4e2" : "#eee",
                  color: diamondType === "add" ? "#fff" : "#000",
                  border: "1px solid #ccc",
                  borderRadius: "5px 0 0 5px",
                }}
                onClick={() => setDiamondType("add")}
              >
                Add
              </button>
              <button
                style={{
                  flex: 1,
                  padding: 10,
                  backgroundColor: diamondType === "remove" ? "#e44747" : "#eee",
                  color: diamondType === "remove" ? "#fff" : "#000",
                  border: "1px solid #ccc",
                  borderRadius: "0 5px 5px 0",
                }}
                onClick={() => setDiamondType("remove")}
              >
                Remove
              </button>
            </div>

            {/* Input Field */}
            <input
              type="number"
              value={diamondAmount}
              onChange={(e) => {
                const value = Math.abs(Number(e.target.value)) || "";
                setDiamondAmount(value);
              }}
              placeholder="Enter diamond amount"
              style={{
                width: "100%",
                padding: 10,
                marginBottom: 20,
                borderRadius: 5,
                border: "1px solid #ccc",
              }}
            />


            {/* Submit */}
            <button
              onClick={async () => {
                if (!diamondAmount || isNaN(diamondAmount)) return alert("Enter valid diamond amount");
                const id = selectedUser?.id;
                const data = { diamond: Number(diamondAmount) };
                if (diamondType === "add") {
                  await dispatch(addDiamondToUser({ userId: id, data }));
                } else {

                  if (selectedUser?.diamond >= diamondAmount) {
                    await dispatch(removeDiamondToUser({ userId: id, data }));
                  } else {
                    toast.error("User does not have enough diamonds to remove that amount.");
                  }





                  // await dispatch(deleteDaimond({ id, data }));
                  // await dispatch(addReceive({ amount: data.daimond, receiveId: id, receiveBy: "675d7cbc4bb7c2d44d5ff1b8" }));
                }

                dispatch(getAllUsers({
                  page: currentPage,
                  limit: usersPerPage,
                  regNumber: searchTerm.trim() || undefined,
                }));
                closeModal();
              }}
              style={{
                width: "100%",
                padding: 10,
                backgroundColor: "#05d5e4e2",
                color: "#fff",
                border: "none",
                borderRadius: 5,
              }}
            >
              Submit
            </button>

            <button
              onClick={closeModal}
              style={{
                width: "100%",
                padding: 10,
                backgroundColor: "#ccc",
                marginTop: 10,
                border: "none",
                borderRadius: 5,
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}


      {showModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
          justifyContent: 'center', alignItems: 'center',
        }}>
          <div style={{
            backgroundColor: '#fff', padding: '20px', borderRadius: '8px',
            width: '300px', boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
          }}>
            <h3>Update User ID</h3>
            <input
              type="number"
              value={regNumber}
              onChange={(e) => setRegNumber(e.target.value)}
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button onClick={handleSave} style={{ backgroundColor: '#05d5e4', color: '#fff', padding: '8px 16px', border: 'none', borderRadius: '4px' }}>
                Save
              </button>
              <button onClick={() => setShowModal(false)} style={{ backgroundColor: '#ccc', padding: '8px 16px', border: 'none', borderRadius: '4px' }}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showDeletePopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
          onClick={handleCancel}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 300,
              backgroundColor: "#fff",
              borderRadius: 8,
              padding: 20,
              textAlign: "center",
            }}
          >
            <h3>Are you sure you want to delete this user?</h3>
            <div style={{ marginTop: 20, display: "flex", justifyContent: "space-around" }}>
              <button
                onClick={handleDelOk}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "red",
                  color: "#fff",
                  border: "none",
                  borderRadius: 5,
                  cursor: "pointer",
                }}
              >
                Yes, Delete
              </button>
              <button
                onClick={handleCancel}
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#ccc",
                  color: "#000",
                  border: "none",
                  borderRadius: 5,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showDevicePopup && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              textAlign: 'center',
            }}
          >

            {
              idForDeviceLock?.action === 'unblock' ? (
                <p>Are you sure to Unblock device this id?</p>
              ) : (
                <p>Are you sure to block device this id?</p>
              )
            }

            <div style={{
              marginTop: '20px'
            }}>
              <button
                onClick={handleCancel}
                style={{
                  backgroundColor: 'gray',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '6px 20px',
                  margin: '0 10px',
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleDeviceBlockOk}
                style={{
                  backgroundColor: 'red',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  padding: '6px 20px',
                  margin: '0 10px',
                }}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}



    </div>
  );
};
const thStyle = {
  border: "1px solid #ddd",
  padding: "12px",
  textAlign: "center",
  backgroundColor: "#f2f2f2",
  fontWeight: "600",
  whiteSpace: "nowrap",
};
export default Users;






