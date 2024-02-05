import { useState } from "react";

const FilterHousesInput = ({ filterHouses }) => {
    const [filterPrice, setFilterPrice] = useState();
    return (
        <div className="row my-3 mb-5">
            <div className="col-md-8">

            </div>
            <div className="col-md-4">
                <form onSubmit={filterHouses(filterPrice)}>
                    <input 
                        className="form-control" 
                        placeholder="Filter by Price"
                        value={filterPrice}
                        onChange={(e) => setFilterPrice((prevFilterPrice)=>e.target.value)}
                    />
                 </form>
            </div>
        </div>
    );
}

export default FilterHousesInput;