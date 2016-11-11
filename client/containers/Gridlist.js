import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import './Gridlist.sass'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 500,
    overflowY: 'auto',
    marginBottom: 24,
  },
};

const tilesData = [
  {
    img: '/styles/images/rock-01.png',
    title: 'ROCK',
  },
  {
    img: '/styles/images/paper-02.png',
    title: 'PAPER',
  },
  {
    img: '/styles/images/scissors-03.png',
    title: 'SCISSORS',
  },
];

const GridListExampleSimple = () => (
  <div style={styles.root}>
    <GridList
      cellHeight={200}
      style={styles.gridList}
    >
      <Subheader>Take your pick!</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSimple
