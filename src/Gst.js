import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';	
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import './App.css';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
	textField: {
		width: '100%',
		lineHeight:'2em',
		textAlign:'justify',
	},
	card:{
		width:'15%',
		margin:'0 5% auto',
		paddingTop:'1em',
	},
	error:{
		color:'rgb(206, 17, 38)',
		margin: '0!important',
		textAlign:'center',
	},
	paper:{
		padding:'1em',
		background:'rgb(240, 241, 247)',
		boxShadow: '0px 1px 5px 0px rgb(240, 241, 247), 0px 2px 2px 0px rgb(240, 241, 247), 0px 3px 1px -2px rgb(240, 241, 247)',	
		fontFamily:'monospace!important',		
		textAlign:'justify',
	},
	rates:{
		color: '#fff',
		width: '90%',
		float: 'left',
		borderRadius: '5px',
		padding: '2.5em 0em',
		marginTop: 0,
		/* min-height: 96px; */
		margin: '2% 2% 2% 2%',
		backgroundColor: '#3f51b5',
		boxShadow: '0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',	
		'@media screen and (max-width: 720px)': {
		  width:'90%!important',
		  margin:'2.5% 0% 2.5% 0%',
		}		
	},
	ratescom:{
		width: "90%",
		margin: "0 5% auto",	
	}
});




const percent = [{value: '0',label: '0%',}, {value: '5',label: '5%',},{value: '9',label: '9%',},{value: '12',label: '12%',},
{value: '18',label: '18%',},{value: '28',label: '28%',}];

class Gst  extends Component {
	constructor () {
	  super()  
	  this.state = {rupees: '',percent: '',error:'',status:false, loading: false,paper:false,rs:'Rs .',select:'Select',htext:'Please Select Your GST Rates'};
	  this.onChangeRupees = this.onChangeRupees.bind(this);
	  this.onChangePercent = this.onChangePercent.bind(this);
	}

	onChangeRupees = rupees => e => {
		const re = /^[0-9\b]+$/;
		if (e.target.value === '' || re.test(e.target.value)) {
			this.setState({rupees: e.target.value, status: false,error:false});
		}	
		return null;
	}

	onChangePercent = percent => e => {
		if(this.state.rupees === ''){
			console.log('Rupees Cannot Be Empty..!');
			this.setState({error:'Required *'});
			return false;
		}
		this.setState({percent: e.target.value,status: false, loading: true,paper:true});
	}
	
	render() {
    const { classes } = this.props;
	const rupees = Number(this.state.rupees);
    const gstAmount = Number((this.state.rupees * this.state.percent) / 100);
	const netGst = rupees + gstAmount;	
	return(

	<div className="App">	  	
			<div className={classes.card}>
				<div>
					<TextField
					  id="rupees"
					   pattern="[0-9]*"
					  label={this.state.rs}
					  className={classes.textField}
					  value={this.state.rupees}
					  onChange={this.onChangeRupees('rupees')}
					  margin="normal"
					  autoComplete="off"
					/>	
				
				</div>  
				
				<p className={classes.error}>{this.state.error}</p>	
				<div>
  
				<TextField
					  id="outlined-select-currency"
					  select
					  label={this.state.select}
					  className={classes.textField}
					  value={this.state.percent}
					  onChange={this.onChangePercent('percent')}
					  SelectProps={{
						MenuProps: {
						  className: classes.menu,
						},
					  }}
					  helperText={this.state.htext}
					  margin="normal"
					  variant="outlined"
					>
					  {percent.map(option => (
						<MenuItem key={option.value} value={option.value}>
						  {option.label}
						</MenuItem>
					  ))}
				</TextField>				
				</div>  	
			</div>	
		<div className="top_rate_view">
		{
		this.state.loading 
		? 

        <Grid container justify="center">

          <Grid item className={classes.rates}>
			 <div> {'Income'}</div>  <div>  {rupees} </div> 
          </Grid>
          <Grid item  className={classes.rates}>
			<div> {'Amount'}</div>  { <div> {netGst} </div> }
          </Grid>
          <Grid item  className={classes.rates}>
			<div> {'Tax'}</div> { <div> {gstAmount} </div> }
          </Grid>
          <Grid item  className={classes.rates}>
			<div> {'CGST'}</div> { <div> {gstAmount/2} </div> }
          </Grid>	
          <Grid item  className={classes.rates}>
			<div> {'SGST'}</div> { <div> {gstAmount/2} </div> }
          </Grid>
		<Grid>
			{ <div className={classes.ratescom}> Note : {gstAmount/2} Rupess Will Go To Center (CGST) & {gstAmount/2} Rupess Will Go To State (SGST)</div> }
		</Grid>		  
        </Grid>
		:null 
		}			
		</div>
		</div>
        );
  
	}
} 
Gst.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Gst);
