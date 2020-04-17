import React from 'react';
import TreeList from '../lib';


const App = () => (

  <TreeList

    data={
      [
        {
          id: 0,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: null
        },
        {
          id: 2,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: 0
        },
        {
          id: 3,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: 0
        },
        {
          id: 4,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: 0
        },
        {
          id: 5,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: 0
        },
        {
          id: 6,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: 0
        },
        {
          id: 7,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: null
        },
        {
          id: 8,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: null
        },
        {
          id: 9,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: null
        },
        {
          id: 10,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: null
        },
        {
          id: 11,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: 3
        },
        {
          id: 12,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: 3
        },
        {
          id: 13,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: 3
        },
        {
          id: 14,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: 12
        },
        {
          id: 15,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: 12
        },
        {
          id: 16,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: 12
        },
        {
          id: 17,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: 12
        },
        {
          id: 18,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: 12
        },
        {
          id: 19,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: 16
        },
        {
          id: 20,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: 16
        },
        {
          id: 21,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: 16
        },
        {
          id: 22,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: 16
        },
        {
          id: 23,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: 16
        },
        {
          id: 24,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: 16
        },
        {
          id: 25,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: 10
        },
        {
          id: 26,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: 10
        },
        {
          id: 27,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: 10
        },
        {
          id: 28,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: null
        },
        {
          id: 29,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: null
        },
        {
          id: 30,
          name: 'Tim Robbins',
          position: 'CEO',
          parentId: null
        }]
    }
    columns={[{
      title: 'ID',
      field: 'id',
      type: 'number',
      width: 100
    }, {
      title: 'Name',
      field: 'name',
      type: 'string'
    }, {
      title: 'Position',
      field: 'position',
      type: 'string'
    }]}
    // options={OPTIONS}
    // handlers={HANDLERS}
    id={'id'}
    parentId={'parentId'}></TreeList>

);

export default App;
