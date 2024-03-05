import { useState } from 'react'
import './sidebar.css'


export const SideBar = () => {
    const [checkFilter, setCheckFlter] = useState(false);
    const [show, setShow] = useState("")

    function handleFilterChange() {

        if (checkFilter) {
            setShow('hideSideBar')
        } else {
            setShow('showSidebar')

        }
        setCheckFlter(!checkFilter);
    }

    return (
        <>

            <div className='responsive' onClick={handleFilterChange}>
                {
                    checkFilter ?
                        (
                            <>
                                <span>Click here to show result</span>  <span className='bi bi-x-circle ms-2'></span>

                            </>
                        )
                        : (
                            <><span>Filter</span>  <span className='bi bi-list ms-2'></span>

                            </>
                        )
                }

            </div>

            <div className={`sidebar_container ${show}`}>

                <h3 className='filter'>Filter</h3>
                <div className='meter_container'>
                    ₹10 <input type="range" step="10" value="20" min="10" max="100" /> ₹1000
                    <p>Price : 0</p>
                </div>

                <div className='category_conatiner'>
                    <h4>Filter by category</h4>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            jewelery
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            electronics
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            men's clothing
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label class="form-check-label" for="flexCheckChecked">
                            women's clothing
                        </label>
                    </div>
                </div>

                <div className='rating-container'>
                    <h4>Filter by rating</h4>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            <i className='bi bi-star-fill  text-warning' />
                            <i className='bi bi-star-fill  text-warning' />
                            <i className='bi bi-star-fill  text-warning' />
                            <i className='bi bi-star-fill  text-warning' />
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2">
                            <i className='bi bi-star-fill text-primary' />
                            <i className='bi bi-star-fill text-primary' />
                            <i className='bi bi-star-fill text-primary' />
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2">
                            &lt;
                            <i className='bi bi-star-fill text-danger ms-1' />
                            <i className='bi bi-star-fill text-danger' />
                        </label>
                    </div>

                </div>
            </div>
        </>
    )
}