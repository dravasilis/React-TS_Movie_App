import { movie } from "./Movie";  
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css' 
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '600px'
  }

type moviesProps = {
    movies: movie[]  
}

const Slider = (props: moviesProps) => {
    
    return ( 
        <div className="slide-container w-25    border-2 p-2     rounded-bottom bg-black"> 
            <Slide >
                {props.movies.map((slideImage, index)=> (
                    <div key={index}>
                        <a className="text-decoration-none " href={'Details/'+slideImage.imdbID}>
                            <div className="rounded w-100  "  style={{ ...divStyle, 'backgroundImage': `url(${slideImage.Poster})` }}/>  
                            <h2 className="mt-4 text-white   text-center w-100 fst-italic shadow-5-strong">- {slideImage.Title}</h2>
                            <h3 className="mt-4 text-white   text-center w-100 fst-italic shadow-5-strong"> {slideImage.Year}</h3>
                        </a>
                    </div>
                ))} 
            </Slide>
      </div>
     );
}
 
export default Slider;