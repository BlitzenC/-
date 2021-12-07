import React, { Component } from 'react';
import "antd/dist/antd.css";
import { Input, Button,Tag,List } from "antd";

class Counter extends React.Component {
    state={
        counter:0,
        toDoList:[]
    }
    handleIncrement = ()=>{
        // console.log('button');
        
        // this.state.counter++;
        this.state.counter = this.state.counter+1;
        this.state.toDoList.push(this.state.counter);
        // console.log(this.state.counter)
        this.setState(this.state);
    }
    handleDecrement = ()=>{
        // console.log('button');
        this.state.counter=this.state.counter-1;
        if(this.state.counter<=0){
            this.state.toDoList.push(this.state.counter);
        }
        else{
            this.state.toDoList.pop();
        }
        
        this.setState(this.state);
    }
    reset = () =>{
        //this function will reset the list and the counter to 0
        this.setState({counter:0, toDoList:[]});
    }
    formatCount(){
        return this.state.counter===0 ? <Tag color="blue">Zero</Tag> :<Tag color="yellow">{this.state.counter}</Tag>
    }
    render() { 
        return  <div>
                    {this.formatCount()}
                    <Button shape="round" onClick={this.handleIncrement}> Plus 1 </Button>
                    <Button shape="round" onClick={this.handleDecrement}> Minus 1 </Button>
                    <Button shape="round" onClick={this.reset}> Initialize </Button>
                    <br/>
                    <List
                        size="small"
                        bordered
                        dataSource={this.state.toDoList}
                        renderItem={item => <List.Item>{item}</List.Item>}
                    />
                </div>;
    }
}
export default Counter; 