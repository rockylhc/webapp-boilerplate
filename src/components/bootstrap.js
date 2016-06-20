import React, {Component} from 'react';
import Footer from './footer';


var a = [4, 5, 6]; 
var b = [1, 2, 3, ...a, 7, 8, 9]; 
console.log(a);

class Bootstrap extends Component{
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <h3>Hello dfgdfg</h3>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Bootstrap;