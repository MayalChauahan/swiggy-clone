import React from 'react';
import ListMap from './reUseComponent/ListMap';

const ExploreRestaurants = () => {

    const items = [
        "Explore Restaurants Near Me",
        "Explore Top Rated Restaurants Near Me",
    ];

    return (
        <>
            <div className="max-w-[1200px] mx-auto">
                <div className="flex items-center justify-between my-3">
                    <h1 className="text-[25px] font-bold">Explore Every Restaurants Near Me</h1>
                </div>

                <div className="flex flex-wrap justify-center gap-7 mb-14">
                    {/* Reusable component  */}
                    <ListMap items={items} width="w-[48%]" />
                </div>
            </div>
        </>
    )
}

export default ExploreRestaurants