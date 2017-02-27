'use strict';
/**
 * model
 */
export default class extends think.model.base {
 init(...args){
    super.init(...args);
    this.tablePrefix = ''; //将数据表前缀设置为空
    this.tableName = 'article'; //将对应的数据表名设置为 user2
    this.pk = 'articleid'; //将主键字段设置为 user_id
  }
}