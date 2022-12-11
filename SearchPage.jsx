import React from 'react'
import response from '../response'
import { useStateValue } from '../StateProvider'
import UseGoogleSearch from '../useGoogleSearch'
import './SearchPage.css'
import { Link } from 'react-router-dom'
import Search from '../components/search'
import { Description, Image, LocalOffer, More, MoreVert, Room, SearchRounded } from '@mui/icons-material'

const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue()
  const { data } = UseGoogleSearch(term) 

//   const data = response

  console.log(data)
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            alt=""
            className="searchPage__logo"
          />
        </Link>
        <div className="searchPage__headerBody">
            <Search hideButtons/>

            <div className="searchPage__options">
                <div className="searchPage__optionsLeft">
                    <div className="searchPage__option">
                        <SearchRounded />
                        <Link to='/all'>All</Link>
                    </div>
                    <div className="searchPage__option">
                        <Description />
                        <Link to='/news'>News</Link>
                    </div>
                    <div className="searchPage__option">
                        <Image />
                        <Link to='/images'>Images</Link>
                    </div>
                    <div className="searchPage__option">
                        <LocalOffer />
                        <Link to='/shopping'>Shopping</Link>
                    </div>
                    <div className="searchPage__option">
                        <Room />
                        <Link to='/maps'>Maps</Link>
                    </div>
                    <div className="searchPage__option">
                        <MoreVert />
                        <Link to='/more'>More</Link>
                    </div>
                </div>
                <div className="searchPage__optionsRight">
                    <div className="searchPage__option">
                        <Link to='/settings'>Settings</Link>
                    </div>
                    <div className="searchPage__option">
                        <Link to='/tools'>Tools</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {term && (
        <div className="searchPage__results">
            <p className="searchPage__resultCount">
                About {data?.searchInformation.formattedTotalResults} Results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
            </p>

            {data?.items.map(item=>(
                <div className="searchPage__result">
                    <a href={item.link}>
                        {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                            <img src={item.pagemap?.cse_image[0]?.src} alt="" className="searchPage__resultImage" />
                        )}

                        {item.displayLink}
                    </a>
                    <a href={item.link} className="searchPage__resultTitle"><h2>{item.title}</h2></a>
                    <p className="searchPage__resultSnippet">{item.snippet}</p>
                </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default SearchPage
