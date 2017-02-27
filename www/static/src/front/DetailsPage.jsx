//文章详情页
import React from 'react';
import { browserHistory } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import $ from "jquery";


class DetailsPage extends React.Component {
	componentWillMount(){
		if (this.props.location.query.articleid) {
	      	console.log('我要加载数据了');
			var data = [];
			var _self = this;
			this.serverRequest = $.get('http://localhost:8360/home/index/selectone?articleid='+this.props.location.query.articleid, function (result) {
				// console.log(result);
				var json = JSON.parse(result);
				this.setState(json);
    		}.bind(this));
	    }else{
	      	console.log('我没有数据可以加载');
	    }
	}
	constructor(props) {
    	super(props);
    	this.state = {
				title: '',
				indeximgurl: '',
				content: '',
				edittime: ''
			};
  	}
	intoEdit(){
		browserHistory.push('/edt?articleid=' + this.props.location.query.articleid);
	}
	createMarkup() {
  		return {__html: this.state.content};
	}
	render(){
		return (
		<MuiThemeProvider muiTheme={getMuiTheme()}>
			<article className='detailspage'>
				<section>
					<h1>{this.state.title}</h1>
				</section>
				<section>
					<p>{this.state.edittime}</p>
				</section>
				<section>
					<img src={this.state.indeximgurl} />
				</section>
				<section className='article-content' dangerouslySetInnerHTML={this.createMarkup()}>
				</section>
				<section>
					<RaisedButton label="编辑文章" onClick={() => this.intoEdit()} />
				</section>
			</article>
		</MuiThemeProvider>
		);
	}
}
export default DetailsPage;