import { useState } from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar"; 
import { useEffect } from "react";
import NotFound from "./NotFound";  
import { Slide } from 'react-slideshow-image';  
import Slider from "./Slider";
 

const Home = () => {
    const [movies,setMovies]= useState([] as any[]);
    const [series,setSeries]= useState([] as any[]);
    const [games,setGames]= useState([] as any[]);
    const [sk,setSk] = useState('movie'); 
    const [type,setType] = useState<String>('');
    const [flag,setFlag] = useState<Boolean>();
    const [typeFlag1,setTypeFlag1] = useState<Boolean>(false);
    const [typeFlag2,setTypeFlag2] = useState<Boolean>(false);
    const [recommendationsFlag, setRecommendationsFlag] = useState(true);
    const [isLoading,setIsLoading] =useState(true);



    //TYPE
    const handleFetchMovies =  () => {
        setType('movie'); 
        setSk('movie');
        setRecommendationsFlag(false);
        setTypeFlag1(true);
        setTypeFlag2(false);   
    }

    const handleFetchSeries =  () => {
        setType('series'); 
        setSk('series');
        setRecommendationsFlag(false);

        setTypeFlag1(false);
        setTypeFlag2(true); 
    }
    const handleFetchGames =  () => {
        setType('game'); 
        setSk('game');
        setRecommendationsFlag(false);

        setTypeFlag1(false);
        setTypeFlag2(true); 
    }

    //YEAR
    const handleDec = () =>{  
        movies.sort((a, b) => (a.Year > b.Year ? -1 : 1)); 
        if(flag){
            setFlag(false);
        }
        else if(!flag){
            setFlag(true);
        }
        
    }
    const handleInc = () =>{  
        movies.sort((a, b) => (a.Year < b.Year ? -1 : 1)); 
        if(flag){
            setFlag(false);
        }
        else if(!flag){
            setFlag(true);
        }
    }

    //ALPHABET
    const handleAlphabetDec = () => {
        movies.sort((a, b) => (a.Title > b.Title ? -1 : 1)); 
        if(flag){
            setFlag(false);
        }
        else if(!flag){
            setFlag(true);
        }
    }
    const handleAlphabetInc = () => {
        movies.sort((a, b) => (a.Title < b.Title ? -1 : 1)); 
        if(flag){
            setFlag(false);
        }
        else if(!flag){
            setFlag(true);
        }
    }

    //SEARCH
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => { 
        if(event.target.value.length >= 3){
            setRecommendationsFlag(false);
            setSk(event.target.value);  
        }  
        else if(event.target.value.length <3 && event.target.value.length >=1 ){
            setSk('');
        }
        else if(event.target.value.length ==0 ){
            setRecommendationsFlag(true);
            setSk('bla');
            setType('movie');
        }

    }


    const handleFetch = async () => {  
            let url= `http://www.omdbapi.com/?s=${sk}&apikey=c929ee88&type=${type}`; 
            let response = await fetch(url);
            let json = await response.json(); 
            if(json.Search) { 
                setMovies(json.Search);  
            } 
             url= `http://www.omdbapi.com/?s=series&apikey=c929ee88&type=series`; 
             response = await fetch(url);
             json = await response.json(); 
            if(json.Search) { 
                setSeries(json.Search);  
            } 
             url= `http://www.omdbapi.com/?s=game&apikey=c929ee88&type=game`; 
             response = await fetch(url);
             json = await response.json(); 
            if(json.Search) { 
                setGames(json.Search);  
            }  
            setTimeout(() => {
                 setIsLoading(false);
            }, 1000);
          
    }
    
    useEffect(()=>{ 
        handleFetch();  
    },[type,sk]);

     
    return ( 
        <div >
            
            
            <Navbar handleDec = {handleDec} handleInc={handleInc} handleAlphabetDec={handleAlphabetDec} handleAlphabetInc={handleAlphabetInc} 
            handleFetchMovies ={handleFetchMovies} handleFetchSeries={handleFetchSeries} handleFetchGames={handleFetchGames} handleSearch={handleSearch}/> 
         
            {sk=='' ? <NotFound /> 
            :
                isLoading ? <div className="text-white bg-black bg-gradient vh-100 text-center fs-1 pt-5">Loading...</div>
                :
                        recommendationsFlag ? (
                            <div className="MOVIES AND SERIES SLIDERS text-white bg-black bg-gradient">
                                <div className="d-flex flex-column align-items-center p-5 MOVIES">

                                    <h1 className="border-bottom p-2 m-4 mb-5 w-50 text-center text-white border-3 rounded-bottom    ">Movies</h1>
                                    <Slider movies={movies} />

                                    <h1 className="border-bottom p-2 m-4 mb-5 mt-5 pt-5 w-50 text-center border-3 rounded-bottom " >Series</h1>
                                    <Slider  movies={series} />

                                    <h1 className="border-bottom p-2 m-4 mb-5 mt-5 pt-5 w-50 text-center border-3 rounded-bottom " >Games</h1>
                                    <Slider movies={games} />

                                </div>   
                                
                    
                            </div>
                        )
                        : 
                        ( 
                            <MovieList movies={movies} typeFlag1={typeFlag1} typeFlag2={typeFlag2} recommendationsFlag={recommendationsFlag}/> 
                        
                        )
            }
             
            
        </div>
        
     );
}
 
export default Home;
