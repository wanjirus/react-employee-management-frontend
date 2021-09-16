import React, { Component } from 'react';

class UploadImageComponent extends Component {
    constructor(props){
        super(props)
        this.state={}

    }
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="text-center">profile pic</h1>
                    <div className="col-sm-3" style="background-colr:black"></div>
                </div>
            </div>
        );
    }
}

export default UploadImageComponent;