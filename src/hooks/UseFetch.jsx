import { useEffect, useState } from "react";

const useFetch = (URL) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState();
    const [isError, setIsError] = useState();

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => setData(data))
            .catch((error) => setIsError(error));
    }, [])

    return { data, isError, }
}

export default useFetch;