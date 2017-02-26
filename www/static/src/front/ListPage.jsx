//文章列表页
import React from 'react';
import { browserHistory } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
var data = [
{
	articleid: '1',
	indeximgurl: 'static/img/img1.jpg',
	title: '大公司晚报】董振被禁止进入保险业10年，网易决定带《阴阳师》自驾出海，乐视体育新困境',
	edittime: 'Jan 9, 2014'
},
{
	articleid: '2',
	indeximgurl: 'static/img/img1.jpg',
	title: '大公司晚报】董振被禁止进入保险业10年，网易决定带《阴阳师》自驾出海，乐视体育新困境',
	edittime: 'Jan 9, 2014'
},
{
	articleid: '3',
	indeximgurl: 'static/img/img1.jpg',
	title: '大公司晚报】董振被禁止进入保险业10年，网易决定带《阴阳师》自驾出海，乐视体育新困境',
	edittime: 'Jan 9, 2014'
}
];

class ListPage extends React.Component {
	componentWillMount(){

	}
	componentDidMount(){

	}
	constructor(props) {
    	super(props);
    	this.getKey = this.getKey.bind(this);
  	}
	getKey(articleid){
		console.log(articleid);
		browserHistory.push('/detail?articleid=1234');

	}
	  render() {
	  	var _self = this;
	  	if (data.length==0) {
		  	return	<RaisedButton label="没有文章，点击新建文章" />		
	  	}else{
		  	var items = data.map(function(index, elem) {//循环输出列表
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