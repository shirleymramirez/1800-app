import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux'
import { deletePost } from './postsSlice';

const ViewPosts = ({ id, title, body, onEdit }) => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const handleDelete = () => {
        console.log('delete click');
        setShowModal(true);
    }

    const handleClose = () => setShowModal(false);

    const handleConfirm = () => {
        console.log('handleConfirm');
        dispatch(deletePost({ id }));
        setShowModal(false);
    }

  return (
    <>
        <Card.Body>
            <p className='truncatedTitle'>{` ${title} `}</p>
            <footer className="blockquote-footer">{body}</footer>
            <div className="d-flex justify-content-end" style={{marginTop: '10px' }}>
                <Button variant="primary" onClick={onEdit} style={{marginRight: '5px'}}>Edit</Button>
                <Button variant="danger" onClick={handleDelete}>Delete</Button>
            </div>
        </Card.Body>
        { showModal ?
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" onClick={handleConfirm}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        : ''}
    </>
    )
}

export default ViewPosts