import React from 'react';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import ContactForm from '../Screens/Contact/sections/ContactForm';
import InfoBox from '../Screens/Contact/sections/Infobox';

const QueryModal = ({ show, handleClose }) => {
	return (
		<Modal
			show={show}
			onHide={handleClose}
			size='lg'
			centered>
			<Modal.Header closeButton></Modal.Header>
			<Modal.Body>
				<Container>
					<Row>
						<Col>
							<Card className='shadow-sm'>
								<Card.Body>
									<h5 className='mb-3'>Submit Query</h5>
									<ContactForm />
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant='secondary'
					onClick={handleClose}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default QueryModal;
