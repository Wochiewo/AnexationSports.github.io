import Head from 'next/head'
import { useEffect, useState } from 'react'
import io from 'socket.io-client'

export default function Home() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000')
    socket.on('match_event', (event) => {
      setEvents((prev) => [event, ...prev].slice(0, 10))
    })
    return () => socket.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>Anexation Sports - Global Live Scores</title>
        <meta name="description" content="Track real-time scores and stats for all global sports leagues." />
      </Head>
      <main className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">Anexation Sports</h1>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Live Match Events</h2>
          <ul>
            {events.map((e, idx) => (
              <li key={idx} className="border-b py-2">
                <span className="font-bold">{e.eventType}</span> for <span className="text-blue-500">{e.team}</span> at <span className="text-gray-500">{e.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}