import React,{Component} from 'react'
import BasicRouters from '../router/ReactRouter'
import Footer from './Footer'

export default class Layout extends Component {
  render(){
    return(
      <div>
      <BasicRouters />
      <Footer />
      </div>
    );
  }
}
