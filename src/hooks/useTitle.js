import { useEffect } from "react"

const useTitle = title => {
    useEffect( () => {
        document.title = `Alimama | ${title}`;
    } , [title])
};

export default useTitle;