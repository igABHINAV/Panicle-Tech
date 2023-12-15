import React, { useState } from "react";

const UpdateForm = () => {
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [position, setposition] = useState("");
  const [department, setdepartment] = useState("");
  const [salary, setsalary] = useState(0);
  const [age, setage] = useState(0);

  const submit = async () => {
    try {
      const res = await fetch("http://localhost:5000/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // Specify the content type
        },
        body: JSON.stringify({
          id: id,
          name: name,
          age: age,
          department: department,
          position: position,
          salary: salary,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("User updated successfully");
      } else {
        alert("Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("An error occurred while updating the user");
    }
  };
  return (
    <section className="vh-100" style={{ backgroundColor: "#2779e2" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-9">
            <h1 className="text-white mb-4">Update an employee</h1>
            <div className="card" style={{ borderRadius: 15 }}>
              <div className="card-body">
                <div className="row align-items-center pt-4 pb-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Employee ID</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      type="text"
                      value={id}
                      onChange={(e) => setid(e.target.value)}
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <hr className="mx-n3" />
                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Full name</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      type="text"
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <div className="row align-items-center py-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Department</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      value={department}
                      onChange={(e) => setdepartment(e.target.value)}
                      type="text"
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <div className="row align-items-center pt-4 pb-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Salary (₹)</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      value={salary}
                      onChange={(e) => setsalary(e.target.value)}
                      type="text"
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <div className="row align-items-center pt-4 pb-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Position</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      value={position}
                      onChange={(e) => setposition(e.target.value)}
                      type="text"
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <div className="row align-items-center pt-4 pb-3">
                  <div className="col-md-3 ps-5">
                    <h6 className="mb-0">Age</h6>
                  </div>
                  <div className="col-md-9 pe-5">
                    <input
                      value={age}
                      onChange={(e) => setage(e.target.value)}
                      type="text"
                      className="form-control form-control-lg"
                    />
                  </div>
                </div>
                <hr className="mx-n3" />

                <div className="px-5 py-4">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={submit}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpdateForm;
