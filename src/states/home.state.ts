import { action, computed, observable } from 'mobx';

import BaseState from './base.state';

export default class HomeState extends BaseState {
    @observable aa: boolean = false;

    @action.bound
    handleClick() {
        console.log("init home state get");
    }
}