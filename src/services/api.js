import * as axios from "axios";


const instanse = axios.create({
     baseURL: 'http://api.open-notify.org/',
});


export const astrosAPI = {
     getAstros() {
         return instanse.get(`astros.json`);
     },
     getISS() {
          return instanse.get(`iss-now.json`);
      }
};