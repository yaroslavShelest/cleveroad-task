import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import  Astronams from '../components/Astronams';
import { setAstronamsThunk, setLocationThunk } from '../reducers/space-reducer';


class AstronamsContainer extends React.Component {
     componentDidMount() {
          this.props.setAstronams();
          this.props.setLocation();       
     };

     render() {
          setInterval(() => (  
          this.props.setLocation()  ), 7000);
          return ( 
          <div>
          <Astronams {...this.props}/> 
         </div>
         )
      }
};

const mapStateToProps = (state) => ({
     astronams:state.spaceReducer.astronams.people
});


export default compose(
     connect(mapStateToProps,{
          setAstronams:setAstronamsThunk,
          setLocation:setLocationThunk
     }),
     )(AstronamsContainer)