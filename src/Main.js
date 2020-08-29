import React from 'react'
import { Switch, Route , BrowserRouter as Router} from 'react-router-dom'
import Gst from './Gst'
import Gst_new from './Gst_new'
import Drawer from './Drawer'

const Main = () => (  
<Drawer>
<Router basename="/">
    <Switch>
      <Route exact path='/gstinfinder' component={Gst}/>
	  <Route path='/gstinfinder/gst_new' component={Gst_new}/>
    </Switch>
</Router>	
 </Drawer> 
)

export default Main