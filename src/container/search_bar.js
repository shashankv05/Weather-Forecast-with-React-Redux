import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{

    constructor(props){

        super(props);
        this.state = {term:''};  //component based State

        this.OnInputChange = this.OnInputChange.bind(this);
        this.OnFormSubmit = this.OnFormSubmit.bind(this);

    }

    OnInputChange(event){
        // console.log(event.target.value);
        this.setState({term:event.target.value});

    }

    OnFormSubmit(event){
        event.preventDefault();  // tells the browser don't submit the form

        this.props.fetchWeather(this.state.term);
        this.setState({term:''});
    }    


    render(){
            return(
                   <form onSubmit= {this.OnFormSubmit} className="input-group">
                       <input
                       placeholder="Get a five-day forecast in your favourite cities (In India)"
                       className="form-control"
                       value = {this.state.term}
                       onChange = {this.OnInputChange}
                       />
                       <span className = "input-group-btn">
                           <button type="submit" className="btn btn-secondary">
                               Submit
                           </button>
                       </span>
                   </form> 

            );
    
    }
}


function mapDispatchToProps(dispatch){

    return bindActionCreators({fetchWeather:fetchWeather},dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

