import React from "react";
import Cards from './Cards';

const CardList = ( {otakus }) => {
    return(
        <div>
            { otakus.map((user, i) => {
        return( <Cards
        key={i}
         id={otakus[i].id}
         name={otakus[i].name} 
         email={otakus[i].email}/>
        )
    })}
        </div>
    );
}
export default CardList;