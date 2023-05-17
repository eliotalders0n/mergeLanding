import {useState, useEffect} from 'react'

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const useGetExtras = () => {
    const [docs, setdocs] = useState([])

    useEffect(() => {
         firebase.firestore().collection("extras").onSnapshot((doc)=>{
            const quotes = [];
            doc.docs.forEach(document => {
              const nb = {
                id: document.id,
                ...document.data()
              }
              quotes.push(nb)
            })
            setdocs(quotes)
         })
    }, [])
    return {docs}
}

export default useGetExtras
