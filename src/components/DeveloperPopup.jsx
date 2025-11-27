import React, { useState, useEffect } from "react";

export default function DeveloperPopup({ open, onClose }) {
  const [employees, setEmployees] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editEmployee, setEditEmployee] = useState(null);

  // Fetch all employees
  const fetchEmployees = async () => {
    const res = await fetch("http://localhost:5000/api/employee");
    const data = await res.json();
    setEmployees(data);
  };

  useEffect(() => {
    if (open) fetchEmployees();
  }, [open]);

  if (!open) return null;

  // Add + Update employee
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const body = {
      name: form.get("name"),
      email: form.get("email"),
      role: form.get("role"),
      department: form.get("department"),
      experience: form.get("experience"),
      status: form.get("status"),
      location: form.get("location"),
    };

    if (editEmployee) {
      await fetch(`http://localhost:5000/api/employee/${editEmployee._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } else {
      await fetch(`http://localhost:5000/api/employee`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    }

    setOpenModal(false);
    setEditEmployee(null);
    fetchEmployees();
  };

  // Delete employee
  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/employee/${id}`, {
      method: "DELETE",
    });
    fetchEmployees();
  };

  return (
    <div
      className="fixed inset-0 flex justify-center items-start pt-10 sm:pt-16 z-50 "
      onClick={onClose}
    >
      {/* MAIN POPUP BOX */}
      <div
        className="bg-white w-full max-w-4xl mx-3 sm:mx-auto rounded-xl shadow-xl p-4 sm:p-6 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg sm:text-xl font-semibold">
            Employee Management
          </h2>

          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full"
          >
            ✕
          </button>
        </div>

        {/* RESPONSIVE TABLE */}
        <div className="border border-gray-200 rounded-lg overflow-x-auto">
          <table className="w-full text-sm min-w-[600px]">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((emp) => (
                <tr key={emp._id} className="border-b">
                  <td className="p-3">{emp.name}</td>
                  <td className="p-3">{emp.email}</td>
                  <td className="p-3">{emp.role}</td>
                  <td className="p-3">{emp.department}</td>

                  <td className="p-3 text-right">
                    <div className="inline-flex gap-3">
                      <button
                        className="text-blue-500 "
                        onClick={() => {
                          setEditEmployee(emp);
                          setOpenModal(true);
                        }}
                      >
                        Edit
                      </button>

                      <button
                        className="text-red-500"
                        onClick={() => handleDelete(emp._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ADD EMPLOYEE BUTTON */}
        <button
          onClick={() => {
            setEditEmployee(null);
            setOpenModal(true);
          }}
          className="mt-4 px-4 py-2  active:scale-95 transition-all duration-300 bg-green-600 text-white rounded-lg w-full sm:w-auto"
        >
          + Add Employee
        </button>

        {/* FORM MODAL */}
        {openModal && (
          <div className="fixed inset-0 flex justify-center items-center z-50 ">
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-xl shadow-xl w-full mx-4 max-w-md space-y-4"
            >
              <h3 className="font-semibold text-lg">
                {editEmployee ? "Edit Employee" : "Add Employee"}
              </h3>

              {/* INPUT FIELDS — responsive */}
              {[
                "name",
                "email",
                "role",
                "department",
                "experience",
                "status",
                "location",
              ].map((field) => (
                <input
                  key={field}
                  name={field}
                  defaultValue={editEmployee?.[field]}
                  placeholder={
                    field.charAt(0).toUpperCase() +
                    field.slice(1).replace(/([A-Z])/g, " $1")
                  }
                  required
                  className="border border-gray-400 p-2 w-full rounded"
                />
              ))}

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setOpenModal(false)}
                  className="px-4 py-2 bg-gray-200  active:scale-95 transition-all duration-300 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600  active:scale-95 transition-all duration-300 text-white rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
