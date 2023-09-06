import PropTypes from 'prop-types'



function Tile({ isGameOver, tile, update }) {    

    function onClicker () {
        if(tile != '' || isGameOver) return;
        update();
    }

    return(
        <div onClick={onClicker} className="tiles">{tile}</div>
    )
}

Tile.propTypes = {
    // tile: PropTypes.bool,
    tile: PropTypes.string,
    update: PropTypes.func,
    isGameOver: PropTypes.bool
    // currentPlayer: PropTypes.bool,
    
}



export default Tile;