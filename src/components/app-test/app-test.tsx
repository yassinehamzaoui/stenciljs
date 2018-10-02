import { Component, Prop, State } from '@stencil/core';
@Component({
    tag: 'app-test',
    styleUrl: 'app-test.css'
})
export class apptest{
    @Prop() name: string = "test";
    @State() variablenombre: number;

    componentWillLoad() {
        console.log('Component is about to be rendered');
      }

    render(){
        return (
            <div>
            <h1> Hello Yassine </h1>
             <p>My name is {this.name}</p>
            </div>
        )}
}