import { astrosAPI } from "../services/api";

const TOGGLE_IS_LOADING = "astrons/TOGGLE_IS_LOADING";
const SET_ASTRONAMS= "astrons/SET_ASTRONAMS";
const SET_ISS_NOW = 'astrons/SET_ISS_NOW';


const initialState = {
     isLoading: false,
     astronams: [],
     location:null
};

const spaceReducer = (state = initialState, action) => {
     switch (action.type) {
          case TOGGLE_IS_LOADING:
               return {
                    ...state,
                    isLoading: action.isLoading
               };
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



export const actionToogleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING,isLoading});
export const actionSetAstronams = (astronams) => ({type: SET_ASTRONAMS,astronams});
export const actionSetIssNow = (location) => ({type: SET_ISS_NOW,location});
    
     
     
export const setAstronamsThunk = () => {
     return async (dispatch) => {
          dispatch(actionToogleIsLoading(true))
          let response = await astrosAPI.getAstros()
          dispatch(actionSetAstronams(response.data))
          dispatch(actionToogleIsLoading(false))
     }
};

export const setLocationThunk = () => {
     return async (dispatch) => {
          dispatch(actionToogleIsLoading(true))
          let response = await astrosAPI.getISS()
          dispatch(actionSetIssNow(response.data))
          dispatch(actionToogleIsLoading(false))
     }
};

export default spaceReducer;