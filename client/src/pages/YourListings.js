import React, { useState, useEffect } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListingItem from "../components/ListingItem";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

function YourListings() {
    const [filteredListings, setFilteredListings] = useState([])
    const [currentSearch, setCurrentSearch] = useState("")
    const [filtered, setFiltered] = useState(false)

    const currUser = useSelector(state => state.user.user)

    const listings = useSelector(state => state.listings)

    useEffect(() => {
        setFilteredListings(listings.filter(listing => listing.user.id === currUser.id))
    }, [listings, currUser.id])

    const handleSortAlphabetically = () => {
        if (filtered === false) {
            const sortedListings = listings.sort(function (a, b) {
                let x = a.title.toLowerCase();
                let y = b.title.toLowerCase();
                if (x < y) {
                    return -1;
                }
                if (x > y) {
                    return 1;
                }
                return 0;
            });
            setFilteredListings(sortedListings);
            setFiltered(true);
        } else {
            const originalArray = listings.sort(function (a, b) {
                return a.id - b.id;
            });
            setFilteredListings(originalArray);
            setFiltered(false);
        }
    };

    const afterSearch = filteredListings.filter((item) => {
        if (currentSearch === "") {
            return item;
        } else if (
            item.title.toLowerCase().includes(currentSearch.toLowerCase())
        ) {
            return item;
        } else {
            return null;
        }
    });

    const renderListings = afterSearch.map((listing) => {
        const now = new Date().getTime()
        const end = new Date(listing.date).getTime()

        if (end < now) {
            return null;
        } else {
            return (
                <ListingItem
                    key={listing.id}
                    listing={listing}
                />
            );
        }
    });

    return (
        <div>
            <Container fluid>
                <Row className="d-flex justify-content-end my-2">
                    <Col className="mx-auto h-100 my-2">
                        {/* {renderAlert()} */}
                        <InputGroup>
                            <FormControl
                                placeholder="Search Listings..."
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                                name="search"
                                value={currentSearch}
                                onChange={(e) =>
                                    setCurrentSearch(e.target.value)}
                            />
                            <Dropdown as={ButtonGroup}>
                                <Button
                                    variant="primary"
                                    size="lg"
                                    onClick={() => handleSortAlphabetically()}
                                >
                                    Sort A-Z
                                </Button>

                            </Dropdown>
                        </InputGroup>
                    </Col>
                </Row>

                <Row xs={1} sm={2} md={3} lg={4}>
                    {renderListings}
                </Row>
            </Container>
        </div>
    )
}

export default YourListings