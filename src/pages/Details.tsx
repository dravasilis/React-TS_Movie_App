import { useParams } from "react-router-dom";
import { details } from "./DetailsInterface";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router";
import Navbar from "./Navbar"; 
import Logo from "./Logo";

const Details = () => {
    const [movieDetails,setMovieDetails] = useState<details>();
    const {id} = useParams();
    const history = useHistory();
    const [isLoading,setIsLoading] = useState(true);
    
        const handleFetch = async () => { 
                const url= `http://www.omdbapi.com/?i=${id}&apikey=c929ee88`; 
                const response = await fetch(url);
                const json = await response.json(); 
                if(json) {
                     setMovieDetails(json); 
                } 
            }
        useEffect(()=>{
            handleFetch();
        },[]);

    const handleBack = () =>{
        history.go(-1);
    }
    return ( 
        <div className="bg-dark text-white w-100 h-100"> 
        <div>
        <Logo/> 
            <Button className="p-3 border-0 text-white   text-white-50 bg-dark " onClick={handleBack}>Back</Button> 
        </div>
            {isLoading ? <div className="text-white bg-black bg-gradient vh-100 text-center fs-1 pt-5">Loading...</div>
            :
                <div className="d-flex flex-column align-items-center">
                        <div className="d-flex flex-column align-items-center bg-black bg-gradient w-100 pb-5">
                            <h1 >{movieDetails?.Title}</h1>
                            <div className="d-flex fst-italic">
                                <h6 className="border-1 border-end me-2 pe-2">{movieDetails?.Year}</h6>
                                <h6 className="border-1 border-end me-2 pe-2">{movieDetails?.Rated}</h6>
                                <h6 className="border-1 border-end me-2 pe-2">{movieDetails?.Runtime}</h6>
                                <h6>{movieDetails?.Genre}</h6>
                            </div>
                            <img className="  border border-5 border-secondary rounded mt-3 mb-5 " src={movieDetails?.Poster}   />
                            <div className="d-flex flex-column w-25 pb-5 mb-5 ">
                                <h5 className="border-bottom border-1 mb-2 pb-2  rounded-start lh-base">Director: {movieDetails?.Director}</h5>
                                <h5 className="border-bottom border-1 mb-2 pb-2  rounded-start lh-base">Writer: {movieDetails?.Writer}</h5>
                                <h5 className="border-bottom border-1 mb-2 pb-2  rounded-start lh-base">Actors: {movieDetails?.Actors}</h5>
                                <h3 className="text-center mt-2 fst-italic">Storyline:</h3>
                                <h5 className="text-center border-bottom border-1 mb-2 pb-2  rounded-start lh-base">{movieDetails?.Plot}</h5> 
                            </div>
                        </div>
                        
                        <div className="d-flex flex-column w-100 text-black bg-warning bg-gradient   align-items-center">
                            <h1 className="mt-3 mb-3 fst-italic">Details:</h1>     
                            <div className="d-flex column-gap-5 ">
                                <div className="w-100 d-flex flex-column row-gap-3 border-start border-1 border-black justify-content-between ">  
                                    <h5 className="mb-2 ms-2 pb-2  text-start lh-base">- Release Date: {movieDetails?.Released}</h5>
                                    <h5 className="mb-2 ms-2 pb-2  text-start lh-base">- Language: {movieDetails?.Language}</h5>
                                    <h5 className="mb-2 ms-2 pb-2  text-start lh-base">- Country: {movieDetails?.Country}</h5>
                                </div>
                                <div className="w-100 d-flex flex-column row-gap-3 border-start border-1 border-black justify-content-between"> 
                                    <h5 className="mb-2 ms-2 pb-2  text-start lh-base ">- Awards: {movieDetails?.Awards}</h5>
                                    <h5 className="mb-2 ms-2 pb-2  text-start lh-base">- Metascore: {movieDetails?.Metascore}  </h5>
                                    <h5 className="mb-2 ms-2 pb-2  text-start lh-base">- imdbRating: {movieDetails?.imdbRating}</h5>
                                    <h5 className="mb-2 ms-2 pb-2  text-start lh-base">- imdbVotes: {movieDetails?.imdbVotes}</h5>
                                </div>
                                <div className="w-100 d-flex flex-column row-gap-3 border-start border-1 border-black justify-content-between"> 
                                    <h5 className="mb-2 ms-2 pb-2  text-start lh-base">- imdbID: {movieDetails?.imdbID}</h5>
                                    <h5 className="mb-2 ms-2 pb-2  text-start lh-base">- Type: {movieDetails?.Type}  </h5>
                                    <h5 className="mb-2 ms-2 pb-2  text-start lh-base">- DVD: {movieDetails?.DVD}</h5>
                                    <h5 className="mb-2 ms-2 pb-2  text-start lh-base">- BoxOffice: {movieDetails?.BoxOffice}</h5>
                                </div>
                                <div className="w-100 d-flex flex-column row-gap-3 border-start border-1 border-black justify-content-between">  
                                    <h5 className="mb-2 ms-2 pb-2  text-start lh-base">- Production: {movieDetails?.Production}</h5>
                                    <h5 className="mb-2 ms-2 pb-2  text-start lh-base">- Website: {movieDetails?.Website}  </h5>
                                    <h5 className="mb-2 ms-2 pb-2  text-start lh-base">- Response: {movieDetails?.Response}</h5> 
                                </div>
                        </div>
                        
                            
                        </div>
                    </div>

        }



            {/*      
            {movieDetails?.Ratings.map((i)=>(
                <div>
                    <h1>Rating Source:{i.source}</h1>
                    <h1>Rating Value:{i.value}</h1>
                </div>
                
            ))}           
            */}
        </div>
            
     );
}
 
export default Details;
