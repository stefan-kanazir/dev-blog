import ReactDOM from 'react-dom';

function Notification(props) {
  const { title, message, status } = props;

//   let statusClasses = '';

//   if (status === 'success') {
//     statusClasses = classes.success;
//   }

//   if (status === 'error') {
//     statusClasses = classes.error;
//   }

//   const cssClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={`${status === "success" ? "bg-green-500" : ""} ${status === "error" ? "bg-red-500" : ""} ${status === "pending" ? "bg-blue-500" : ""} text-white mt-4 w-full p-6 rounded-md`}>
      <h2 className="text-2xl mb-4">{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
