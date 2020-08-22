import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Svg from './Svg';
import './App.css';

class PersistentDrawer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false,
	  anchor: 'left',
    }
  }
  
  render() {
    return (
      <div>
        <div>
          <AppBar>
            <Toolbar>
              <IconButton color="inherit" aria-label="Open drawer">
			  <Svg />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
               GST - CALC
              </Typography>
            </Toolbar>
          </AppBar>
          <main>	
            <div/>
				{this.props.children}
          </main>
        </div>
      </div>
    );
  }
}

export default PersistentDrawer
