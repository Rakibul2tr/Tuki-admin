import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { io } from 'socket.io-client';

const SOCKET_URL = 'https://socket.nrmou.xyz';
const SocketContext = createContext(null);

export const SocketProvider = ({ children }) => {
  const socket = useRef(null);
  const [connected, setConnected] = useState(false);

  const connectSocket = (token) => {
    if (socket.current && socket.current.connected) {
      console.log('⚡ Socket already connected.');
      return;
    }

    console.log('🔗 Connecting with token:', token);

    socket.current = io(SOCKET_URL, {
      transports: ['websocket'],
      auth: { token: `Bearer ${token}` },
      reconnectionAttempts: 5,
      reconnectionDelay: 2000,
    });

    socket.current.on('connect', () => {
      console.log('✅ Connected to Socket Server');
      setConnected(true);
    });

    socket.current.on('connect_error', (err) => {
      console.error('🚨 Socket Connection Error:', err.message);
      setConnected(false);
    });

    socket.current.on('disconnect', (reason) => {
      console.warn('❌ Disconnected from Socket:', reason);
      setConnected(false);
    });
  };

  // Optional: auto-connect with stored token
  useEffect(() => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2ZTU2OTU4My0wNzI1LTRhOTAtODQ3NS1kMDgxZjhhNDg2YjkiLCJpYXQiOjE3NDg4ODA5NjgsImV4cCI6MTc1MTQ3Mjk2OH0.5auvhg7ZGM2gbFXFPeBu1-ETwDqYhEsburLI275rUaI'
    if (token) {
      connectSocket(token);
    }

    return () => {
      if (socket.current) {
        socket.current.disconnect();
        console.log('🔌 Socket disconnected on unmount');
      }
    };
  }, []);

  return (
    <SocketContext.Provider
      value={{
        connectSocket,
        connected,
        socket: socket.current,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
