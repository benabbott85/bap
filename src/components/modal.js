import React, { useState } from 'react';
import { Button, Modal, ModalBody} from 'reactstrap';



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
            <a className="modaltext mbtn" href="https://abetterforklift.com/" target='_blank' rel="noreferrer">Visit Site</a>
            <h3 className="modaltext">Continental Partition Systems, LLC</h3>
            <a className="modaltext mbtn" href="https://cps-partitions.com/" target='_blank' rel="noreferrer">Visit Site</a>
            <h3 className="modaltext">Selimovich Transport, Inc</h3>
            <a className="modaltext mbtn" href="https://stidenver.com/" target='_blank' rel="noreferrer">Visit Site</a>
            <h3 className="modaltext">Quality Crafts by Deborah</h3>
            <a className="modaltext mbtn" href="https://qualitycraftsbydeborah.net/" target='_blank' rel="noreferrer">Visit Site</a>
            <h3 className="modaltext">US Border Movers</h3>
            <a className="modaltext mbtn" href="https://bordermovers.com/" target='_blank' rel="noreferrer">Visit Site</a>
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