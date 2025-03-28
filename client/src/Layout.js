import { Link, Outlet } from 'react-router-dom';
import {Header} from './Screen/Header'
import {Footer} from './Screen/Footer'

function Layout() {
    return (<>  
    <div class='row'>
        <div class='col'>
            <Header/>
        </div>
    </div>
    <div class='row'>
        <Outlet/>
    </div>
    <div class='row' style={{color:'blue'}}>
        <div class='col'style={{color:'blue'}}><Footer/></div>
    </div>
    </>
    )
}
export { Layout }