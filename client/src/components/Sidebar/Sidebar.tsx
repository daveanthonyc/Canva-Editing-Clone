import { useState } from 'react';
import './Sidebar.css'
import SidebarItem from './SidebarItem/SidebarItem';
import TextView from '../../Views/TextView/TextView';

function Sidebar() {
    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)
    const [sideBarView, setSideBarView] = useState<string>("None")

    const clickHandler = (sideBarViewChoice: string) => {
        setIsSideBarOpen(true)
        setSideBarView(sideBarViewChoice)
    }

    return ( 
        <aside className='side-bar'>
            <div className='tab-container'>
                <div className='tab-list'>
                    <SidebarItem clickHandler={() => clickHandler("Design")}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M25.333 4H6.667A2.667 2.667 0 0 0 4 6.667v18.666A2.667 2.667 0 0 0 6.667 28h18.666A2.667 2.667 0 0 0 28 25.333V6.667A2.667 2.667 0 0 0 25.333 4ZM6 6.667C6 6.298 6.298 6 6.667 6h10.666v20H6.667A.667.667 0 0 1 6 25.333V6.667Zm13.333 6.666V6h6c.369 0 .667.298.667.667v6.666h-6.667Zm0 2V26h6a.667.667 0 0 0 .667-.667v-10h-6.667Z" fill="currentColor"></path></svg>
                        Design
                    </SidebarItem>
                    <SidebarItem clickHandler={() => clickHandler("Elements")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" d="m6.5 4.25.75-.75a2.121 2.121 0 0 1 3 3L6.5 10.25 2.75 6.5a2.121 2.121 0 0 1 3-3l.75.75zm7 6 4-7.5 4 7.5h-8zm-10.75 3.5h7.5v7.5h-7.5v-7.5zm14.75-.25a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path></svg>
                        Elements
                    </SidebarItem>
                    <SidebarItem clickHandler={() => clickHandler("Text")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M18 5.5h-5.25V18c0 .28.22.5.5.5h2a.75.75 0 1 1 0 1.5h-6.5a.75.75 0 1 1 0-1.5h2a.5.5 0 0 0 .5-.5V5.5H6a.5.5 0 0 0-.5.5v1.25a.75.75 0 0 1-1.5 0V5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v1.75a.75.75 0 1 1-1.5 0V6a.5.5 0 0 0-.5-.5z"></path></svg>
                        Text
                    </SidebarItem>
                    <SidebarItem clickHandler={() => clickHandler("Uploads")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.75 13.81v7.44a.75.75 0 1 1-1.5 0v-7.4L9.49 15.6a.75.75 0 1 1-1.06-1.06l2.35-2.36c.68-.68 1.8-.68 2.48 0l2.35 2.36a.75.75 0 1 1-1.06 1.06l-1.8-1.8zM9 18v1.5H6.75v-.01A5.63 5.63 0 0 1 5.01 8.66a6 6 0 0 1 11.94-.4 5.63 5.63 0 0 1 .3 11.23v.01H15V18h1.88a4.12 4.12 0 1 0-1.5-7.97A4.51 4.51 0 0 0 11 4.5a4.5 4.5 0 0 0-4.43 5.29 4.13 4.13 0 0 0 .68 8.2V18H9z"></path></svg>
                        Uploads
                    </SidebarItem>
                    <SidebarItem clickHandler={() => clickHandler("Draw")}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.625 13.5H8.25a.75.75 0 0 0 0-1.5H5.625a2.625 2.625 0 1 0 0 5.25h10.5a1.125 1.125 0 0 1 0 2.25H11.25a.75.75 0 1 0 0 1.5h4.875a2.625 2.625 0 1 0 0-5.25h-10.5a1.125 1.125 0 0 1 0-2.25Z" fill="currentColor"></path><path d="M17.25 3a.75.75 0 0 0-.529.221l-4.683 4.68a5.226 5.226 0 0 0-1.538 3.724v1.125a.75.75 0 0 0 .75.75h1.125a5.22 5.22 0 0 0 3.713-1.537l4.69-4.684A.75.75 0 0 0 21 6.75 3.75 3.75 0 0 0 17.25 3Zm-2.212 7.901A3.724 3.724 0 0 1 12.375 12H12v-.375A3.722 3.722 0 0 1 13.1 8.974l4.444-4.455A2.25 2.25 0 0 1 19.5 6.457l-4.462 4.444Z" fill="currentColor"></path></svg>
                        Draw
                    </SidebarItem>
                    <SidebarItem clickHandler={() => clickHandler("Projects")}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M14.078 5.333H5.334A2.667 2.667 0 0 0 2.667 8v2.667c0 .203.023.402.066.592a2.315 2.315 0 0 0-.066.55v12.382c0 1.367 1.194 2.476 2.667 2.476h21.333c1.473 0 2.667-1.109 2.667-2.477V11.81c0-1.368-1.194-2.477-2.667-2.477h-9.333l-.726-2.176a2.667 2.667 0 0 0-2.53-1.824Zm-8.744 4h9.892L14.71 7.79a.667.667 0 0 0-.633-.456H5.334A.667.667 0 0 0 4.667 8v1.411c.213-.05.436-.078.667-.078Zm-.667 2.477c0-.229.267-.477.667-.477h21.333c.4 0 .667.248.667.477v12.38c0 .229-.267.477-.667.477H5.334c-.4 0-.667-.248-.667-.477V11.81Z" fill="currentColor"></path></svg>
                        Projects
                    </SidebarItem>
                </div>
            </div>
            {isSideBarOpen && 
                <div className='flex-horz'>
                    <div className='test'>
                        {/* Insert Views here     */}
                        {sideBarView === "Text" && <TextView></TextView>}
                    </div>    
                    <button onClick={() => setIsSideBarOpen(false)} className='test-button'>
                        <svg width="13" height="96" fill='#252627'>
                            <path d="M 0,0 L 13,15 L 13,81 L 0,96 Z"/>
                        </svg>
                    </button>
                </div>
            }
        </aside>
       
     );
}

export default Sidebar;