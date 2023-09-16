import './Navbar.css';  

interface navProps{ 
    handleDec: (values: any) => void;
    handleInc: (values: any) => void;
    handleAlphabetDec: (values: any) => void;
    handleAlphabetInc: (values: any) => void;
    handleFetchMovies: (values: any) => void;
    handleFetchSeries: (values: any) => void;
    handleFetchGames: (values: any) => void;
    handleSearch: (values: any) => void;
}


const Navbar = (props: navProps) => {  
     
 
    return ( 
        <div className="container mw-100 p-0 "   >
            <div className='nav pt-2 d-flex justify-content-evenly'>
                <div className='leftpart w-50 justify-content-center'>
                      
                        <h1 className='w-15'>Movie App</h1> 
                   
                    

                    <div className='search w-50 h-100'> 
                        <input  className='w-100 rounded-pill h-75'
                        type="text" 
                        placeholder='Type Movie or Series' 
                        onChange={(e) => { 
                            props.handleSearch(e);
                        }}
                        /> 
                    </div>

                    
                </div>
                <div className='rightpart w-50'>
                <div className='radio'>
                        <div>
                            <span className="release-date">Release Date</span>
                        </div>
                        <div>
                                <fieldset className='text-center'> 
                                            <p> 
                                            <input 
                                            type="radio" 
                                            value="dec" 
                                            id="dec"   
                                            name='onix'  
                                            onClick= {props.handleDec}
                                            />
                                            <label>Dec</label>
                                            </p> 
                                            <p>
                                            
                                            
                                            <input 
                                            type="radio" 
                                            value="inc"   
                                            id="inc"
                                            name='onix'  
                                            onClick= {props.handleInc} 
                                            />
                                            <label>Inc</label> 
                                            </p>
                                    </fieldset>  
                                </div>
                    </div>
                    <div className='radio'>
                        <div>
                            <span className="release-date">Alphabetical Order</span>
                        </div>
                        <div>
                                <fieldset className='text-center'> 
                                            <p> 
                                            <input 
                                            type="radio" 
                                            value="dec" 
                                            id="dec"   
                                            name='bulbasar' 
                                            onClick={props.handleAlphabetDec} 
                                            />
                                            <label>Dec</label>
                                            </p> 
                                            <p>
                                            
                                            
                                            <input 
                                            type="radio" 
                                            value="inc"   
                                            id="inc"
                                            name='bulbasar' 
                                            onClick={props.handleAlphabetInc} 
                                            />
                                            <label>Inc</label> 
                                            </p>
                                    </fieldset>  
                                    
                                </div>
                    </div>
                    
                            <div className='type'>
                            <span className="release-date">Type</span>
                                    <fieldset className='text-center'> 
                                            <p>
                
                                            <input 
                                            type="radio"  
                                            value="movie" 
                                            id="movie"    
                                            name='pikachu' 
                                            onClick={props.handleFetchMovies} 
                                            />
                                            <label htmlFor="movie">movies</label>
                                            </p> 
                                            <p>

                                            
                                            <input 
                                            type="radio" 
                                            value="series"   
                                            id="series"
                                            name='pikachu' 
                                            onClick={props.handleFetchSeries} 
                                            />
                                            <label htmlFor="series">series</label> 
                                            </p>

                                            <p>

                                            
                                            <input 
                                            type="radio" 
                                            value="games"   
                                            id="games"
                                            name='pikachu' 
                                            onClick={props.handleFetchGames} 
                                            />
                                            <label htmlFor="games">games</label> 
                                            </p>
                                    </fieldset>
                    </div>
                
                </div>
                
            
            </div>

           
            
                
           
        </div>
        
     );
}
 
export default Navbar;