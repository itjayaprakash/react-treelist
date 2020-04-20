import React, { Component } from 'react';
import TreeList from '../lib';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.treeref = React.createRef();
  }

  render() {

    return (
      <div>
        <TreeList
          ref={this.treeref}
          data={
            [
              {
                id: 0,
                name: 'Tim Robbins',
                position: 'In Progress',
                parentId: null,
              },
              {
                id: 2,
                name: 'Tim Robbins',
                position: 'In Progress',
                parentId: 0,
                grade : true
              },
              {
                id: 3,
                name: 'Tim Robbins',
                position: 'In Progress',
                parentId: 0
              },
              {
                id: 4,
                name: 'Tim Robbins',
                position: 'Completed',
                parentId: 0,
                grade : true
              },
              {
                id: 5,
                name: 'Tim Robbins',
                position: 'In Progress',
                parentId: 0,
                grade : true
              },
              {
                id: 6,
                name: 'Tim Robbins',
                position: 'In Progress',
                parentId: 0,
                grade : true
              },
              {
                id: 7,
                name: 'Tim Robbins',
                position: 'In Progress',
                parentId: null,
                grade : true
              },
              {
                id: 8,
                name: 'Tim Robbins',
                position: 'Not started',
                parentId: null,
                grade : true
              },
              {
                id: 9,
                name: 'Tim Robbins',
                position: 'Completed',
                parentId: null,
                grade : true
              },
              {
                id: 10,
                name: 'Tim Robbins',
                position: 'Completed',
                parentId: null,
                grade : true
              },
              {
                id: 11,
                name: 'Tim Robbins',
                position: 'Not started',
                parentId: 3,
                grade : true
              },
              {
                id: 12,
                name: 'Tim Robbins',
                position: 'Completed',
                parentId: 3
              },
              {
                id: 13,
                name: 'Tim Robbins',
                position: 'Not started',
                parentId: 3,
                grade : true
              },
              {
                id: 14,
                name: 'Tim Robbins',
                position: 'Not started',
                parentId: 12,
                grade : true
              },
              {
                id: 15,
                name: 'Tim Robbins',
                position: 'Not started',
                parentId: 12,
                grade : true
              }
             ]
          }
          columns={
            [
            // {
            //   title: 'ID',
            //   field: 'id',
            //   type: 'number',
            //   width: 100,
            // }, 
            {
              title: 'Lab Type',
              field: 'name',
              type: 'string',
              expand: true
            }, {
              title: 'Status',
              field: 'position',
              eventTitle: "Info",
              type: 'string'
            },
            {
              title: 'Grade History',
              field: 'grade',
              type: 'string'
            }
          ]}
          // options={OPTIONS}
          // handlers={HANDLERS}
          id={'id'}
          parentId={'parentId'}></TreeList>
      </div>
    )
  }
}

