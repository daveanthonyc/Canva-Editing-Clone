import './Searchbar.css'

function Searchbar() {
    return ( 
    <form action="" className='search-bar-main'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.2 16.34a7.5 7.5 0 1 1 1.38-1.45l4.2 4.2a1 1 0 1 1-1.42 1.41l-4.16-4.16zm-4.7.16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
        <input type="text" className="search-bar-input" placeholder='Search text'/>
    </form> );
}

export default Searchbar;