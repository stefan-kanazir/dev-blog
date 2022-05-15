import ReactDOM from 'react-dom';

function Notification(props) {
  const { title, message, status } = props;

  return ReactDOM.createPortal(
    <div className={`${status === "success" ? "bg-green-500" : ""} ${status === "error" ? "bg-red-500" : ""} ${status === "pending" ? "bg-blue-500" : ""} text-white mt-4 w-full p-6 rounded-md max-w-2xl mx-auto`}>
      <h2 className="text-2xl mb-4">{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications")
  );
}

export default Notification;
