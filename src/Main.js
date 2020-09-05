import React from 'react'
import { Switch, Route , BrowserRouter , Redirect} from 'react-router-dom'
import Gst from './Gst'
import Gst_new from './Gst_new'
import Drawer from './Drawer'

const Main = () => (  
<Drawer>
<BrowserRouter basename="/">
    <Switch>
	  <Route exact path="/" component={Gst} render={()=>{return(<Redirect to="/gstinfinder" />)}}/>
	  <Route path='/gstinfinder/gst_new' component={Gst_new}/>
    </Switch>
</BrowserRouter>	
 </Drawer> 
)

export default Main