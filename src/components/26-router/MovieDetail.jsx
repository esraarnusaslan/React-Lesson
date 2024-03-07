import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Badge } from 'react-bootstrap';

const API_URL = ' https://api.tvmaze.com/shows';

const MovieDetail = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = React.useState({});
    const navigate = useNavigate();

    const getMovie = async () => {
        try {
            const resp = await axios.get(`${API_URL}/${movieId}`);
            const data = resp.data;
            setMovie(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMovie();
    }, []);

    const markup = { __html: movie?.summary };

    return (
        <Container>
            <Row>
                <Col>
                    <img
                        src={movie?.image?.original}
                        alt=""
                        className="img-fluid"
                    />
                </Col>

                <Col>
                    <h1>{movie?.name}</h1>
                    <p dangerouslySetInnerHTML={markup}></p>
                    <div>
                        {movie.genres?.map((genre) => (
                            <Badge key={genre} className="me-2">
                                {genre}
                            </Badge>
                        ))}
                    </div>
                </Col>
            </Row>

            <div className="text-center mt-5">
                <Button onClick={() => navigate(-1)}>
                    <FaChevronLeft>Return</FaChevronLeft>
                </Button>
            </div>
        </Container>
    );
};

export default MovieDetail;
