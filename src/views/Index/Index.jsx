import React, {useState, useEffect} from 'react';
import BC from './../../assets/images/BC.jpg';
import BlogCard from './../../components/Card/BlogCard';
import NavBar from './../../components/NavBar/NavBar';
import Modal from './../../components/Modal/Modal';
import axios from 'axios';

import './Index.css';

function Counter() {

  const [entries, setEntries] = useState([]);
  const [inputVal, setInputVal] = useState('');

  

  useEffect(async () => {
    getPosts()
  }, [])

  const post = async (jsn) => {
    const { username, email, image, title, text } = jsn;

    if (username === '' || email === '' || image === '' || title === '' || text === '') {
      alert('Ingresa todos los datos por favor')
     
    }
    else {
      openModal()
      try {
        const response = await axios.post('http://localhost:3000/api/home/', jsn);
        console.log(response);
        getPosts()

      } catch (error) {
        console.error(error);
      }
    }
    /*
    axios.post('http://localhost:3000/api/home/', jsn)
    
    .then(response => {
      console.log(response, 'http://localhost:3000/api/home/');
    })
    .catch(error => {
      console.log(error);
    });
    */
  }
  const getPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/home/');
      console.log(response);
      setEntries(response.data)

    } catch (error) {
      console.error(error);
    }
  }

  const [open, setOpen] = useState(false);
  const openModal = () => {
    setOpen(prevOpen => !prevOpen);
  }

  const filterPost = () => {

    var cadena = inputVal.toLowerCase();
    //Extracción de los elementos que contienen el nombre 

    var rows = document.getElementsByClassName('myCard');
    
    Object.keys(rows).forEach(function (key){
      var title = rows[key].getElementsByClassName("bodyTitle")[0].innerText;
  
      console.log(title.indexOf(cadena));
      if (title.indexOf(cadena) != -1) {
        rows[key].style.display = "block";
      }
      else {
        rows[key].style.display ="none";
      }
    });
    
  }

  const readInput = (inputValue) => {
    setInputVal(inputValue)
  }

  return (
   
    <>
      <Modal controller={open} onClose={openModal} insertData={post}/>
      <NavBar showModal={openModal} filter={filterPost} inputValue={e => readInput(e.target.value)}/>
      
      
      <div className="container entries">
        {entries.map(entry => (
          <div className="row myCard" >
            <div className="col-sm-6">
              <BlogCard
                key={entry._id}
                alt={`${entry.name}`.jpg}
                src={BC}
                title={entry.title} 
                text={entry.text} 
                id ={entry._id}  
              />
            </div>

            <div className="col-sm-6 "> 
              <h3 className="bodyTitle">Título: {entry.title}</h3>
              <h5 className="bodyText">Descripción: {entry.text.length <=100 ? entry.text : `${entry.text.substring(0,100)}...`}</h5>
            </div>
          </div>
        ))}
      </div>
       
        
      
    </>
  );
}

export default Counter;