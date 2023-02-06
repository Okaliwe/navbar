import { WindowSharp } from '@mui/icons-material';
import '../App.css'
import { links } from './sideBarLinks';
const Side = () => {
    return ( 
        <div className='Side'>
            <ul className='free'>
                {links.map((item,key)=>
                <li id={window.location.pathname==item.link? 'active':' '} className='row' key={key}onClick={()=>{
                    window.location.pathname=item.link
                }}>
                <div id='icon'>{item.icon}</div>
                <div id='title'>{item.title}</div>
            </li>
            )}
                
            </ul>
            
        </div>
     );
}
 
export default Side;