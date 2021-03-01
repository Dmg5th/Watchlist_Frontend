import React from 'react'
import { connect } from 'react-redux'
import WatchlistCard from './WatchlistCard'

class MyWatchlist extends React.Component {
     
    render(){
        const watchlistCard = this.props.watchlist.map(movieObj => {
            return <WatchlistCard title={movieObj.title} key={movieObj.id}/>
        })
        return (
            <div>
                {watchlistCard.length > 0 ? watchlistCard : null}
             </div>
        )
    } 
}


   const mapStateToProps = state => {
    return {
        watchlist: state.myWatchlist
    }
} 

export default connect(mapStateToProps)(MyWatchlist)
