import React  from 'react';
import axios from 'axios';

class PlacesInput  extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            address:[],
        }
      }
      componentDidMount(){
        axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=123+main+street&location=42.3675294,-71.186966&radius=10000&key=yourkey
        `)
        .then((response)=>{
            this.setState({
                address: response.data.results
            })
            console.log(this.state.address)
        })
    }
    
    render(){
        return(
            <div>
                <input type="text" placeholder="Search..." />
            </div>
        )
     }
}

export default PlacesInput;
