import React from "react";
export default class Demo extends React.Component{
    render(){
        // console.log(this);
        return(
            <>
            <h1>Hello  {this.props.value.valfour} {this.props.value2[2]} Developers</h1>
            </>
        )
    }
}

















// export  class Test extends React.Component{
//     render(){
//         return(
//             <h1>Test class</h1>
//         )
//     }
// }
// export class Example extends React.Component{
//     render(){
//         return(
//             <h1>Example class</h1>
//         )
//     }
// }
// export  class Test2 extends React.Component{
//     render(){
//         return(
//             <h1>Test class<span>Hello</span></h1>
//         )
//     }
// }
// export default Demo;
// export {Test,Example};