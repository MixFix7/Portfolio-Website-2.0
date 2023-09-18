import { useEffect, useState } from "react"
import { SERVER_URL } from "../components/Routing/Routing"

export const useFetch = (url, method, body, ReqAuth) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [status, setStatus] = useState(null)

    useEffect(() => {
        try {
            const fetchData = async () => {
                const response = await fetch(SERVER_URL + url, {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body)
                })
                const data = await response.json()

                setStatus(response.status)
                setData(data)
            }

            fetchData()
        } catch (error) {
            setStatus(error.status || 500)
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }, [url])

    return {data, isLoading, error, status}
}