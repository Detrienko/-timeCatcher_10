import React, {Component} from 'react';
import './App.css';

import { connect } from 'react-redux';

//Components:
import Layout from './components/Layout/Layout';
import BusinessList from './components/BusinessList/BusinessList';

//Containers:
import MainDisplay from './containers/MainDisplay/MainDisplay';
import Stopwatch from './containers/Stopwatch/Stopwatch';

import authActions from './store/actions/auth';
import businessBuilder from './store/actions/businessBuilder';
import stopWatch from './store/actions/stopWatch';

class App extends Component {


	componentDidMount(){
		this.props.onTryAutoSign()
	}

	render(){

		let mainDisplay = null;
		let businessList = null;

		if(!this.props.businessLoading && !this.props.stopWatchesLoading){
			mainDisplay = <MainDisplay/>
			businessList = <BusinessList/>
		}


	  return ( 
				<Layout>
			    	{businessList}
			    	{mainDisplay}
			    </Layout>
	  );
	}
}

	const mapStateToProps = state => {
		return{
			stopWatchesLoading: state.stopWatch.loading,
			businessLoading: state.businessBuilder.loading,
			businesses: state.businessBuilder.business
		}
	}

	const mapDispatchToProps = dispatch => {
		return{
			onTryAutoSign: () => dispatch(authActions.authCheckState()),
		}
	}

export default connect(mapStateToProps, mapDispatchToProps)(App);
