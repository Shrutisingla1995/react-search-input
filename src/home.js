import React  from 'react';
import PlacesInput from './components/place-input/input';

class Home extends React.Component{
    constructor(props) {
        super(props);
      }

    
    render(){
        return(
            <div>
                <PlacesInput callback="search()" />
            </div>
        )
     }
}

export default Home;
