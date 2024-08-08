import { useState, useEffect } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [time, setTime] = useState(null)
    const [date, setDate] = useState(null)
    const [count, setCount] = useState(0)
    const [error, setError] = useState(null)

    const [cancelToken, setCancelToken] = useState(axios.CancelToken.source())

    const [welcome, setWelcome] = useState(null)


    const fetchAPIVersion = async () => {
        const res = await axios.get('http://127.0.0.1:8000/api/')
        console.log("API Version:", res.data)
    }

    const fetchAPIHealth = async () => {
        const res = await axios.get('http://127.0.0.1:8000/api/health')
        console.log("API Health:", res.data)
    }

    const fetchWelcome = async () => {
        const res = axios.get('http://127.0.0.1:8000/api/welcome')
            .then((res) => {
                if (res.data == null) {
                    setWelcome("Welcome")
                }
                else {
                    setWelcome(res.data)
                }
            })

    }

    const fetchTime = async () => {
        const res = await axios.get('http://127.0.0.1:8000/api/time')
            .then((res) => {
                console.log("Time:", res.data)
                setTime(res.data)
            })
    }

    const getTime() => {
        fetchTime()
        setDate(new Date(time * 1000).toLocaleDateString().toLocaleString())
    }, [])

    useEffect(() => {
        fetchAPIHealth()
        getTime()
        fetchWelcome()
        fetchAPIVersion()
    }, [])

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>{welcome}</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <button onClick={() => getTime()}>
                    Current Time: {time}
                </button>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
