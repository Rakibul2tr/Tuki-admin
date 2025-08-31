

import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchP2PMessages } from '../features/inbox/inboxSlice';

function UserInbox() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { state } = useLocation();
    const { searchUserDetail, selectedUser } = state || {};

    const containerRef = useRef(null);
    const scrollOffsetRef = useRef(0);
    const [page, setPage] = useState(1);
    const pageSize = 20;
    const [allMessages, setAllMessages] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const userId1 = searchUserDetail?.id;
    const userId2 = selectedUser?.id;

    // Initial load
    useEffect(() => {
        if (userId1 && userId2) {
            setIsLoading(true);
            dispatch(fetchP2PMessages({ userId1, userId2, page: 1, pageSize }))
                .unwrap()
                .then((res) => {
                    setAllMessages(res.data);
                    setTotalCount(res.totalCount);
                })
                .finally(() => setIsLoading(false));
        }
    }, [userId1, userId2, dispatch]);

    // Scroll to bottom on first load
    useEffect(() => {
        if (containerRef.current && page === 1 && allMessages.length > 0) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [allMessages, page]);

    // Handle scroll up to load more
    const handleScroll = () => {
        const container = containerRef.current;
        if (!container) return;

        if (container.scrollTop < 50 && !isLoading && allMessages.length < totalCount) {
            const nextPage = page + 1;
            setPage(nextPage);
            scrollOffsetRef.current = container.scrollHeight;
            setIsLoading(true);

            dispatch(fetchP2PMessages({ userId1, userId2, page: nextPage, pageSize }))
                .unwrap()
                .then((res) => {
                    const existingIds = new Set(allMessages.map((m) => m.id));
                    const uniqueNew = res.data.filter((m) => !existingIds.has(m.id));
                    setAllMessages((prev) => [...uniqueNew, ...prev]);
                })
                .finally(() => {
                    setTimeout(() => {
                        const newHeight = containerRef.current?.scrollHeight || 0;
                        containerRef.current.scrollTop = newHeight - scrollOffsetRef.current;
                        setIsLoading(false);
                    }, 100);
                });
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
        });
    };

    return (
        <div style={{ height: '100vh', overflow: 'hidden', position: 'relative', background: 'linear-gradient(to bottom right, #f0e6f6, #e0f0ff)', }}>
            {/* Back Button */}
            <button
                className="btn btn-outline-primary"
                style={{ position: 'fixed', top: '10%', left: '15px', zIndex: 999 }}
                onClick={() => navigate(-1)}
            >
                ← Back
            </button>

            {/* Message Scroll Area */}
            <div
                ref={containerRef}
                style={{
                    height: '87% ',
                    overflowY: 'auto',
                    padding: '80px 10px 20px 10px',
                    background: 'linear-gradient(to bottom right, #f0e6f6, #e0f0ff)',
                    top: '15%',
                    position: 'absolute',
                    width: '100%',
                }}
                onScroll={handleScroll}
            >
                {allMessages.map((msg, index) => {
                    const isMyMessage = msg.senderId === userId1;
                    return (
                        <div
                            key={msg.id || index}

                        >

                            <div style={{
                                display: 'flex',
                                alignItems: 'flex-end',
                                marginBottom: 10,
                                width: '100%',
                                justifyContent: isMyMessage ? 'flex-end' : 'flex-start',
                            }}>


                                {
                                    msg.messageType === 'voice' ? (

                                        <div style={{
                                            maxWidth: '65%',
                                            backgroundColor: isMyMessage ? '#add8f7' : '#dd9fff',
                                            color: '#000',
                                            padding: '10px 15px',
                                            borderRadius: 20,
                                            borderBottomRightRadius: isMyMessage ? 0 : 20,
                                            borderBottomLeftRadius: isMyMessage ? 20 : 0,
                                            wordBreak: 'break-word',
                                        }}>



                                            <span style={{ fontSize: 18, marginRight: 10 }}>▶️</span>
                                            <span>00:00</span>


                                            <div
                                                style={{
                                                    fontSize: 12,
                                                    color: '#555',
                                                    marginTop: 4,
                                                    textAlign: isMyMessage ? 'right' : 'left',
                                                }}
                                            >
                                                {formatDate(msg.createdAt)}
                                            </div>



                                        </div>

                                    ) : (
                                        <div style={{
                                            maxWidth: '65%',
                                            backgroundColor: isMyMessage ? '#add8f7' : '#dd9fff',
                                            color: '#000',
                                            padding: '10px 15px',
                                            borderRadius: 20,
                                            borderBottomRightRadius: isMyMessage ? 0 : 20,
                                            borderBottomLeftRadius: isMyMessage ? 20 : 0,
                                            wordBreak: 'break-word',
                                        }}>
                                            {msg.message}
                                            <div
                                                style={{
                                                    fontSize: 12,
                                                    color: '#555',
                                                    marginTop: 4,
                                                    textAlign: isMyMessage ? 'right' : 'left',
                                                }}
                                            >
                                                {formatDate(msg.createdAt)}
                                            </div>



                                        </div>
                                    )}





                            </div>








                            {/* Message bubble and time */}
                            {/* <div style={{ maxWidth: '65%' }}>
                                {
                                    msg.messageType === 'voice' ? (
                                        <div
                                            style={{
                                                backgroundColor: isMyMessage ? '#add8f7' : '#dd9fff',
                                                color: '#000',
                                                padding: '10px 15px',
                                                borderRadius: 20,
                                                borderBottomRightRadius: isMyMessage ? 0 : 20,
                                                borderBottomLeftRadius: isMyMessage ? 20 : 0,
                                                wordBreak: 'break-word',
                                            }}
                                        >
                                            {msg.message}
                                        </div>
                                    ) : (
                                        <div
                                            style={{
                                                backgroundColor: isMyMessage ? '#add8f7' : '#dd9fff',
                                                color: '#000',
                                                padding: '10px 15px',
                                                borderRadius: 20,
                                                borderBottomRightRadius: isMyMessage ? 0 : 20,
                                                borderBottomLeftRadius: isMyMessage ? 20 : 0,
                                                wordBreak: 'break-word',
                                            }}
                                        >
                                            {msg.message}
                                        </div>
                                    )
                                }

                                <div
                                    style={{
                                        fontSize: 12,
                                        color: '#555',
                                        marginTop: 4,
                                        textAlign: isMyMessage ? 'right' : 'left',
                                    }}
                                >
                                    {formatDate(msg.createdAt)}
                                </div>
                            </div> */}



                        </div>
                    );
                })}

                {isLoading && <p className="text-center text-muted">Loading more...</p>}
            </div>
        </div >
    );
}

export default UserInbox;

