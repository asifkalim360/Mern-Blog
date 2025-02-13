import React from 'react'
 import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import { RouteIndex } from './helpers/RouteName'

const App = () => {
  return (
    <div>
      <BrowserRouter> 
        <Routes>
          <Route path={RouteIndex} element={<Layout />}> 
            <Route index element={ <index /> }/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App