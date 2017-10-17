import React,{Component} from 'react'
import {Link} from 'react-router-dom'


export default class Nav extends Component{
    render(){
      return (
        <ul className ="nav nav-pills">
          <li className ="active"><Link to='/home'>Home</Link></li>
          <li><Link to='/page1'>Page1</Link></li>
          <li><Link to='/page2'>Page2</Link></li>
        </ul>
      );
    }
}
