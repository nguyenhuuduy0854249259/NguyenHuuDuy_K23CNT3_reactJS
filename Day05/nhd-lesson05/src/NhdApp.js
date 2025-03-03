import React, { Component } from 'react'
import NhdFuncEvent1 from './components/NhdFuncCompEvent1';
import NhdClassCompEvent1 from './components/NhdClassCompEvent1';


class NhdApp extends Component {
    render() {
        return (
            <div className='container border mt-3'>
                <h1 className='text-center alert-info my-2 '>K23CNT3 - Nguyễn Hữu Duy - Event and form</h1>
            <hr/>

                <div>
                    <NhdFuncEvent1 />
                    <h2>Hello</h2>
                </div>
                <div>
                    <h2>Xin chào</h2>
                    <NhdClassCompEvent1 />
                </div>
            </div>
        );
    }
}


export default NhdApp;