'use strict';

export default class extends think.controller.base {
  /**
   * some base method in here
   */
  async indexAction(){
    //auto render template file index_index.html
    return this.display();
  }
}