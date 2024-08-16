import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const ListMap = ({ items, width }) => {
   
    const [showAll, setShowAll] = useState(false);
    const itemsToShow = showAll ? items : items.slice(0, 11);

    const ItemComponent = ({ item }) => (
        <div className={`p-2 border ${width} text-center rounded-lg`}>
            <h3 className="text-lg font-medium text-[16px]">
                {item.length > 37 ? `${item.slice(0, 30)}...` : item}
            </h3>
        </div>
    );

    return (
        <>
            {itemsToShow.map((item, index) => (
                <ItemComponent key={index} item={item} />
            ))}
            {/* Show More button */}
            {!showAll && items.length > 11 && (
                <div className={`p-2 border ${width} text-center rounded-lg`}>
                    <button onClick={() => setShowAll(true)} className="text-lg font-medium text-[16px]">
                        Show More <IoIosArrowDown className="inline ms-1" />
                    </button>
                </div>
            )}
        </>
    )
}

export default ListMap