import React, { useEffect, useState } from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import BandItem from '../components/BandItem';
import { useDispatch, useSelector } from 'react-redux'
import { fetchBands } from '../features/bandsSlice'

function Bands() {
    const [filteredBands, setFilteredBands] = useState([])
    const [currentSearch, setCurrentSearch] = useState("")
    const [filtered, setFiltered] = useState(false)

    const dispatch = useDispatch()
    const bands = useSelector(state => state.bands)

    useEffect(() => {
        dispatch(fetchBands())
        setFilteredBands(bands)
    }, [])

    const handleSortAlphabetically = () => {
        if (filtered === false) {
            const sortedBands = bands.sort(function (a, b) {
                let x = a.name.toLowerCase();
                let y = b.name.toLowerCase();
                if (x < y) {
                    return -1;
                }
                if (x > y) {
                    return 1;
                }
                return 0;
            });
            setFilteredBands(sortedBands);
            setFiltered(true);
        } else {
            const originalArray = bands.sort(function (a, b) {
                return a.id - b.id;
            });
            setFilteredBands(originalArray);
            setFiltered(false);
        }
    };

    const afterSearch = filteredBands.filter((item) => {
        if (currentSearch === "") {
            return item;
        } else if (
            item.name.toLowerCase().includes(currentSearch.toLowerCase())
        ) {
            return item;
        } else {
            return null;
        }
    });

    const renderBands = afterSearch.map(band => {
        return <BandItem key={band.id} band={band} />
    })

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
                    {renderBands}
                </Row>
            </Container>
        </div>
    )
}

export default Bands