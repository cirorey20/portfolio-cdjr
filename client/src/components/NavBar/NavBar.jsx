import React, { Fragment, useEffect, useState } from "react";
import {showMenu} from './dinamicNav';

const NavBar = () => {    
    
    return (
        <Fragment>
        <nav className="navContainer">
        <div className="divNav">
            <a href="" className="aNav">
                <img className="imgNav " src="https://flowbite.com/docs/images/logo.svg" alt="" />
                <span className="spanNavUno">C==DJR</span>
            </a>
            {/* <button onClick={showMenu} data-collapse-toggle="navbar-default" type="button" className="buttonNav " aria-controls="navbar-default" aria-expanded="false"></button> */}
            <button onClick={showMenu} type="button" className="buttonNav" >
                <span className="spanNavDos">Open Main</span>
                <svg className="svgNav " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            <div className="w-full hidden md:block md:w-auto divNavDos"  id="navbar-default">
                <ul className="ulNav">
                    <li>
                        <a href="#" className="aNavDos" aria-current="page">ASD</a>
                    </li>
                    <li>
                        <a href="#" className="aNavDos" aria-current="page">ASD</a>
                    </li>
                    <li>
                        <a href="#" className="aNavDos" aria-current="page">ASD</a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
        </Fragment>
    )

}

export default NavBar;