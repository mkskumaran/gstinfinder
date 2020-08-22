import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App'
import Gst from './Gst'
import Gst_new from './Gst_new'
import Drawer from './Drawer'

const Main = () => (  
<Drawer>
    <Switch>
      <Route exact path='/app' component={App}/>
	  <Route path='/gstinfinder/gst' component={Gst}/>
	  <Route path='/drawer' component={Drawer}/>
	  <Route path='/Gst_new' component={Gst_new}/>
    </Switch>
 </Drawer> 
)

export default Main