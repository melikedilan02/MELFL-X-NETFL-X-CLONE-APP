import React, { useState } from 'react';
import styled from 'styled-components';
import { movies } from '../data/movies';

const HomeContainer = styled.div`
  background-color: #111;
  min-height: 100vh;
`;

const Header = styled.div`
  position: relative;
  height: 80vh;
  width: 100%;
  margin-bottom: 20px;
`;

const TrailerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const HeaderContent = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50px;
  color: white;
  z-index: 10;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    max-width: 500px;
    margin-bottom: 20px;
  }
`;

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 20px 50px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const MovieCard = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const CustomModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #111;
  color: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const MovieInfo = styled.div`
  h2 {
    margin-bottom: 10px;
  }
  p {
    margin: 8px 0;
  }
  .imdb {
    color: #ffd700;
    font-weight: bold;
  }
`;

const Home = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const featuredMovie = movies[0]; // Inception varsayılan olarak header'da gösterilecek

  return (
    <HomeContainer>
      <Header>
        <TrailerWrapper>
          <iframe
            src={`${featuredMovie.trailer}?autoplay=1&mute=1&controls=0&loop=1`}
            title={featuredMovie.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </TrailerWrapper>
        <HeaderContent>
          <h1>{featuredMovie.title}</h1>
          <p>{featuredMovie.description}</p>
          <p className="imdb">IMDB: {featuredMovie.imdb}</p>
        </HeaderContent>
      </Header>

      <MoviesGrid>
        {movies.map((movie) => (
          <MovieCard key={movie.id} onClick={() => setSelectedMovie(movie)}>
            <img src={movie.image} alt={movie.title} />
          </MovieCard>
        ))}
      </MoviesGrid>

      {selectedMovie && (
        <CustomModal onClick={() => setSelectedMovie(null)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedMovie(null)}>×</CloseButton>
            <MovieInfo>
              <h2>{selectedMovie.title}</h2>
              <p>{selectedMovie.description}</p>
              <p>Yıl: {selectedMovie.year}</p>
              <p>Tür: {selectedMovie.genre}</p>
              <p className="imdb">IMDB: {selectedMovie.imdb}</p>
            </MovieInfo>
          </ModalContent>
        </CustomModal>
      )}
    </HomeContainer>
  );
};

export default Home; 