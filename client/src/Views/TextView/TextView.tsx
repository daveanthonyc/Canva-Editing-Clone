import './TextView.css'
import Searchbar from '../../components/Searchbar/Searchbar';
import PurpleButton from '../../components/PurpleButton/PurpleButton';
import MenuButton from '../../components/MenuButton/MenuButton';

function TextView() {
    return ( <div className='text-view-comp'>
        <Searchbar></Searchbar>
        <PurpleButton clickHandler={() => {}}>Add a text box</PurpleButton>
        <div className='grid-gap'>
            <p><strong>Default text styles</strong></p>
            <MenuButton align='left' clickHandler={() => {}}><h1>Add a heading</h1></MenuButton>
            <MenuButton align='left' clickHandler={() => {}}><p><strong>Add a subheading</strong></p></MenuButton>
            <MenuButton align='left' clickHandler={() => {}}><p style={{fontWeight: 300}}>Add a little bit of body text</p></MenuButton>
        </div>
    </div> );
}

export default TextView;