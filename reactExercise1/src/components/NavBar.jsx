import websiteLogo from '../assets/logo.svg'
import '../App.css'

// function NavBar() {
//     return (
//         <>
//             <div className="navbar">
//                 <div>
//                     <p>Logo</p>
//                     {/* <img source={websiteLogo} className='website-logo' /> */}
//                 </div>

//                 <div className='hamburger'>
//                     <div className='burger burger1' />
//                     <div className='burger burger2' />
//                     <div className='burger burger3' />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default NavBar

function NavBar() {
    return (
        <div>
            <div className='navbar'>

                <img src={websiteLogo} className='website-logo' />

                <div className='hamburger'>
                    <div className='burger burger1' />
                    <div className='burger burger2' />
                    <div className='burger burger3' />
                </div>

            </div>

        </div>
    )
}

export default NavBar