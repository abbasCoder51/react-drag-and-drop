import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ItemTypes } from "../constant";
import { DragSource } from 'react-dnd';

const knightSource = {
    beginDrag(props) {
        return {};
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Knight extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <span style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: '30px',
        fontWeight: 'bold',
        cursor: 'move'
      }}>
        &#9816;
      </span>
    );
  }
}

Knight.propTypes = {
  connectDragSource: propTypes.func.isRequired,
  isDragging: propTypes.bool.isRequired
};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
