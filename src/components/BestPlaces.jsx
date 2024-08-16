import React from 'react';
import ListMap from './reUseComponent/ListMap';

const BestPlaces = () => {

    const items = [
        "Best Restaurants in Bangalore",
        "Best Restaurants in Pune",
        "Best Restaurants in Mumbai",
        "Best Restaurants in Mumbai",
        "Best Restaurants in Hyderabad",
        "Best Restaurants in Kolkata",
        "Best Restaurants in Chennai",
        "Best Restaurants in Chandigarh",
        "Best Restaurants in Ahmedabad",
        "Best Restaurants in Jaipur",
        "Best Restaurants in Jaipur",
        "Best Restaurants in Bhubaneswar",
        "Best Restaurants in Kochi",
        "Best Restaurants in Surat",
        "Best Restaurants in Dehradun",
        "Best Restaurants in Ludhiana",
        "Best Restaurants in Patna",
        "Best Restaurants in Mangaluru",
        "Best Restaurants in Bhopal",
        "Best Restaurants in Gurgaon",
        "Best Restaurants in Coimbatore",
        "Best Restaurants in Agra",
        "Best Restaurants in Noida",
        "Best Restaurants in Vijayawada",
        "Best Restaurants in Guwahati",
        "Best Restaurants in Mysore",
        "Best Restaurants in Pondicherry",
        "Best Restaurants in Thiruvananthapuram",
        "Best Restaurants in Ranchi",
        "Best Restaurants in Vizag",
        "Best Restaurants in Udaipur",
        "Best Restaurants in Vadodara",
    ];

    return (
        <>
            <div className="max-w-[1200px] mx-auto">
                <div className="flex items-center justify-between my-3">
                    <h1 className="text-[25px] font-bold">Best Places to Eat Across Cities</h1>
                </div>

                <div className="flex flex-wrap justify-center gap-7 mb-14">
                    {/* Reusable component  */}
                    <ListMap items={items} width="w-[278px]" />
                </div>
            </div>
        </>
    )
}

export default BestPlaces