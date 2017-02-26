import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';


export default class Header extends React.Component {

  render() {
    return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>
      	<div>
       		<RaisedButton onClick={() => browserHistory.push('/')} className="headerbtn" label="首页" />
        	<RaisedButton onClick={() => browserHistory.push('/edt')} className="headerbtn" label="新增" />
      	</div>
        {this.props.children}
      </div>
     </MuiThemeProvider>
    );
  }
}