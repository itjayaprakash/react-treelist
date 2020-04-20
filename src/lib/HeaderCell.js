import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../css/header-cell.css';

const RESIZE_INDICATOR_WIDTH = 10;

class HeaderCell extends Component {
  constructor(props) {
    super(props);
    this.headerRef;
    this.resizeIndicatorRef;
    this.displayName = 'HeaderCell';
    this.handleClick = this.handleClick.bind(this);
    this.onResizeMouseEnter = this.onResizeMouseEnter.bind(this);
    this.onColumnOptionsClick = this.onColumnOptionsClick.bind(this);
  }

  handleClick() {
    // Sorting Disabled UI - Jayaprakash
    //this.props.onSort(this.props.column.field);
  }

  onResizeMouseEnter() {
    const boundingRect = this.resizeIndicatorRef.getBoundingClientRect();
    const currentWidth = this.headerRef.clientWidth;
    this.props.onResizeEnter(this.props.column, boundingRect, currentWidth);
  }

  onColumnOptionsClick(event) {
    const iconRect = event.target.getBoundingClientRect();
    this.props.onColumnOptionsClick(iconRect.left, this.props.column);
    event.stopPropagation();
  }

  componentDidMount() {
    const rect = this.headerRef.getBoundingClientRect();
    this.props.whenWidthAvailable(this.props.column.field, rect.width);
  }

  render() {
    const { sort } = this.props;
    let sortIndicator = null;

    if (sort === 'asc') {
      sortIndicator = <span className='i-sort i-sort-asc'></span>;
    } else if (sort === 'desc') {
      sortIndicator = <span className='i-sort i-sort-desc'></span>;
    }

    return (
      <th
        ref={(el) => this.headerRef = el}
        className='tgrid-column-header'
        onClick={this.handleClick}>
        <span className='tgrid-column-header-text-wrapper'>
          <span className='tgrid-column-header-text'>
            {this.props.column.title}
          </span>
          {this.props.column.eventTitle?
          <button className="head_info_btn">
            <svg  height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg>
          </button>:null}
          {sortIndicator}
        </span>
        <div className='resize-indicator'
          ref={(el) => this.resizeIndicatorRef = el}
          style={{width: RESIZE_INDICATOR_WIDTH}}
          onMouseEnter={this.onResizeMouseEnter}>
        </div>
      </th>
    );
  }
}

HeaderCell.propTypes = {
  column: PropTypes.object.isRequired,
  onSort: PropTypes.func.isRequired,
  sort: PropTypes.string,
  onResizeEnter: PropTypes.func.isRequired,
  onColumnOptionsClick: PropTypes.func.isRequired,
  whenWidthAvailable:  PropTypes.func.isRequired
};

export default HeaderCell;