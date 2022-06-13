import React from 'react'
import Row from "react-bootstrap/Row";
import BandItem from '../components/BandItem';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function Applicants() {
    const params = useParams()

    const applicants = useSelector(state => state.gigApplications.filter(application => application.listing.id === parseInt(params.id)))

    console.log(applicants)

    const renderBands = applicants.map(applicant => {
        return <BandItem key={applicant.id} band={applicant.band} />
    })

    return (
        <Row xs={1} sm={2} md={3} lg={4}>
            {renderBands}
        </Row>
    )
}

export default Applicants