import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Gst from './Gst'
import Gst_new from './Gst_new'
import Drawer from './Drawer'

const Main = () => (  
<Drawer>
    <Switch>
      <Route exact path='/gstinfinder' component={Gst}/>
	  <Route path='/gstinfinder/gst_new' component={Gst_new}/>
    </Switch>
 </Drawer> 
)

export default Main