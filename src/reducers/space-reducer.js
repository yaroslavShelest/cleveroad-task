import { astrosAPI } from "../services/api";

const SET_ASTRONAMS= "astrons/SET_ASTRONAMS";
const SET_ISS_NOW = 'astrons/SET_ISS_NOW';


const initialState = {
     isLoading: false,
     astronams: [],
     location:null
};

const spaceReducer = (state = initialState, action) => {
     switch (action.type) {
          case SET_ASTRONAMS:
               return {
                    ...state,
                    astronams: action.astronams,
               };
          case SET_ISS_NOW:
               return {
                    ...state,
                    location: action.location,
               };

          default:
               return state;
     }
};




export const actionSetAstronams = (astronams) => ({type: SET_ASTRONAMS,astronams});
export const actionSetIssNow = (location) => ({type: SET_ISS_NOW,location});
    
     
     
export const setAstronamsThunk = () => {
     return async (dispatch) => {
          let response = await astrosAPI.getAstros()
          dispatch(actionSetAstronams(response.data))
     }
};

export const setLocationThunk = () => {
     return async (dispatch) => {
          let response = await astrosAPI.getISS()
          dispatch(actionSetIssNow(response.data))
     }
};

export default spaceReducer;