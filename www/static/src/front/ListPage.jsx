//文章列表页
import React from 'react';
import { browserHistory } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import $ from "jquery";

// var data = [
// {
// 	articleid: '1',
// 	indeximgurl: 'static/img/img1.jpg',
// 	title: '大公司晚报】董振被禁止进入保险业10年，网易决定带《阴阳师》自驾出海，乐视体育新困境',
// 	edittime: 'Jan 9, 2014'
// },
// {
// 	articleid: '2',
// 	indeximgurl: 'static/img/img1.jpg',
// 	title: '大公司晚报】董振被禁止进入保险业10年，网易决定带《阴阳师》自驾出海，乐视体育新困境',
// 	edittime: 'Jan 9, 2014'
// },
// {
// 	articleid: '3',
// 	indeximgurl: 'static/img/img1.jpg',
// 	title: '大公司晚报】董振被禁止进入保险业10年，网易决定带《阴阳师》自驾出海，乐视体育新困境',
// 	edittime: 'Jan 9, 2014'
// }
// ];

class ListPage extends React.Component {
	componentWillMount(){
		var data = [];
		var _self = this;
		this.serverRequest = $.get('http://localhost:8360/home/index/selectall', function (result) {
			var json = JSON.parse(result);
			for(var i in json){
				data.push(json[i]);
			}
			this.setState({data: data});
    	}.bind(this));
	}
	componentDidMount(){
	}
	constructor(props) {
    	super(props);
    	this.state = {data:[]};
    	this.getKey = this.getKey.bind(this);
  	}
	getKey(articleid){
		browserHistory.push('/detail?articleid=' + articleid);
	}
	render() {
	  	var _self = this;
	  	if (this.state.data.length==0) {
		  	return	<RaisedButton className="notebtn" label="没有文章" />		
	  	}else{
		  	var items = this.state.data.map(function(index, elem) {//循环输出列表
		  		// var articleid = index.articleid;
		  			return (<li key={index.articleid} onClick={() => _self.getKey(index.articleid)}>
		  				<div>
		  					<img src={index.indeximgurl} />
		  				</div>
		  				<div>
		  					<p>{index.title}</p>
		  					<p>{index.edittime}</p>
		  				</div>
		  			</li>)
		  	});
	  	}


	    return (
	    	<MuiThemeProvider muiTheme={getMuiTheme()}>
	    		<ul className='listpage'>
	    			{items}
	    		</ul>
	    	</MuiThemeProvider>
	    );
	  }
}

export default ListPage;