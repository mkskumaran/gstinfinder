import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App'
import Gst from './Gst'
import Drawer from './Drawer'

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