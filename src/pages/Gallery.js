import { useState, useEffect } from 'react';
import axios from 'axios'
import {Row, Col, Container} from 'react-bootstrap'

function Gallery() {

    const [gallery, setGallery] = useState([])

    useEffect(() => {
        axios.get(process.env.REACT_APP_BACK+'/api/getAllImages').then(response => {
            console.log(response);
            setGallery(response.data.images)
        })
    }, [])

  return (
    <div>
        {
            gallery.map((img) => {
                return (
                    <Container style={{paddingTop: '90px', textAlign: 'center'}}>
                        <Row>
                            <Col>
                                <img style={{width: '100%'}} src={process.env.REACT_APP_BACK+'/images/'+img.Key}/>
                            </Col>
                            <Col>
                                <h2>Keywords</h2>
                                {
                                    img.keywords.map(word => {
                                        return <p style ={{display: 'inline-block'}}>{word}, </p>
                                    })
                                }
                            </Col>
                        </Row>
                        
                    </Container>
                )
            })
        }
    </div>
  );
}

export default Gallery;
