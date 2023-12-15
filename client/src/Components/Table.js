// Table.js

import React, { useState } from "react";
import Card from "./Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Pagination from "react-bootstrap/Pagination";

const Table = (props) => {
  const [show, setShow] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const users = props.Data;
  // const users = Array.from({ length: 48 }, (_, index) => ({
  //   name: "abhi",
  //   age: 21,
  //   position: "SDE",
  //   department: "Engineering",
  //   salary: 50000,
  //   id: index + 1, // Add a unique id for each user
  // }));

  const handleClose = () => {
    setShow(false);
    setSelectedUser(null);
  };

  const handleShow = (user) => {
    setSelectedUser(user);
    setShow(true);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="">
      <table className="table table-dark table-hover ">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Position</th>
            <th scope="col">Department</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody className="container">
          {currentItems.map((user) => (
            <tr
              key={user._id}
              variant="primary"
              onClick={() => handleShow(user)}
            >
              <th scope="row">{user.name}</th>
              <td>{user.age}</td>
              <td>{user.position}</td>
              <td>{user.department}</td>
              <td>{user.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination>
        {[...Array(Math.ceil(users.length / itemsPerPage)).keys()].map(
          (number) => (
            <Pagination.Item
              key={number + 1}
              active={number + 1 === currentPage}
              onClick={() => paginate(number + 1)}
            >
              {number + 1}
            </Pagination.Item>
          )
        )}
      </Pagination>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Card user={selectedUser} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Table;
