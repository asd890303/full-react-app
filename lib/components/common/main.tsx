import * as React from 'react';
import MainProps from '../module/MainProps';
import MainState from '../module/MainState';
import ItemList from './itemList';

const testData = [{
    id: 0,
    name: '美光Micron Crucial MX500 1TB M.2 2280 SATAⅢ 固態硬碟',
    type: 'SSD',
    url: 'https://24h.pchome.com.tw/prod/DRAH7G-A9008XUIQ?fq=/S/DRAH3H',
    updated: '2018/11/19 16:04:27',
    content: 'test',
    imgUrl: 'http://d.ecimg.tw/items/DRAH7GA9008XUIQ/000001_1524111998.jpg',
    price: '5699'
}, {
    id: 0,
    name: '美光 Crucial MX500 1TB/M.2 SATA 2280/讀:560M/寫:510M/64層3D TLC/五年保固*捷元代理商公司貨*',
    type: 'SSD',
    url: 'https://www.sinya.com.tw/prod/118409',
    updated: '2018/11/19 16:04:27',
    content: 'test',
    imgUrl: 'https://www.sinya.com.tw/upload/prod/118409.jpg',
    price: '5499'
}];

class Main extends React.Component<MainProps, MainState> {
    constructor(props: MainProps) {
        super(props);
        
        // todo:test data
        this.state = {
            itemList: testData,
            updated: '2018/11/19 16:10:33'
        };
    }

    // // public handleGetData = () => {
    // //     fetch('www.', { method: 'GET' })
    // //         .then((res) => {
    // //             if (res.ok) {
    // //                 return res.json();
    // //             } else {
    // //                 throw new Error(res.statusText);
    // //                 console.log(res);
    // //             }
    // //         })
    // //         .then(result => this.setState({

    // //         }));
    // // }

    public render() {
        return (
            <div className="Main">
                <ItemList itemList={this.state.itemList} />
            </div>
        );
    }
}

export default Main;
