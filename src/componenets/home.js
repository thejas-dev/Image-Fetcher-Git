import React from 'react'
import Searchinput from './searchinput'
import Imagelist from './imagelist'
import axios from 'axios';



class Home extends React.Component {

    constructor(props){
      super(props)
        this.state = {images:[]}
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }
    
    async onSearchSubmit(entry){
       const response = await axios.get(`https://pixabay.com/api/?key=28251731-0d9a7e72380fb48a62fd0ead6&q=${entry}&image_type=photo&pretty=true`)    
       this.setState({images:response.data.hits})
    }
    
    render(){
        return(
        
    <div className='ui container' style={{marginTop:'50px'}} >
      <Searchinput onSearchSubmit={this.onSearchSubmit} />
       <Imagelist images={this.state.images}/>
    </div>


        )

    }
}
export default Home;