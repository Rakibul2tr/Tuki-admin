

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchInboxByRegNo } from '../features/inbox/inboxSlice';
// import { useNavigate } from 'react-router-dom';
// import { fetchAllLiveStreams, fetchUserByRegNo } from '../features/users/userSlice';

// function UserChat() {
//     const [searchTerm, setSearchTerm] = useState('');
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const chatUser = useSelector((state) => state?.inbox?.inbox);
//     const [liveStreams, setLiveStreams] = useState([]);

//     const handleSearch = async () => {
//         if (!searchTerm.trim()) return;

//         try {
//             const action = await dispatch(fetchUserByRegNo(searchTerm));
//             if (fetchUserByRegNo.fulfilled.match(action)) {
//                 console.log('✅ User found:', action.payload);

//                 const userId = action.payload.result.id;
//                 if (userId) {
//                     const streamAction = await dispatch(fetchAllLiveStreams(userId));
//                     if (fetchAllLiveStreams.fulfilled.match(streamAction)) {
//                         console.log('🎥 Livestreams:', streamAction.payload);
//                         setLiveStreams(streamAction.payload); // ✅ set state here
//                     } else {
//                         console.warn('❌ Failed to fetch livestreams:', streamAction.error);
//                     }
//                 }
//             } else {
//                 console.warn('❌ Failed to fetch user:', action.error);
//             }
//         } catch (err) {
//             console.error('🚨 Error during search:', err);
//         }
//     };

// const getTotalTimeHMS = (streams) => {
//     let totalSeconds = 0;

//     for (const item of streams) {
//         const timeString = item?.date; // assuming item.date = "01:20:15"
//         if (!timeString) continue;

//         const [h, m, s] = timeString.split(':').map(Number);
//         if (!isNaN(h) && !isNaN(m) && !isNaN(s)) {
//             totalSeconds += h * 3600 + m * 60 + s;
//         }
//     }

//     const hours = Math.floor(totalSeconds / 3600);
//     const minutes = Math.floor((totalSeconds % 3600) / 60);
//     const seconds = totalSeconds % 60;

//     return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
// };



//     return (
//         <div>
//             <div className="container">
//                 <div className="margin">
//                     {/* Mobile-only search */}
//                     <div className="d-block d-sm-none mt-3">
//                         <div className="input-group">
//                             <input
//                                 type="number"
//                                 className="form-control"
//                                 placeholder="Search by Reg No"
//                                 value={searchTerm}
//                                 onChange={(e) => setSearchTerm(e.target.value)}
//                             />
//                             <button
//                                 style={{ backgroundColor: '#FF5CCD', color: 'white' }}
//                                 className="btn"
//                                 onClick={handleSearch}
//                             >
//                                 Search
//                             </button>
//                         </div>
//                     </div>


//                     <div className="package-list">
//                         {liveStreams?.map((item, index) => (
//                             <div
//                                 key={index}
//                                 className="package-item d-flex align-items-center justify-content-between mb-2 p-2 border rounded"

//                             >
//                                 <div className="d-flex align-items-center" onClick={() => handleUserClick(item)}>
//                                     <div>
//                                         <h6 className="mb-1" style={{ fontSize: '13px' }}>Date: {item?.regNumber}</h6>
//                                         <p className="mb-0" style={{ fontSize: '10px' }}>(H.M.S)</p>
   
//                                     </div>
//                                 </div>

//                             </div>
//                         ))}
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// }

// export default UserChat;















import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInboxByRegNo } from '../features/inbox/inboxSlice';
import { useNavigate } from 'react-router-dom';
import { fetchAllLiveStreams, fetchUserByRegNo } from '../features/users/userSlice';
import moment from 'moment';

function Callinghour() {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const chatUser = useSelector((state) => state?.inbox?.inbox);
    const [liveStreams, setLiveStreams] = useState([]);
    const [groupedStreams, setGroupedStreams] = useState([]);

    const handleSearch = async () => {
        if (!searchTerm.trim()) return;

        try {
            const action = await dispatch(fetchUserByRegNo(searchTerm));
            if (fetchUserByRegNo.fulfilled.match(action)) {
                const userId = action.payload.result.id;
                if (userId) {
                    const streamAction = await dispatch(fetchAllLiveStreams(userId));
                    if (fetchAllLiveStreams.fulfilled.match(streamAction)) {
                        const streams = streamAction.payload;
                        setLiveStreams(streams);
                        const grouped = groupStreamsByDate(streams);
                        setGroupedStreams(grouped);
                    }
                }
            }
        } catch (err) {
            console.error('🚨 Error during search:', err);
        }
    };

    const groupStreamsByDate = (streams) => {
        const grouped = {};

        streams.forEach(item => {
            if (!item.startTime || !item.endTime) return;

            const dateKey = moment(item.startTime).format('YYYY-MM-DD');
            const start = moment(item.startTime);
            const end = moment(item.endTime);
            const duration = moment.duration(end.diff(start)).asSeconds();

            if (!grouped[dateKey]) {
                grouped[dateKey] = {
                    date: dateKey,
                    totalSeconds: 0,
                    streams: [],
                };
            }

            grouped[dateKey].totalSeconds += duration;
            grouped[dateKey].streams.push(item);
        });

        return Object.values(grouped).sort((a, b) => moment(b.date) - moment(a.date));
    };

    const formatSecondsToHMS = (totalSeconds) => {
        const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
        const seconds = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
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

                    {/* Show grouped stream list */}
                    <div className="mt-3">
                        {groupedStreams.map((group, index) => (
                            <div
                                key={index}
                                className="p-3 mb-3 border rounded"
                                style={{ background: '#f8f8f8' }}
                            >
                                <h6 style={{ fontSize: '14px' }}>
                                    📅 Date: <strong>{moment(group.date).format('DD MMM YYYY')}</strong>
                                </h6>
                                <p style={{ fontSize: '12px' }}>
                                    ⏱ Total Time (H.M.S):{' '}
                                    <span style={{ color: 'black', fontWeight: 'bold' }}>
                                        {formatSecondsToHMS(group.totalSeconds)}
                                    </span>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Callinghour;
