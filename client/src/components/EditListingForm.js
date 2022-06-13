import React, { useState } from 'react'
import { useHistory, useLocation } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useDispatch } from 'react-redux';
import { editListing } from '../features/listingSlice';
import { useSelector } from 'react-redux';


function EditListingForm() {
    const [selectedMonth, setSelectedMonth] = useState(null)
    const errors = useSelector(state => state.listings.errors)

    console.log(errors)

    const history = useHistory();
    const dispatch = useDispatch()
    let locate = useLocation();

    const { id, location, description, title } =
        locate.state;

    const [editFormData, setEditFormData] = useState({
        location: "",
        title: "",
        description: "",
        month: "",
        day: "",
        year: ""
    });

    function renderMonths() {
        const currDate = new Date();
        const currMonth = currDate.getMonth();

        let upcomingMonths = [];

        for (let i = currMonth + 1; i < 13; i++) {
            if (i < 10) {
                upcomingMonths.push(`0${i}`);
            } else {
                upcomingMonths.push(i);
            }
        }

        for (let i = 1; i < currMonth + 1; i++) {
            if (i < 10) {
                upcomingMonths.push(`0${i}`);
            } else {
                upcomingMonths.push(i);
            }
        }

        upcomingMonths.unshift("Select Month");

        const monthOptions = upcomingMonths.map((month, i) => {
            return <option key={i}>{month}</option>;
        });

        return monthOptions;
    }

    function renderDays() {
        let upcomingDays = [];

        if (selectedMonth === "02") {
            for (let i = 1; i < 29; i++) {
                if (i < 10) {
                    upcomingDays.push(`0${i}`);
                } else {
                    upcomingDays.push(i);
                }
            }
        } else if (
            selectedMonth === "04" ||
            selectedMonth === "06" ||
            selectedMonth === "09" ||
            selectedMonth === "11"
        ) {
            for (let i = 1; i < 31; i++) {
                if (i < 10) {
                    upcomingDays.push(`0${i}`);
                } else {
                    upcomingDays.push(i);
                }
            }
        } else {
            for (let i = 1; i < 32; i++) {
                if (i < 10) {
                    upcomingDays.push(`0${i}`);
                } else {
                    upcomingDays.push(i);
                }
            }
        }

        upcomingDays.unshift("Select Day");

        const dayOptions = upcomingDays.map((day, i) => {
            return <option key={i}>{day}</option>;
        });

        return dayOptions;
    }

    function renderYears() {
        const currDate = new Date();
        const currYear = currDate.getFullYear();

        let upcomingYears = [];

        for (let i = currYear; i < currYear + 5; i++) {
            upcomingYears.push(i);
        }

        upcomingYears.unshift("Select Year");

        const yearOptions = upcomingYears.map((year, i) => {
            return <option key={i}>{year}</option>;
        });

        return yearOptions;
    }

    function renderTimes() {
        const currDate = new Date();
        const currHour = currDate.getHours();

        let upcomingTimes = [];

        for (let i = currHour; i < 24; i++) {
            for (let j = 0; j < 60; j++)
                if (j < 10) {
                    upcomingTimes.push(`${i}:0${j}`);
                } else {
                    upcomingTimes.push(`${i}:${j}`);
                }
        }

        for (let i = 0; i < currHour; i++) {
            for (let j = 0; j < 60; j++)
                if (j < 10) {
                    upcomingTimes.push(`${i}:0${j}`);
                } else {
                    upcomingTimes.push(`${i}:${j}`);
                }
        }

        upcomingTimes.unshift("Select Time");

        const timeOptions = upcomingTimes.map((time, i) => {
            return <option key={i}>{time}</option>;
        });

        return timeOptions;
    }

    const handleChange = (e) => {
        setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
    };

    function handleSaveChanges(e) {
        e.preventDefault()

        const { year, month, day, time, location, title, description } = editFormData

        const updatedListing = {
            title,
            location,
            description,
            date: `${year}-${month}-${day}T${time}:00`,
            id
        }

        console.log(updatedListing)

        dispatch(editListing(updatedListing, history))
    }

    return (
        <div>
            <Container fluid>
                <Container className="mx-auto mt-5">
                    <Row className="text-center">
                        <h1>Edit Listing</h1>
                    </Row>

                    <Row className="mb-5">
                        <Form onSubmit={handleSaveChanges}>

                            {/* <Form.Group className="mb-3">
                                <Form.Label>Image URL</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={`${image_url}...`}
                                    onChange={(e) => handleChange(e)}
                                    value={editFormData.image_url}
                                    name="image_url"
                                />
                            </Form.Group> */}

                            <Form.Group className="mb-3">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={`${title}...`}
                                    onChange={(e) => handleChange(e)}
                                    value={editFormData.title}
                                    name="title"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Location</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={`${location}...`}
                                    onChange={(e) => handleChange(e)}
                                    value={editFormData.location}
                                    name="location"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={`${description}...`}
                                    onChange={(e) => handleChange(e)}
                                    value={editFormData.description}
                                    name="description"
                                />
                            </Form.Group>

                            <Row>
                                <h3>Select Date of Event</h3>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Month</Form.Label>
                                        <Form.Select
                                            name="month"
                                            value={editFormData.month}
                                            onChange={(e) => {
                                                setSelectedMonth(e.target.value);
                                                handleChange(e);
                                            }}
                                        >
                                            {renderMonths()}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Day</Form.Label>
                                        <Form.Select
                                            name="day"
                                            value={editFormData.day}
                                            onChange={(e) => handleChange(e)}
                                        >
                                            {renderDays()}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Year</Form.Label>
                                        <Form.Select
                                            name="year"
                                            value={editFormData.year}
                                            onChange={(e) => handleChange(e)}
                                        >
                                            {renderYears()}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Time</Form.Label>
                                        <Form.Select
                                            name="time"
                                            value={editFormData.time}
                                            onChange={(e) => handleChange(e)}
                                        >
                                            {renderTimes()}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Row className="d-flex justify-content-center mt-4">
                                <Button variant="primary" type="submit" className="w-25">
                                    Save Changes
                                </Button>
                            </Row>
                            {errors ? errors.map(error =>
                                <Row className="text-danger text-center">
                                    <strong>{error}</strong>
                                </Row>
                            ) : null}
                        </Form>
                    </Row>

                    <Row>
                        <Button
                            className="w-25 mx-auto"
                            variant="warning"
                            onClick={() => history.push("/yourlistings")}
                        >
                            Exit Edit Form
                        </Button>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default EditListingForm