import React from 'react'
import '../Home.css'
import { Link } from 'react-router-dom'
import ShareIcon from '@material-ui/icons/Share';
import SearchBar from '../Components/SearchBar'

const Home = () => {
    return (
        <div className="home">
            <div className="home__top">
                <div className="home__top--links">
                    <Link to="/gmail">
                        Gmail
                    </Link>
                </div>
                <div className="home__top--links">
                    <Link to="/images">
                        Images
                    </Link>
                </div>
            </div>
            <div className="home__middle">
                <div className="home__middle--top">
                    <img
                     src="https://www.google.com/logos/doodles/2020/december-holidays-days-2-30-6753651837108830.3-law.gif" 
                     alt="Google Logo"
                     />
                </div>
                <div className="home__middle--top2">
                   <ShareIcon />
                </div>
                <div className="home__middle--top3">
                   <SearchBar />
                </div>
                <div className="home__middle--top4">
                    <p>Google offered in:</p>
                    <div className="home__middle--top4links">
                        <Link to="#">
                         Hausa 
                        </Link>
                    </div>
                    <div className="home__middle--top4links">
                        <Link to="#">
                         Igbo
                        </Link>
                    </div>
                    <div className="home__middle--top4links">
                        <Link to="#">
                         Èdè Yorùbá
                        </Link>
                    </div>
                    <div className="home__middle--top4links">
                        <Link to="#">
                         Nigerian Pidgin
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
