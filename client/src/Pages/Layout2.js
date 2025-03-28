import { Outlet } from 'react-router-dom';
import { Gallery } from './Gallery';
function Layout2() {
    return (<>  
    <div class='row'>
        <div class='col'><Gallery/></div>
    </div>
    <div class='row'>
        <Outlet/>
    </div>
    </>
    )
}
export { Layout2 }