import React, {useState} from 'react'
import "./Search.css"
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range'
import PeopleIcon from '@material-ui/icons/People'
import {useHistory} from 'react-router-dom'


const Search = () => {
    const history = useHistory()
    const [startDate, setstartDate] = useState(new Date())
    const [endDate, setendDate] = useState(new Date())
    const handleSelect = (ranges) => {
        setstartDate(ranges.selection.startDate);
        setendDate(ranges.selection.endDate);
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };
    return (
        <div className="search">
           <DateRangePicker ranges = {
               [selectionRange]
           } onChange={handleSelect}/>
           <h2>Number of guest
               <PeopleIcon/>
           </h2>
           <input type="number" min={0} defaultValue={2}/>
           <button onClick={()=>history.push('/search')}>Search Airbnb</button>          
        </div>
    )
}

export default Search
