import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import './ModalBlock.css'
export default function ModalBlock(props) {
    console.log("userr", props)
    if(props.user){
        return(
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                {/* <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                    </Modal.Title>
                </Modal.Header> */}
                <Modal.Body>
                    <div className="user-detailBlock">
                        <div className="userImg">
                            <img src={props.user.picture.large}/>
                        </div>
                        <div className="userName">
                            {props.user.name.title}. {props.user.name.first} {props.user.name.last}
                        </div>
                        <p>{props.user.location.state}, {props.user.location.city}, {props.user.location.country}</p>
                        <p>{props.user.email} | {props.user.phone}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    } else {
        return(
            <div>

            </div>
        )
    }
    
}