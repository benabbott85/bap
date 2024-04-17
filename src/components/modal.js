import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



function Modall(args) {
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <Button className="modalbtn"color="danger" onClick={toggle}>
          View More of My Work
        </Button>
        <Modal isOpen={modal} toggle={toggle} {...args}>
          {/* <ModalHeader className="modaltext" toggle={toggle}>More of My Work</ModalHeader> */}
          <ModalBody>
            <h3 className="modaltext">Western Material Handling</h3>
            <a className="modaltext" href="https://abetterforklift.com/" target='_blank' rel="noreferrer">Visit Site</a>
          </ModalBody>
          {/* <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Do Something
            </Button>{' '}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter> */}
        </Modal>
      </div>
    );
  }
  
  export default Modall;