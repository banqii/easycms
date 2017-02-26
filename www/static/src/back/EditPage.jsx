//文章编辑页
import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
//ueditor
import UEditor from './UEditor';

var data = {
	articleid: '',
	title: 'aaa',
	indeximgurl: 'url',
	content: '文章内容'
}
class EditPage extends React.Component {
  componentWillMount(){
    if (this.props.location.query.articleid) {
      console.log('我要加载数据了');
      this.state = {
        ifedit: true,
        title: 'aaa',
        indeximgurl: 'aaa',
        content: 'aaa'
    };
    }else{
      console.log('我没有数据可以加载');
    }
    
  }
  constructor(props) {
    super(props);
    this.state = {
      ifedit: false,
    	title: '',
		  indeximgurl: '',
		  content: ''
    };

    this.tChange = this.tChange.bind(this);
    this.iChange = this.iChange.bind(this);
    this.cGetContent = this.cGetContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  tChange(event) {
    this.setState({title: event.target.value});
  }
  iChange(event) {
    this.setState({indeximgurl: event.target.value});
  }
  cGetContent(event) {//设置content
    this.setState({content: UE.getEditor('ueditor').getContent()});
  }

  handleSubmit(event) {//提交
    if (this.state.ifedit) {
      console.log("我正在更新文章");
    }else{
      console.log("我正在新建文章");
    }
    event.preventDefault();
  }


  render() {
  	console.log(this.props.location.query.articleid);
  	return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
    <article className='editpage'>
      	<form onSubmit={this.handleSubmit}>
	      	<TextField
	     		// hintText="Message Field"
	      		floatingLabelText="文章标题"
	      		multiLine={true}
	      		fullWidth={true}
	      		rows={1}
	      		value={this.state.title}
	      		onChange={this.tChange}
	    	/>
	    	<br />
	        <TextField
	     		// hintText="Message Field"
	      		floatingLabelText="图片url"
	      		multiLine={false}
	      		fullWidth={true}
	      		rows={1}
	      		value={this.state.indeximgurl}
	      		onChange={this.iChange}
	    	/>
	    	<br /><br />
	    	<label>文章内容</label>
	    	<br /><br />
	    	<UEditor value={this.state.content} id="ueditor" name="ueditor" width="100%" height="300" />
	        <RaisedButton type='submit' label="发布文章" />
     	</form>
    </article>
   	</MuiThemeProvider>
    );
    
  }
}


export default EditPage;