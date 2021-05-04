import React from 'react';
import NavBar from './../../components/NavBar/NavBar';
import PostCard from './../../components/Card/PostCard';
import BC from './../../assets/images/BC.jpg';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './Post.css';

class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      postData: {
        "username": "robertoargs",
        "email": "robertoargs@gmail.com",
        "image": "C:\\fakepath\\image.jpg",
        "title": "json de prueba",
        "text": "Esto es un texto",
        "comments": [
          {
            'username': 'robertoargs',
            'comment': 'Primer comentario'
          }
        ]
      },

      username:'',
      comment:''
    }
  }

  
  async componentDidMount() {
    var id = this.props.match.params.id;
    try {
      const response = await axios.get(`http://localhost:3000/api/home/${id}`);
      this.setState({postData: response.data})
    } 
    catch (error) {
      console.error(error);
    }
  }

  async sendComment() {
    var id = this.props.match.params.id;
    const {username, comment} = this.state;
    let jsn = {
      "username": username,
      "comment": comment
    }
    
    try {
      const response = await axios.put(`http://localhost:3000/api/update/${id}`, jsn);
      this.setState({postData: response.data})
    } 
    catch (error) {
      console.error(error);
    }
  }

  handleChange (e,input) {
    const value = e.target.value;
    this.setState({[input]:value})
  }

  
  
  render() { 
    const comments = this.state.postData.comments;
    return ( 
      <>
        <NavBar/>
    

        <div className="container">
        
          <div className="row myCard">
            <div className="col-sm-6">
              <PostCard
                key={this.state.postData._id}
                alt={`${this.state.postData.name}`.jpg}
                src={BC}
                title={this.state.postData.title} 
                text={this.state.postData.text} 
                id ={this.state.postData._id}  
              />
            </div>

            <div className="col-sm-6"> 
              <h3 className="bodyTitle">Título: {this.state.postData.title}</h3>
              <h6 className="bodyText">Descripción: {this.state.postData.text}</h6>
            </div>
          </div>
    
      </div>

      <div className="container dataArea">
        <h6>Comentarios</h6>
        <Form>
          <FormGroup>
            <Label>Nombre de usuario</Label>
            <Input type="text" id="comment_name" placeholder="nombre/correo"  onChange={e => this.handleChange(e,'username')}/> <br/>
            <Label>Comentario</Label>
            <Input type="textarea" id="comment_text" placeholder="cuerpo del comentario" onChange={e => this.handleChange(e,'comment')} />
          </FormGroup>
          <Button onClick={() => this.sendComment()} color="success">Comentar</Button>
        </Form>
      </div>

      <div className="container">
        <Form>
          {comments.map(comentario => (
          <FormGroup key={comentario.username} className="commentArea">
            <Label className="myLabel">{comentario.username}</Label><br/>
            <Label className="myLabel">{comentario.comment}</Label><br/> 
            <Label className="myLabel">{new Date(comentario.date).toString()}</Label><br/>
          </FormGroup>
          ))}
        </Form>
      </div>
      </>
    );
  }
}
 
export default Post;