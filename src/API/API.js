import * as axios from "axios";
  
export const getCarrencies = async () => {
  return await axios.get(`http://data.fixer.io/api/latest?access_key=ab00cc4fd0db3123de763c9c47e14cdc`)
  .then(responce => responce.data);
}