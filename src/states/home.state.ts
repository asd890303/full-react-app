import { action, computed, observable } from 'mobx';

export default abstract class HomeState extends BaseState  {
    @observable test: boolean = false;
     
      constructor() {
          console.log("init home state");
          this.test(true);
      }
}