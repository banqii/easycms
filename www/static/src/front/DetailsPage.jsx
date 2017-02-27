//文章详情页
import React from 'react';
import { browserHistory } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import $ from "jquery";

// var data = {
// 	title: '大公司晚报】董振被禁止进入保险业10年，网易决定带《阴阳师》自驾出海，乐视体育新困境',
// 	indeximgurl: 'static/img/img1.jpg',
// 	content: '<p>是不是特别眼熟？这种情况，大多出现在老板对员工的管理上。对此，我们深表同情。<br/></p>'
// 			+'<p><br/></p>'
// 			+'<p>诚然，作为一名领导者，必然具备相当的业务能力和生存技能，行动目标明确，懂得抓大放小，但维护自己的“权威”也是应有之义。和下属沟通不顺，可能有几种原因：员工理解不全，办事效率不高，惰性心理作祟……&nbsp;</p>'
// 			+'<p><br/></p>'
// 			+'<p>但还有一种被广泛吐槽的情况是——明明领导错了，死不认错，反问员工：“我叫你吃屎，你怎么不去？”</p>'
// 			+'<p><br/></p>'
// 			+'<p>如果是前者，那请务必为员工“高亮”沟通的重要性。沟通不仅仅是一个“自上而下”的过程，更是“自下而上”的追溯，“不懂就问”是最基本的职业操守，切勿一片混沌就盲目下手。但如果失误的责任方在领导自己，那敢于承担责任将会是每个领导者，也是每个职场人的必修课。回到最开头的三个例子，主要原因都是领导出现原则性错误，却把责任归咎到员工的身上。凡此种种频繁发生，必然产生损害性后果。</p>'
// 			+'<p><br/></p>'
// 			+'<p>任何一个人，他在公司跟着领导一起拼搏，他希望财务有回报，希望做的这件事有意义，希望自己个人有成长。如果有一个引导者可以为员工指明正确的前进方向，那将会是员工成长的催化剂；反之，“甩锅”则会摧毁信任，员工在黑人问号脸的同时，内心暗骂傻 X 不是很正常吗？因为他不仅会觉得自己没有得到长足的发展与进步，还觉得白白浪费了时间和精力。</p>',
// 	edittime: 'Jan 9, 2014'	
// }

class DetailsPage extends React.Component {
	componentWillMount(){
		if (this.props.location.query.articleid) {
	      	console.log('我要加载数据了');
			var data = [];
			var _self = this;
			this.serverRequest = $.get('http://localhost:8360/home/index/selectone?articleid='+this.props.location.query.articleid, function (result) {
				console.log(result);
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
				<section dangerouslySetInnerHTML={this.createMarkup()}>
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