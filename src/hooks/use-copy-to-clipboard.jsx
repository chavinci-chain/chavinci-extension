import { useState } from "react";


export default function useCopyToClipboard(){
    const [copied, setCopied] = useState(false);
    const [error, setError]= useState(false);

    const copyToClipboard =  text =>{
        navigator.clipboard.writeText(text)
        .then(()=>{
            setCopied(true);
            setTimeout(()=> setCopied(false), 10000)
        }).catch(err=> setError(err))
    }


    return{
        copied,
        error,
        copyToClipboard
    }



}