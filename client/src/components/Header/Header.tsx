import './Header.css'
import './HomeButton/HomeButton'
import './NavItem/NavItem'
import HomeButton from './HomeButton/HomeButton';
import NavItem from './NavItem/NavItem';
import UploadButton from './UploadButton/UploadButton';

function Header() {
    return ( <header className='main-header'>
        <nav className="main-nav flex-horizontal">
            <div className='nav-block-left nav-block'>
                <HomeButton />
                <NavItem><span className='span-block'>File</span></NavItem>
                <div className='vertical-bar'></div>
                <NavItem>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m6.05 7.25 2.22-2.22A.75.75 0 0 0 7.2 3.97L4.43 6.75c-.69.68-.69 1.8 0 2.48l2.83 2.83A.75.75 0 0 0 8.32 11L6.07 8.75H16a4.25 4.25 0 1 1 0 8.5h-4a.75.75 0 1 0 0 1.5h4a5.75 5.75 0 0 0 0-11.5H6.05z"></path>
                    </svg>
                </NavItem>
                <NavItem>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="m18.054 7.252-2.296-2.296a.75.75 0 0 1 1.06-1.06l2.83 2.828a1.75 1.75 0 0 1 0 2.475l-2.832 2.831a.75.75 0 0 1-1.06-1.06l2.219-2.22H8a4.25 4.25 0 0 0 0 8.5h4a.75.75 0 0 1 0 1.5H8a5.75 5.75 0 0 1 0-11.5h10c.018 0 .036 0 .054.002Z"></path>
                    </svg>
                </NavItem>
                <div className='vertical-bar'></div>
                <NavItem>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 3a6 6 0 0 0-5.99 5.661A5.627 5.627 0 0 0 7 19.5v.001h10v-.001a5.625 5.625 0 0 0 2.67-10.506l-1.114 1.114a4.126 4.126 0 0 1-1.806 7.891V18h-9.5v-.002a4.125 4.125 0 0 1-.681-8.21 4.5 4.5 0 0 1 8.549-2.606l1.116-1.117A5.998 5.998 0 0 0 11 3Zm7.631 4.91a.75.75 0 1 0-1.053-1.068L10.67 13.75l-1.93-1.93a.75.75 0 1 0-1.088 1.03l-.001.002 2.444 2.445a.748.748 0 0 0 1.11.037v.001l7.425-7.424Z" fill="currentColor"></path>
                    </svg>
                </NavItem>
            </div>

            <div className='nav-block-right nav-block'>
                <form action="">
                    <input type="text" className='document-title-input' placeholder='Untitled Design - Logo'/>
                </form>
                <div className='dp-container'></div>
                <UploadButton />
            </div>
        </nav>
    </header> );
}

export default Header;