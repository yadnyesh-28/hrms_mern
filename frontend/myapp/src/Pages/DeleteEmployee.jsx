import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteEmployeeModal = ({ isOpen, employee, onClose, onDeleted }) => {
        const navigate=useNavigate();
  if (!isOpen || !employee) return null;
    console.log('emp to delete ', employee);

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:8080/admin/delete-employee/${employee.employeeId}`,
        {
          headers: {
            authorization: localStorage.getItem("token"),
            role: localStorage.getItem("role"),
          },
        }
      ).then((res)=>{
        if(res.status(201)){
            alert('employee deleted');
        }
      })

      navigate('/home')
    } catch (error) {
      alert(
        error.response?.data?.message ||
        "Unable to delete employee"
      );
    }
  };

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
         style={{ backgroundColor: "rgba(0,0,0,0.45)", zIndex: 1050 }}>

      <div
        className="card shadow-sm"
        style={{
          width: "360px",
          animation: "scaleIn 0.2s ease-out"
        }}
      >
        <div className="card-header bg-danger text-white py-2 text-center">
          <h6 className="mb-0">Delete Employee</h6>
        </div>

        <div className="card-body text-center p-3">
          <p className="mb-3 small">
            Are you sure you want to delete
            <br />
            <strong>{employee.name}</strong>?
          </p>

          <div className="d-flex justify-content-between">
            <button
              className="btn btn-danger btn-sm px-3"
              onClick={handleDelete}
            >
              Delete
            </button>

            <button
              className="btn btn-outline-secondary btn-sm px-3"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes scaleIn {
            from {
              transform: scale(0.95);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default DeleteEmployeeModal;
