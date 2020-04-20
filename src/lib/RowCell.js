import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';

import '../css/row-cell.css';
import RowIndent from './RowIndent';
import { getClassName } from './util/TreeUtils';

class RowCell extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'RowCell';
    this.ButtonToggle = React.createRef();
  }
  gradeFun () {
    //console.log("TEST");
  }
  render() {
    const {
      reactKey,
      indent,
      useIndent,
      data,
      rowData,
      type,
      format,
      formatter,
      className,
      showExpandCollapse,
      isExpanded,
      onExpandToggle,
      colField
    } = this.props;

    // indentation dummies
    let rowIndent = null;
    if (useIndent) {
      rowIndent = <RowIndent indent={indent} reactKey={reactKey}></RowIndent>;
    }



    let displayText = data;
    if (type === 'date' && typeof data !== 'undefined') {
      displayText = dateFormat(data, format);
    }

    if (typeof formatter === 'function') {
      displayText = formatter(data, rowData);
    }

    // expand or collapse icon
    let expandToggleIcon = null;
    // if (showExpandCollapse && !isExpanded) {
      expandToggleIcon =

        <button ref={this.ButtonToggle} className="icon-expanded" aria-expanded={showExpandCollapse && !isExpanded?'false':'true'} onClick={onExpandToggle}>
         
        {showExpandCollapse && !isExpanded?
          <svg height="24" viewBox="0 0 24 24" width="24"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
        : 
          <svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" /></svg>
        } 
        </button>;

    // } 
    // else if (showExpandCollapse && isExpanded) {
    //   expandToggleIcon =
    //     <button className="icon-collasped" aria-expanded="true" onClick={onExpandToggle}>
    //       <svg height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z" /></svg>
    //     </button>;
    // } 
    if (!showExpandCollapse) {
      expandToggleIcon = <span className='i-dummy'></span>;
    }
    return (
      <td className='tgrid-data-cell' role="gridcell">
        {rowIndent}
        {expandToggleIcon}
         <span className={getClassName(className, rowData)}>{displayText}</span> 
        {/* Grade Button added UI - JP */}
        
        {colField == "grade" ?
          <span>
            {
              rowData.grade ? 
              <button className="icon-View" onClick={()=> this.gradeFun()}>
                <svg viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" /></svg>
              </button> 
              : null
            }
            </span>
        : null}

        {/* Grade Button added UI - JP */}
      </td>
    );
  }
}

RowCell.propTypes = {
  reactKey: PropTypes.string.isRequired,
  indent: PropTypes.number,
  useIndent: PropTypes.bool,
  data: PropTypes.any,
  rowData: PropTypes.any,
  type: PropTypes.string,
  format: PropTypes.string,
  formatter: PropTypes.func,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  showExpandCollapse: PropTypes.bool,
  isExpanded: PropTypes.bool,
  onExpandToggle: PropTypes.func,
  colField: PropTypes.string
};

RowCell.defaultProps = {
  format: 'mm/dd/yyyy'
};

export default RowCell;
