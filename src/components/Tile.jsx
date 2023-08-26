import PropTypes from 'prop-types'



function Tile({ tile, update }) {    

    function onClicker () {
        if(tile != '') return;
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
    // currentPlayer: PropTypes.bool,
    
}



export default Tile;