import { useState, useEffect } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
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

    const getTime = async () => {
        fetchTime()
        setDate(new Date(time * 1000).toLocaleDateString().toLocaleString())
    }

    useEffect(() => {
        fetchAPIHealth()
        getTime()
        fetchWelcome()
        fetchAPIVersion()
    }, [])

    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>{welcome}</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <div className="card">
                    <p>{time}</p>
                    <button onClick={() => getTime()}>
                        Update Time
                    </button>
                </div>
            </div>
        </>
    )
}

export default App
