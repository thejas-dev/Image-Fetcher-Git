import React from "react";

class searchinput extends React.Component {
    


constructor(props){
    super(props)
    this.state={entry:''}
  
}

onFormSubmit=(event)=>{
    event.preventDefault();
    this.props.onSearchSubmit(this.state.entry);
}


    render(){
    
        return(
            <div className='ui segment' >
                <form className="ui form" onSubmit={this.onFormSubmit} >
                <h1> Image Fetcher</h1>
                <div  className="field">
                    <div className="ui massive icon input">                
                    <input type="text" placeholder="Search here" 
                    onChange={(event)=>
                    this.setState({entry:event.target.value})}
                    value={this.state.entry}
                    />
                <i className="search icon"></i>
            </div></div>
                </form>
                </div>

        
        )

    }
}

export default searchinput;