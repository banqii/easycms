'use strict';

import Base from './base.js';

export default class extends Base {
    /**
     * selectall action
     * @return {Promise} []
     */
    async selectallAction() {
        let model = this.model('index');
        let data = await model.select();//查多条
        data = this.rowsToObj(data);
        this.end(data);
    }
    /**
     * selectone action
     * @return {Promise} []
     */
    async selectoneAction() {
    	let articleid = this.get('articleid');
        let model = this.model('index');
    	let data = await model.where({articleid: articleid}).find();//查一条
    	// console.log(data);
		this.end(data);
    	//data returns {name: 'thinkjs', email: 'admin@thinkjs.org', ...}
    }
    /**
     * updateone action
     * @return {Promise} []
     */
    async updateoneAction(){
    	let articleid = this.post('data[articleid]');//文章id
    	let title = this.post('data[title]');//文章标题
    	let indeximgurl = this.post('data[indeximgurl]');//文章首图
    	let content = this.post('data[content]');//文章内容
    	let edittime = new Date();//文章编辑时间
    	let edittime1 = edittime.toLocaleDateString() + ' ' + edittime.toLocaleTimeString();

    	let model = this.model('index');
    	let affectedRows = await model.where({articleid: articleid}).update({title: title, indeximgurl: indeximgurl, content: content, edittime: edittime1});
    	if (affectedRows==1) {
    		this.end({tip: 'success'});
    	}else{
    		this.end({tip: 'failed'});
    	}
  	}
    /**
     * addone action
     * @return {Promise} []
     */
    async addoneAction(){
    	let title = this.post('data[title]');
    	let indeximgurl = this.post('data[indeximgurl]');
    	let content = this.post('data[content]');
    	let edittime = new Date();//文章编辑时间
    	let edittime1 = edittime.toLocaleDateString() + ' ' + edittime.toLocaleTimeString();

    	let model = this.model('index');
    	let insertId = await model.add({articleid: null, title: title, indeximgurl: indeximgurl, content: content, edittime: edittime1});
    	if (insertId>0) {
    		this.end({tip: 'success'});
    	}else{
    		this.end({tip: 'failed'});
    	}
    	
  	}
    /**
     * deleteone action
     * @return {Promise} []
     */
    async deleteoneAction(){
    	let articleid = this.get('articleid');
    	let model = this.model('index');
    	let affectedRows = await model.where({articleid: articleid}).delete();
    	if (affectedRows>0) {
    		this.end({tip: 'success'});
    	}else{
    		this.end({tip: 'failed'});
    	}
  	}

    // tools
    rowsToObj(rows) {
        var a = {};
        for (var i = 0; i < rows.length; i++) {
            var o = {};
            for (var x in rows[i]) {
                // console.log(x + ':' + rows[i][x]);
                o[x] = rows[i][x];
            }
            a[i] = o;
        }
        return a;
    }
}
