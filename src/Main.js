import React from 'react'
import { Switch, Route } from 'react-router-dom'
//import Test from './Test'
import App from './App'

import Gst from './Gst'

import Drawer from './Drawer'
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

const Main = () => (  
<Drawer>
    <Switch>
      <Route exact path='/gitusers/app' component={App}/>
	  <Route path='/gitusers/gst' component={Gst}/>
	  <Route path='/gitusers/drawer' component={Drawer}/>
    </Switch>
 </Drawer> 
)

export default Main