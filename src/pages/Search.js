import { useState, useEffect } from 'react';
import axios from 'axios'
import { Container, Row } from 'react-bootstrap';

function Search() {

    const [searchResults, setSearchResults] = useState([])

    const searchValHandler = (event) => {
        if (event.target.value != ""){
            axios.get(process.env.REACT_APP_BACK+'/api/getImageID/'+event.target.value.toString().toLowerCase()).then(response => {
                console.log(response);
                if (response.data.searchResults.length>0){
                    setSearchResults(response.data.searchResults)
                } 
            })
        } else{
            setSearchResults([])
        }
    }




  return (
    <div className="App" style={{textAlign: 'center'}}>
        <input type="text" name="searchVal" onChange={searchValHandler}/>
        <Container style={{textAlign: 'center', marginTop: '50px'}}>
        {
            searchResults.map((img) => {
                return (
                    <Row style={{textAlign:'center', paddingTop: '40px'}}>
                        <img style={{width: '40%'}} src={process.env.REACT_APP_BACK+'/images/'+img}/>
                    </Row>
                )
            })
        }
        </Container>
    </div>
  );
}

export default Search;
