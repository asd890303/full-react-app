import { action, computed, observable } from 'mobx';
import BaseState from './base.state';

export default abstract class HomeState extends BaseState {
    @observable aa: boolean = false;

    constructor() {
        super();
        console.log("init home state");
    }
}