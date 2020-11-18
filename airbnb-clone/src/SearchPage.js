import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>25 stays | 26 August to 30 august | 2 guest</p>
                <h1>Stays nearby</h1>
                <button>Cancellation flexibility</button>
                <button>Type of place</button>
                <button>Price</button>
                <button>Rooms and beds</button>
                <button>More filters</button>
            </div>
            <SearchResult
                img = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in Center of Australia"
                title = "Stay at this spacious Edwardian House"
                description ="1 guest | 1 bedroom | 1 bed | 1.5 shared bathrooms | wifi | Kitchen | Free Parking"
                star = {4.75}
                price = "$50/ night"
                total = "$200 total"

            />
             <SearchResult
                img = "https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                location="Private room in Center of Australia"
                title = "Independent Luxiury studio apartment"
                description ="1 guest | 1 bedroom | 1 bed | 1.5 shared bathrooms | wifi | Kitchen | Free Parking"
                star = {4.75}
                price = "$60/ night"
                total = "$130 total"

            />
              <SearchResult
                img = "https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                location="Private room in Center of Australia"
                title = "Most rated by customers"
                description ="1 guest | 1 bedroom | 1 bed | 1.5 shared bathrooms | wifi | Kitchen | Free Parking"
                star = {4.75}
                price = "$85/ night"
                total = "$180 total"

            />
              <SearchResult
                img = "https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                location="Private room in Center of Australia"
                title = "5 Star Luxury Apartment"
                description ="1 guest | 1 bedroom | 1 bed | 1.5 shared bathrooms | wifi | Kitchen | Free Parking"
                star = {4.75}
                price = "$35/ night"
                total = "$115 total"

            />
        </div>
    ) 
}

export default SearchPage

