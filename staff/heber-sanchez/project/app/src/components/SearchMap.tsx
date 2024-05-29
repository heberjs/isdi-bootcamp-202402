//@ts-nocheck
import { logger } from '../utils'
import logic from '../logic'
import Header from '../components/Header'
import FooterNav from '../components/FooterNav'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useContext } from '../context'



const MapComponent = () => {

    const { showFeedback, showConfirm } = useContext()
    const [matches, setMatches] = useState([])
    const [map, setMap] = useState(null)




    const loadMatches = () => {
        try {
            logic.retrieveMatches()
                .then(matches1 => {
                    const matches = matches1.filter(match => new Date(match.date) > new Date())
                    setMatches(matches)
                })
                .catch(error => showFeedback(error, 'error'))
        } catch (error) {
            showFeedback(error)
        }
    }


    useEffect(() => {
        loadMatches()

        const map = L.map('map').setView([41.3851, 2.1734], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        map.locate({ setView: true, maxZoom: 16 })

        map.on('locationfound', (e) => {
            const radius = e.accuracy / 2

            const marker = L.marker(e.latlng).addTo(map)
                .bindPopup(`you are here`)


            L.circle(e.latlng, { radius }).addTo(map)

        })

        map.on('locationerror', (e) => {
            showFeedback(e.message, 'error')
        })

        setMap(map)

    }, []);

    useEffect(() => {
        if (matches.length === 0 || !map) return

        matches.forEach(match => {
            const latitude = match.field.location.latitude
            const longitude = match.field.location.longitude
            const date = moment(match.date).format('dddd, MMMM, Do, h:mm a')
            const marker = L.marker([latitude, longitude]).addTo(map)
            marker.bindPopup(`<b>${match.field.name}</b><br>${match.field.address}<br>${date}`)
        })
    }, [matches, map])

    return <div id="map" className='h-screen z-0'></div>
}

export default MapComponent