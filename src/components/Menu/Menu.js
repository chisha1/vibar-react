import React from 'react';
import Link from 'next/link';
//import '../../../CSS/Menu/menu.css'

const Menu = () => (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 mb-6 p-6 rounded-md">
        <div className="w-full block flex-grow">
            <div className="md:flex-grow">
                <Link href="/">
                    <a className="block md:inline-block text-gray-300 hover:text-white mr-4">
                        Home
                    </a>
                </Link>
                <Link href="/speakers">
                    <a className="block md:inline-block text-gray-300 hover:text-white mr-4">
                        Speakers
                    </a>
                </Link>
            </div>
        </div>

        {
            //Top Navigation}
        }

        <div className="navigation-bar">
            <div className="container">
                <div id="logo-container">
                    <img id="logo" src="/Assets/Images/Logo/Website_Logo_outline.png" />
                    <div className="arrow down"></div>
                </div>
                <div className="links-container">
                    <ul>
                        <li>
                            <input id="search-field" placeholder="Search" />
                        </li>
                        <li>
                            <a className="home-navigation-link">Home</a>
                        </li>
                        <li>
                            <a id="test">Artists</a>
                        </li>

                        {
                            // if user is logged in, add a create playlist button and add song button for admins
                        }
                    </ul>
                    {
                        //log-in partial/component here
                    }
            </div>
                <div className="user-details">
                    <div className="user-image">
                        {
                            //@Html.Action("GetUserImage", "User", new {userID = userID})
                        }
                    </div>
                </div>
            </div>
        </div>
    </nav>
);

export default Menu;
