import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App'
import Gst from './Gst'
import Drawer from './Drawer'

const Main = () => (  
<Drawer>
    <Switch>
      <Route exact path='/app' component={App}/>
	  <Route path='/gst' component={Gst}/>
	  <Route path='/drawer' component={Drawer}/>
    </Switch>
 </Drawer> 
)

export default Main