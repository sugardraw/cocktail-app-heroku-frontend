
import axios from "axios";

export const getCocktails = ingredient => dispatch => {
    console.log("action",ingredient);
     axios
        .get(`https://damp-sea-45813.herokuapp.com/api/cocktails/get-matches/?name=${ingredient}`)
        .then(data => {
            console.log('axios', data.data);
            dispatch({
                type: 'LOAD_COCKTAIL',
                payload: data.data
            });
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: 'LOAD_COCKTAILS'
            });
        });
};

export const getAll = () => dispatch => {
    console.log("axios");
    axios
        .get("https://damp-sea-45813.herokuapp.com/api/cocktails/list")
        .then( data => {
            console.log('axios', data.data);
            dispatch({
                type: "LOAD_ALL",
                payload: data.data
            });
        })
        .catch( error => {
            console.log(error);
            dispatch({
                type: "LOAD_ALL"
            })
        })
};