import { action, computed, observable } from 'mobx';

import BaseState from './base.state';
import ItemBase from 'components/module/ItemBase';

export default class HomeState extends BaseState {

    @observable isLoading: boolean = true;
    @observable itemList: ItemBase[];

    constructor() {
        super();
        // this.priceAlertService = new PriceAlertService(this.applicationState);
    }

    @action.bound
    handleClick() {
        console.log("state handleClick");
    }

    @action.bound
    initHomePage = () => {
        this.itemList = [{
            id: 0,
            name: '美光Micron Crucial MX500 1TB M.2 2280 SATAⅢ 固態硬碟',
            type: 'SSD',
            url: 'https://24h.pchome.com.tw/prod/DRAH7G-A9008XUIQ?fq=/S/DRAH3H',
            updated: '2018/11/19 16:04:27',
            content: 'test',
            imgUrl: 'http://d.ecimg.tw/items/DRAH7GA9008XUIQ/000001_1524111998.jpg',
            price: '5699',
            site: '24pchome'
        }, {
            id: 1,
            name: '美光 Crucial MX500 1TB/M.2 SATA 2280/讀:560M/寫:510M/64層3D TLC/五年保固*捷元代理商公司貨*',
            type: 'SSD',
            url: 'https://www.sinya.com.tw/prod/118409',
            updated: '2018/11/19 16:04:27',
            content: 'test',
            imgUrl: 'https://www.sinya.com.tw/upload/prod/118409.jpg',
            price: '5499',
            site: 'sinya'
        }]
    }
}