import React, {useState}from 'react'
import Search from './Search'
import './Banner.css'
import {DateRangePicker} from 'react-date-range'
import { useHistory } from 'react-router-dom'



const Banner = () => {
    const history = useHistory();
    const [showSearch, setshowSearch] = useState(false);  

    return (
        <div className="banner">
            <div className="banner__search"> 
            {showSearch && <Search/>}       
                <button onClick={()=>setshowSearch(!showSearch)} className="search__button">
                    {!showSearch ? 'Search Dates' : 'Hide'}
                </button>          
            </div>
            <div className="banner__info">
                <h1>Go Near </h1>
                <p>There's alot to discover</p>
                <p>From Home. Or a short drive away.</p>
                <button onClick = {()=> history.push('/search')}className="banner__button">Explore nearby</button>
                
            </div>
        </div>
    )
}

export default Banner
