import { action, computed, observable } from 'mobx';

export default class BaseState {
    @observable test: boolean = false;

    @action.bound
    public getInfo(parm?:boolean) {
        console.log(parm);
    }
}