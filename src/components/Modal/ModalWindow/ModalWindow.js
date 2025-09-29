import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Modal} from "react-bootstrap";
import styles from './style.module.css'

export default function ModalWindow(props) {
    return (
        <Modal show={props.show} onHide={props.handleClose} >
            <Modal.Header closeButton className={styles.modalBody}>
                <Modal.Title className={styles.title}>{props.heading}</Modal.Title>
            </Modal.Header>
            <Modal.Body className={styles.modalBody} style={{paddingTop: '0px', color: 'white'}}>
                {props.body}
            </Modal.Body>
        </Modal>
    )
}