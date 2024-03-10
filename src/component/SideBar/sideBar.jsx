import { useState } from 'react';
import './sidebar.css';
import { useValue } from '../../Ecom-context';

export const SideBar = () => {
    const { meterChange, meterValue, checkBoxChange, ratingChange } = useValue();

    const [checkFilter, setCheckFilter] = useState(false);
    const [show, setShow] = useState("");

    function handleFilterChange() {
        if (checkFilter) {
            setShow('hideSideBar');
        } else {
            setShow('showSidebar');
        }
        setCheckFilter(!checkFilter);
    }

    return (
        <>
            <div className='responsive' onClick={handleFilterChange}>
                {checkFilter ?
                    <>
                        <span>Click here to show result</span>
                        <span className='bi bi-x-circle ms-2'></span>
                    </>
                    :
                    <>
                        <span>Filter</span>
                        <span className='bi bi-list ms-2'></span>
                    </>
                }
            </div>

            <div className={`sidebar_container ${show}`}>
                <h3 className='filter'>Filter</h3>
                <div className='meter_container'>
                    ₹10 <input type="range" step="10" value={meterValue} min="10" max="1000" onChange={meterChange} /> ₹1000
                    <p>Price : {meterValue}</p>
                </div>

                <div className='category_container'>
                    <h4>Filter by category</h4>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="jewelery" id="flexCheckDefault" onChange={checkBoxChange} />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            jewelery
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="electronics" id="flexCheckChecked" onChange={checkBoxChange} />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            electronics
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="men's clothing" id="flexCheckChecked" onChange={checkBoxChange} />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            men's clothing
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="women's clothing" id="flexCheckChecked" onChange={checkBoxChange} />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            women's clothing
                        </label>
                    </div>
                </div>

                <div className='rating-container'>
                    <h4>Filter by rating</h4>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="4" onChange={ratingChange} />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            <i className='bi bi-star-fill  text-warning' />
                            <i className='bi bi-star-fill  text-warning' />
                            <i className='bi bi-star-fill  text-warning' />
                            <i className='bi bi-star-fill  text-warning' />
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="3" onChange={ratingChange} />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            <i className='bi bi-star-fill text-primary' />
                            <i className='bi bi-star-fill text-primary' />
                            <i className='bi bi-star-fill text-primary' />
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="2" onChange={ratingChange} />
                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                            &lt;
                            <i className='bi bi-star-fill text-danger ms-1' />
                            <i className='bi bi-star-fill text-danger' />
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};
