import React from "react";


const rows = [
  {
    id: 1,
    taskName: "HR Request",
    status: "In Progress",
    statusClass: "primary",
    assignee: "Jeff Kingly",
    process: "Human Resources",
    dueDate: "01/2/2023",
    dueTime: "06:30 am",
  },
  {
    id: 2,
    taskName: "IT Request",
    status: "Pending",
    statusClass: "warning",
    assignee: "John Doe",
    process: "Information Technology",
    dueDate: "01/2/2023",
    dueTime: "06:30 am",
  },
  {
    id: 3,
    taskName: "IT Request",
    status: "Done",
    statusClass: "success",
    assignee: "John Doe",
    process: "Information Technology",
    dueDate: "01/2/2023",
    dueTime: "06:30 am",
  },
];

const Table = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="main-sub row align-items-center pt-5"></div>
        <div className="table-container mt-5">
          <div className="mb-2">
            <h2>Your form tasks</h2>
            <small className="text-secondary">
              View all form tasks assigned to your group.
            </small>
          </div>
          <table id="mytable" className="table align-middle mb-0 bg-white">
            <thead className="bg-light">
              <tr className="header-row">
                <th>ID #</th>
                <th>Task Name</th>
                <th>Status</th>
                <th>Assignee</th>
                <th>Process</th>
                <th>Due</th>
                <th>Preview Form</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td>
                    <div className="d-flex align-items-center">
                      <div>
                        <p className="fw-bold mb-1">{row.id}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fw-bold mb-1">{row.taskName}</p>
                  </td>
                  <td>
                    <span
                      className={`badge bg-${row.statusClass} rounded-pill d-inline`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td>{row.assignee}</td>
                  <td>{row.process}</td>
                  <td>
                    <div>
                      <span>{row.dueDate}</span>
                      <p className="time text-muted mb-0">{row.dueTime}</p>
                    </div>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-link btn-sm text-primary border-bottom-0 border-bottom-on-hover"
                    >
                      <i className="far fa-file text-primary"></i>
                      Preview Forms
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav className="mt-4">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link">Previous</a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Table;
