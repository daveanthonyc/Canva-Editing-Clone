import './HomeButton.css'

function HomeButton() {
    return ( <a href="https://www.canva.com/" aria-label="Home" className='homeButton'> 
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='homeButton-house'>
            <path d="M11.03 3.327a1.599 1.599 0 0 1 1.94 0l7.384 5.61c.407.31.646.795.646 1.31v9.117c0 .903-.723 1.636-1.615 1.636h-3.762a1.626 1.626 0 0 1-1.615-1.636V15.88A2.015 2.015 0 0 0 12 13.847a2.015 2.015 0 0 0-2.008 2.034v3.483c0 .903-.723 1.636-1.615 1.636H4.615A1.626 1.626 0 0 1 3 19.364v-9.117c0-.515.24-1 .646-1.31l7.385-5.61Zm.908 1.195-7.384 5.61a.144.144 0 0 0-.054.115v9.117c0 .08.056.136.115.136h3.762c.06 0 .115-.057.115-.136V15.88c0-1.953 1.562-3.534 3.508-3.534s3.508 1.581 3.508 3.534v3.483c0 .08.056.136.115.136h3.762c.059 0 .115-.057.115-.136v-9.117a.144.144 0 0 0-.054-.115l-7.384-5.61a.099.099 0 0 0-.124 0Z" fill="currentColor"></path>
        </svg>
            
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='homeButton-arrow'>
            <path fill="currentColor" d="M15.45 17.97 9.5 12.01a.25.25 0 0 1 0-.36l5.87-5.87a.75.75 0 0 0-1.06-1.06l-5.87 5.87c-.69.68-.69 1.8 0 2.48l5.96 5.96a.75.75 0 0 0 1.06-1.06z"></path>
        </svg>
        <span>Home</span>
    </a> );
}

export default HomeButton;