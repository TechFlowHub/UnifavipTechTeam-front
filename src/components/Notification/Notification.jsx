import React, { useEffect, useState } from 'react';
import './Notification.css';
import { 
  CiCircleCheck, 
  CiCircleRemove, 
  CiWarning, 
  CiCircleInfo 
} from "react-icons/ci";

const Notification = ({ message, type, duration = 3000, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  const renderIcon = () => {
    switch (type) {
      case 'success':
        return <CiCircleCheck />;
      case 'error':
        return <CiCircleRemove />;
      case 'warning':
        return <CiWarning />;
      case 'info':
        return <CiCircleInfo />;
      default:
        return null;
    }
  };

  return (
    <div className={`notification ${type}`}>
      <div>
        {renderIcon()}
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Notification;