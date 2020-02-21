import { compose } from 'redux';
import { connect } from 'react-redux';

import  App from '../App';


const mapStateToProps = (state) => ({
     location:state.spaceReducer.location,
});


export default compose(
     connect(mapStateToProps,{}),
     )(App)