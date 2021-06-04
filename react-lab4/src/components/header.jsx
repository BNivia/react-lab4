import React, { Component } from 'react';
// import logo from '../logo.svg';

class NavBar extends Component {
    state = {  }
    render() { 
        return (  
            <div className="mb-3">
                <nav className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 shadow-md py-4 bg-gray-800" >
                    <ul className="flex flex-row items-center">
                        <img className="lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow"/>
                        <li className="mx-6 text-white font-semibold">Home</li>
                        <li className="mx-6 text-white font-semibold">About</li>
                        <li className="mx-6 text-white font-semibold">Contact</li>
                    </ul>
                </nav>
            </div>
        );
    }
}
 
export default NavBar;