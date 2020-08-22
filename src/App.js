import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';	
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Svg from './Svg';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';
import Star from '@material-ui/icons/Star';
import Divider from '@material-ui/core/Divider';
//import LinearProgress  from '@material-ui/core/LinearProgress';
import './App.css';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Facebook } from 'react-content-loader'


const styles = theme => ({
	textField: {
     //width: '100%',
	},
	card:{
		width:'75%',
		margin:'0 auto',
		padding:'2em',
	},
	Button:{
		padding: 8
	},
	error:{
		color:'rgb(206, 17, 38)',
		margin: '0!important',
	},

	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -18,
		marginRight: 10,
	},	 
	row: {
		display: 'flex',
		justifyContent: 'center',
	  },
	bigAvatar: {
		width: 60,
		height: 60,
	},	
	chip: {
    margin: theme.spacing.unit,
	},
	card2: {
		display: 'inline-flex',
	},	
	cover: {
		width: 151,
		height: 151,
		padding: '4px',
		margin: '4px',	
	},	
	headline: {
		fontSize:'1em',
	},
	MyFacebookLoader: {
		width:'25em',
		margin:'0 auto',
	}	
});




class TextFields  extends Component {
	constructor () {
	  super()
	  this.state = {username: '',error:'',status:false, loading: false};	  
	  this.onChange = this.onChange.bind(this);
	}

	onChange = name => e => {
		this.setState({[name]: e.target.value, status: false, loading: true});
		const username = e.target.value;
		axios.get('https://api.github.com/users/'+username)
		.then(response => this.setState({name: response.data.name,bio: response.data.bio,company: response.data.company,avatar_url:response.data.avatar_url,status:true,loading:false}))	 
	}	
	render() {

    const { classes } = this.props;
	const MyFacebookLoader = () => <Facebook />

		return (
		<div className="App">	  
			<div className={classes.root}>
			  <AppBar position="static">
				<Toolbar variant="dense">
				  <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
					<Svg />
				  </IconButton>
				  <Typography variant="title" color="inherit">
					PWA
				  </Typography>
				</Toolbar>
			  </AppBar>
			</div>
			
			<div className={classes.card}>
				<div>
					<TextField
					  id="name"
					  label="Github Username Here...!"
					  className={classes.textField}
					  value={this.state.username}
					  onChange={this.onChange('username')}
					  margin="normal"
					/>		
				</div>  
				<p className={classes.error}>{this.state.error}</p>	
			</div>	
		
			<div>
			{this.state.status
			?		
			<List>
				<div className={classes.row}>
				  <Chip
					avatar={<Avatar src={this.state.avatar_url} alt="Github Avatars"></Avatar>}
					label={this.state.name}
					className={classes.chip}
				  />				  
				</div>				
				<ListItem>
				  <Avatar>
					<Star />
				  </Avatar>					  
				  <ListItemText primary="Biography" secondary= {this.state.bio} />
				</ListItem>
				<Divider inset component="li" />
				<ListItem>
				  <Avatar>
					<WorkIcon />
				  </Avatar>
				  <ListItemText primary="Work" secondary= {this.state.company} />
				</ListItem>
			</List>	 
			:
			null
			}		<Divider/><br/>	
			<div>			
			{
				this.state.loading 
				?<div className={classes.MyFacebookLoader}>	<MyFacebookLoader/> </div>:
				null	
			}
			</div>				
			{
				this.state.status ?	
				<Card className={classes.card2}>
				  <div>
					<CardContent>
					  <Typography variant="headline" className={classes.headline}>{this.state.name}</Typography>
					  <Typography variant="subheading" color="textSecondary">
						{this.state.bio}
					  </Typography>
					  <Typography variant="subheading" color="textSecondary">
						{this.state.company}
					  </Typography>				  
					</CardContent>
				  </div>
				  <CardMedia
					className={classes.cover}
					image={this.state.avatar_url}
					title={this.state.name}
				  />
				</Card>:
			null
			}
			</div>
		</div>

		
		);
	}
}
TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(TextFields);