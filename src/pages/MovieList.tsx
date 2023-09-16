import { useState } from "react";
import { movie } from "./Movie"; 
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

type moviesProps = {
    movies: movie[] 
    typeFlag1: any
    typeFlag2: any
    recommendationsFlag: any
}
const MovieList = (props:moviesProps) => {
    
    
    return (   
                <Container className="mw-100 object-fit-cover"> 
                    <h1 className="d-flex text-white justify-content-center">
                {props.typeFlag1 ? "Movies"
                :props.typeFlag2 ? "Series"
                :"Movies and Series"}
            </h1>
                    <Row className="row-eq-height">
                    {props.movies.map((i)=>(
                        <Col className='mb-4 mt-4'>
                            <Card className="shadow-lg " style={{ height: '100%', width:'25rem'}}>
                            <a className="h-75" href={'Details/'+i.imdbID}>
                                <Card.Img   className="wallpaper er h-100" variant="top" src={i.Poster} />
                            </a>
                        
                            <Card.Body className="h-25" >
                                <h1 className="titles">
                                    <Card.Title>{i.Title}</Card.Title>
                                </h1>
                            <Card.Text>
                                <h2>{i.Year}</h2>
                            </Card.Text>
                                
                            </Card.Body>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                
                </Container> 
               
                
                
             
        
         
     );
}
 
export default MovieList;