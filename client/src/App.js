import React from 'react'
import {Resource, Admin} from 'react-admin'
import PostList from "./components/PostList"
import restProvider from "ra-data-simple-rest"
import PostCreate from './components/PostCreate'
import PostEdit from "./components/PostEdit"

const App = () => {
  return (
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource name='posts' list={PostList} create={PostCreate} edit={PostEdit}/>
    </Admin>
  )
}

export default App
