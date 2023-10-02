import './UploadButton.css'

function UploadButton() {
    return ( <button className='upload-button'>
        <svg className='upload-logo' width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 11.75V19a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-7.25a.75.75 0 1 1 1.5 0V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7.25a.75.75 0 1 1 1.5 0Zm8.323-6.19v9.69a.75.75 0 0 1-1.5 0l-.001-9.69-3.037 3.215a.751.751 0 0 1-1.062-1.06l4.318-4.495a.751.751 0 0 1 1.062 0l4.18 4.495a.749.749 0 1 1-1.06 1.06l-2.9-3.216Z" fill="currentColor" fill-rule="nonzero"></path></svg>
        <span className='logo-text span-block'>Share</span>
    </button> );
}

export default UploadButton;