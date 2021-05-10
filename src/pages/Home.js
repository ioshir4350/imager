import { useState } from 'react';
import axios from 'axios'

function Home() {

  const [file, setFile] = useState()
  const [description, setDescription] = useState("")
  const [images, setImages] = useState([])

  const fileChangeHandler = (event) => {
    setFile(event.target.files[0])
  }

  const descChangeHandler = (event) => {
    setDescription(event.target.value)
  }

  const submit = async () =>{ 
    
    const formData = new FormData()
    formData.append("image", file)
    formData.append("description", description)
    console.log(file);
    console.log(description);
    console.log(formData);
    const response = await axios.post(process.env.REACT_APP_BACK+'/api/addImg', formData)
    window.location = '/'

  }



  return (
    <div className="App" style={{textAlign: 'center'}}>
      
        <input type="file" onChange={fileChangeHandler}/>
        <br/>
        <label>Attach a Title</label>
        <input type="text" onChange={descChangeHandler}/>
        <button onClick={submit}>Submit</button>
      
    </div>
  );
}

export default Home;
