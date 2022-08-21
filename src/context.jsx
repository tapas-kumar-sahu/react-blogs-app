import { useReducer } from "react";
import { createContext, useContext, useEffect } from "react";


const apiLink = "https://hn.algolia.com/api/v1/search?";
const initialState = {
    isLoading: true,
    query: "tech",
    nbPages: 0,
    page: 0,
    hits: []
};

const ContextData = createContext();

const ContextProvider = ({children}) => {

    const reducer = (state, action) => {
        switch(action.type){
            case "loading_status":
                return {
                    ...state,
                    isLoading: true
                }
            case "get_blog":
                return {
                    ...state,
                    isLoading: false,
                    hits: action.payload.hits,
                    nbPages: action.payload.nbPages
                }
            case "remove_post":
                return{
                    ...state,
                    hits: state.hits.filter((item)=>{
                        return item.objectID !== action.postID
                    })
                }
            case "search_post":
                if(action.postQuery === ""){
                    return {
                        ...state,
                        query: "programming"
                    }
                }
                return{
                    ...state,
                    query: action.postQuery
                }
            case "prev_page":
                return{
                    ...state,
                    page: state.page - 1
                }
            case "next_page":
                return{
                    ...state,
                    page: state.page + 1
                }
        }
    }

    const[state, dispatch] = useReducer(reducer, initialState);

    const fetchData = async (url) =>{
    
        dispatch({
            type: "loading_status",
        })

        try{
            const res = await fetch(url);
            const apiData = await res.json();
            dispatch({
                type: "get_blog",
                payload: {
                    hits: apiData.hits,
                    nbPages: apiData.nbPages
                }
            })
        }
        catch(error){
            console.log(error);
        }
    }

    // remove article post
    const removeArticle = (id) => {
        dispatch({
            type: "remove_post",
            postID: id
        })
    }
    // search article
    const searchArticle = (searchValue) => {
        // console.log(e.target.value);
        dispatch({
            type: "search_post",
            postQuery: searchValue
        })
    }
    // Pagination
    const prevPage = () => {
        dispatch({
            type: "prev_page",
        })
    }
    const nextPage = () => {
        dispatch({
            type: "next_page",
        })
    }


    useEffect(()=>{
        fetchData(`${apiLink}query=${state.query}&page=${state.page}`);
    },[state.query, state.page])

    return <ContextData.Provider value={{...state, removeArticle, searchArticle, prevPage, nextPage}}> {children} </ContextData.Provider> ;
}

// custom hook
const useGlobalContext = () => {
    return useContext(ContextData)
}

export {ContextData, ContextProvider, useGlobalContext};
