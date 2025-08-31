// import React, { useState } from 'react'

// function UserChat() {

//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearch = () => {
//         console.log('🔍 Search term:', searchTerm);
//         // You can perform the actual search/filter logic here
//     };

//     return (
//         <div>
//             <div className='container'>
//                 <div className="margin">
//                     <div className="d-block d-sm-none mt-3">
//                         <div className="input-group">
//                             <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Search..."
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                             />
//                             <button   style={{ backgroundColor: '#2BE5D8', color: 'white' }} className="btn " onClick={handleSearch}>
//                                 Search
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default UserChat


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInboxByRegNo } from '../features/inbox/inboxSlice';
import { useNavigate } from 'react-router-dom';

function UserChat() {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const chatUser = useSelector((state) => state?.inbox?.inbox);
    // console.log('🔍 Chat User:', chatUser);


    const handleSearch = async () => {
        if (!searchTerm.trim()) return;
        dispatch(fetchInboxByRegNo(Number(searchTerm)));
    };


    const handleUserClick = (item) => {
        navigate('/xnet/user-inbox', {
            state: {
                searchUserDetail: chatUser?.searchUserDetail,
                selectedUser: item,
            },
        });
    };



    return (
        <div>
            <div className="container">
                <div className="margin">
                    {/* Mobile-only search */}
                    <div className="d-block d-sm-none mt-3">
                        <div className="input-group">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Search by Reg No"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                style={{ backgroundColor: '#2BE5D8', color: 'white' }}
                                className="btn"
                                onClick={handleSearch}
                            >
                                Search
                            </button>
                        </div>
                    </div>


                    <div className="package-list">
                        {chatUser?.conversationUsers?.map((item, index) => (
                            <div
                                key={index}
                                className="package-item d-flex align-items-center justify-content-between mb-2 p-2 border rounded"

                            >
                                <div className="d-flex align-items-center" onClick={() => handleUserClick(item)}>
                                    <img
                                        src={item?.profilePic}
                                        alt="img"
                                        className="package-image me-3"
                                        style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: 'cover' }}
                                    />
                                    <div>
                                        <h6 className="mb-1" style={{ fontSize: '13px' }}>Agent ID: {item?.regNumber}</h6>
                                        <p className="mb-0" style={{ fontSize: '13px' }}>Name: {item?.fullname}</p>
                                        <p className="mb-0" style={{ fontSize: '11px' }}>
                                            Total Diamond: {item?.hosts?.reduce((total, item) => total + (item?.user?.daimond || 0), 0) || 0}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default UserChat;
