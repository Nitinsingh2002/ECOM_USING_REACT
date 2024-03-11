import { useValue } from '../../Ecom-context';
import './search.css'

export default function SearchBar() {

    const { handleSearchBarChange } = useValue();
    return (
        <div className='div_container' >
            <input type=" text" placeholder="Enter Name of Product" onChange={handleSearchBarChange} />
        </div>
    );
}
