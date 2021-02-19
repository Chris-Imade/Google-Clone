import React from 'react'
import '../SearchPage.css'
import { useGoogleSearch  } from '../useGoogleSearch'
import { Link } from 'react-router-dom'
import SearchBar from '../Components/SearchBar'
import ImageIcon from '@material-ui/icons/Image';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import BookIcon from '@material-ui/icons/Book';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppsIcon from '@material-ui/icons/Apps';
import { useStateValue } from '../Components/StateProvider'
import GoogleLogo from '../google_logo.png'

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    // Live Call
    const { data } = useGoogleSearch();
    console.log(data);
    return (
        <div className="searchPage">
                <div className="searchPage__header">
                    <div className="searchPage__header--top">
                        <div className="header__top--left">
                            <Link className="logo" to="/">
                                <img 
                                style={{ width: `${150}px` }}
                                src={GoogleLogo} 
                                alt="Google Logo"/>
                            </Link>

                            <SearchBar hideSearchBtns />
                        </div>
                        <div className="searchPage__header--topRight">
                        <AccountCircleIcon className="top" />
                        <AppsIcon className="top" />
                        </div>
                    </div>
                    <div className="header__links">
                            
                        <div className="header__link--items">
                            
                            <p>All</p>
                        </div>
                        <div className="header__link--items">
                            <ImageIcon className="icon" />
                            <p>Images</p>
                        </div>
                        <div className="header__link--items">
                        <OndemandVideoIcon className="icon" />
                            <p>Videos</p>
                        </div>
                        <div className="header__link--items">
                            <BookIcon className="icon" />
                            <p>Books</p>
                        </div>
                        <div className="header__link--items">
                            <p>News</p>
                        </div>
                        <div className="header__link--items">
                            <MoreVertIcon className="icon" />
                            <p>More</p>
                        </div>
                        <div id="space"></div>
                        <div className="header__link--items">
                            <p>Settings</p>
                        </div>
                        <div className="header__link--items">
                            <Button >
                                Tools
                            </Button>
                        </div>
                    </div>  
            </div>

            {term && (
                <div className="searchPage__results">
                    <p className="searchPage__results--counts">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) for {term}
                    </p>
                    {data?.items.map( item => (
                     <div className="searchResults__items">
                         <p className="display__link1"><a href={item.link}>{item.displayLink}</a> - v</p>
                         <p className="display__link2"><a href={item.link}>{item.title}</a></p>
                        <p className="display__snippet">{item.snippet}</p>
                     </div>   
                    ))}
                </div>
            )}

    </div>
    )
}

export default SearchPage;
