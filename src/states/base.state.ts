import { action, computed, observable } from 'mobx';

export default abstract class BaseState {
    @observable test: boolean = false;

    constructor() {
        console.log("init base state");
    }

    @action.bound
    public func(parm: boolean) {
        console.log(parm);
    }
}