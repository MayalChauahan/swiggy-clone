import React from 'react';
import ListMap from './reUseComponent/ListMap';

const NearMe = () => {

    const items = [
        "Chinese Restaurant Near Me",
        "South Indian Restaurant Near Me",
        "Indian Restaurant Near Me",
        "Kerala Restaurant Near Me",
        "Korean Restaurant Near Me",
        "North Indian Restaurant Near Me",
        "Seafood Restaurant Near Me",
        "Bengali Restaurant Near Me",
        "Punjabi Restaurant Near Me",
        "Italian Restaurant Near Me",
        "Andhra Restaurant Near Me",
        "Biryani Restaurant Near Me",
        "Japanese Restaurant Near Me",
        "Arabian Restaurant Near Me",
        "Fast Food Restaurant Near Me",
        "Jain Restaurant Near Me",
        "Gujarati Restaurant Near Me",
        "Thai Restaurant Near Me",
        "Pizzas Restaurant Near Me",
        "Asian Restaurant Near Me",
        "Cafe Restaurant Near Me",
        "Continental Restaurant Near Me",
        "Mexican Restaurant Near Me",
        "Mughlai Restaurant Near Me",
        "Sushi Restaurant Near Me",
        "Mangalorean Restaurant Near Me",
        "Tibetan Restaurant Near Me",
        "Barbecue Restaurant Near Me",
        "Maharashtrian Restaurant Near Me",
        "Nepalese Restaurant Near Me",
        "Rajasthani Restaurant Near Me",
        "Turkish Restaurant Near Me",
    ];

    return (
        <>
            <div className="max-w-[1200px] mx-auto">
                <div className="flex items-center justify-between my-3">
                    <h1 className="text-[25px] font-bold">Best Cuisines Near Me</h1>
                </div>

                <div className="flex flex-wrap justify-center gap-7 mb-10">
                    {/* Reusable component  */}
                    <ListMap items={items} width="w-[278px]" />
                </div>
            </div>
        </>
    )
}

export default NearMe