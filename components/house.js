import currencyFormatter from "@/helpers/currencyFormatter";
// import defaultPhoto from '../helpers/defaultPhoto';

const House = ({ house }) => {
    return (
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <img 
                    className="img-fluid"
                    src={
                        house.photo ? `/images/${house.photo}.jpeg` : ''
                    }

                    alt="House pic"
                    />
                </div>
            </div>
            <div className="col-6">
                <div className="row mt-2">
                    <h5 className="">{house.country}</h5>
                    <h3 className="text-bold">{house.address}</h3>
                    <h4 className="themeFontColor">{currencyFormatter.format(house.price)}</h4>
                    <p className="houseDescr">{house.description}</p>

                </div>
            </div>
        </div>
    );
}

export default House;