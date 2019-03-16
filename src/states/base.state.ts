import { action, computed, observable } from 'mobx';

export default class BaseState {
    @observable baseVar: boolean = false;
    @observable timeState: string;

    constructor() {
        this.timeState = new Date().toLocaleString();
        console.log(this.timeState);
    }

    @action.bound
    public getBaseInfo(parm?: boolean) {
    }
}