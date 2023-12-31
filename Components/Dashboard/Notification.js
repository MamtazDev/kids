import React from "react";
import { Button, Modal, FormControl, Input, Center, NativeBaseProvider } from "native-base";
import { useState } from "react";

const Example = () => {
  const [showModal, setShowModal] = useState(false);
  return <>
    <Button shadow={2} onPress={() => setShowModal(true)}>
      Button
    </Button>
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>Contact Us</Modal.Header>
        <Modal.Body>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setShowModal(false);
            }}>
              Cancel
            </Button>
            <Button onPress={() => {
              setShowModal(false);
            }}>
              Save
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  </>;
};


const Notification = () => {
  return (
    <Center flex={1} px="3">
      <Example />
    </Center>
  );
}


export default Notification 
