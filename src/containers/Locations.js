import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import  Location from '../components/Location';
import { setLocationThunk } from '../reducers/space-reducer';


class LocationContainer extends React.Component {
     componentDidMount() {
          this.props.setLocation();       
     };

     render() {
          return ( 
          <div>
               <Location {...this.props}/>   
          </div>
         )
      }
};

const mapStateToProps = (state) => ({
     location:state.spaceReducer.location,
     
});


export default compose(
     connect(mapStateToProps,{
          setLocation:setLocationThunk
     }),
     )(LocationContainer)