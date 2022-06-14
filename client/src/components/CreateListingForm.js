import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import { useDispatch, useSelector } from 'react-redux';
import { createListing } from '../features/listingSlice'
import { v4 as uuid } from 'uuid'

function CreateListingForm() {
    const [selectedMonth, setSelectedMonth] = useState(null)
    const [errors, setErrors] = useState()

    console.log(errors)

    const user = useSelector(state => state.user.user)

    const dispatch = useDispatch()
    const history = useHistory();

    const [formData, setFormData] = useState({
        title: "",
        // image_url: "",
        description: "",
        location: "",
        month: "",
        day: "",
        year: "",
        time: "",
    });

    const handleChange = (e) => {
        const key = e.target.name

        setFormData({ ...formData, [key]: e.target.value });
    };


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

    function handleSubmit(e) {
        e.preventDefault()
        const { title, description, location, year, month, day, time } = formData


        const newListing = {
            title,
            description,
            location,
            date: `${year}-${month}-${day}T${time}:00`,
            user_id: user.id
        }
        console.log(newListing)

        dispatch(createListing(newListing, history, setErrors))
    }

    return (
        <Container fluid>
            <Container className="mx-auto mt-5">
                <Row className="text-center">
                    <h1>Post A Listing</h1>
                </Row>

                <Row className="mb-5">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                placeholder="Title..."
                                value={formData.title}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                placeholder="Description..."
                                value={formData.description}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                name="location"
                                placeholder="Location..."
                                value={formData.location}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>

                        <Row>
                            <h3>Select Event Date and Time</h3>
                            <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Month</Form.Label>
                                    <Form.Select
                                        name="month"
                                        value={formData.month}
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
                                        value={formData.day}
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
                                        value={formData.year}
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
                                        value={formData.time}
                                        onChange={(e) => handleChange(e)}
                                    >
                                        {renderTimes()}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="d-flex justify-content-center mb-2">
                            <Button variant="primary" type="submit" className="w-25">
                                Post Listing
                            </Button>
                        </Row>

                        {errors ? errors.errors.map(err =>
                            <Row className="text-danger text-center mb-2" key={uuid()}>
                                <strong >{err}</strong>
                            </Row>
                        ) : null}
                    </Form>
                </Row>
            </Container>
        </Container>
    );
}

export default CreateListingForm