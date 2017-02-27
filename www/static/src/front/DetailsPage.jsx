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
				json['articleid'] = this.props.location.query.articleid;
				this.setState(json);
    		}.bind(this));
	    }else{
	      	console.log('我没有数据可以加载');
	    }
	}
	constructor(props) {
    	super(props);
    	this.state = {
    			articleid: '',
				title: '',
				indeximgurl: '',
				content: '',
				edittime: ''
			};
  	}
	intoEdit(){
		browserHistory.push('/edt?articleid=' + this.props.location.query.articleid);
	}
	deleteArticle(){
		if (confirm('确认删除？')) {
			this.serverRequest = $.get('http://localhost:8360/home/index/deleteone?articleid='+this.state.articleid, function (result) {
				// console.log(result);
				var result = JSON.parse(result);
				alert(result.tip);
				browserHistory.push('/');
			}.bind(this));
		}
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
				<section className='btns'>
					<RaisedButton label="编辑文章" onClick={() => this.intoEdit()} />
					<RaisedButton label="删除文章" onClick={() => this.deleteArticle()} />
				</section>
			</article>
		</MuiThemeProvider>
		);
	}
}
export default DetailsPage;