import React, { useState }from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import './Modal.css';


const ModalExample = (props) => {

  const { controller, onClose, insertData } = props;

  const insertPost = () => {
    let jsn = {
      "username": name,
      "email": email,
      "image": image,
      "title": title,
      "text": text
    }
    insertData(jsn)
    cleanModal()
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const cleanModal = () => {
    setName('')
    setEmail('')
    setImage('')
    setTitle('')
    setText('')
  }

 

  
  return (
    <>
      <Modal isOpen={controller}>
        <ModalHeader toggle={onClose}>Añadir Post</ModalHeader>

        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">Nombre</Label>
              <Input type="text" name="name" id="name" placeholder="nombre de usuario" onChange={(e)=> setName(e.target.value)} value={name} />
            </FormGroup>

            <FormGroup>
              <Label for="email">Correo</Label>
              <Input type="text" name="email" id="email" placeholder="correo electrónico" onChange={(e)=> setEmail(e.target.value)} value={email} />
            </FormGroup>
          
            
            <FormGroup>
              <Label for="image">Imagen</Label>
              <Input type="file" name="image" id="image" onChange={(e)=> setImage(e.target.value)} value={image} />
            </FormGroup>

            <FormGroup>
              <Label for="title">Título</Label>
              <Input type="text" name="title" id="title" placeholder="título publicación" onChange={(e)=> setTitle(e.target.value)} value={title} />
            </FormGroup>

            <FormGroup>
              <Label for="text">Texto</Label>
              <Input type="textarea" name="text" id="text" placeholder="descripción" onChange={(e)=> setText(e.target.value)} value={text} />
            </FormGroup>
        
          </Form>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={insertPost}>Aceptar</Button>
          <Button color="secondary" onClick={onClose}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalExample;