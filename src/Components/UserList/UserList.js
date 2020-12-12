import { Link } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalBlock from '../Modal/ModalBlock'
export default function UserList() {
    const [userList, setUserList] = useState("");
    const [show, setShow] = useState(false);
    const [user,  setUser] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const setUserOnShow = (record) => {
        setUser(record)
        handleShow();
    }
    useEffect(()=>getUsersData(),[])
    function getUsersData() {
        fetch('https://randomuser.me/api/?results=50')
            .then(res=>res.json())
            .then(json=>setUserList(json.results))
    }
    console.log('userList', userList)
    return(
        <div className="user-list">
            <table className="table">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>email</th>
                    <th>DOB</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
                {
                    userList ? (
                        userList.map((user)=>{
                            return(
                                <tr>
                                    <td>{user.name.first}</td>
                                    <td>{user.name.last}</td>
                                    <td>{user.email}</td>
                                    <td>{user.dob.date}</td>
                                    <td>{user.location.state}, {user.location.city}, {user.location.country}</td>
                                    <td>
                                        <Link to="/user-detail">
                                            <button className="addBtn" onClick={()=>setUserOnShow(user)}>View</button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    ) : (
                        <div>
                            .....Loading
                        </div>
                    )
                }
            </table>
            {/* <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            </Modal> */}
            <ModalBlock
                show={show}
                onHide={() => handleClose(false)}
                user= {user}
            />
        </div>
    )
} 