import { useState } from 'react';
import { fetchMovies } from '../services/movieService';
import { Container, Title, Input, Button, MoviesContainer, MovieCard } from '../components_styles/MovieSearchEngineStyles';

const MovieSearchEngine = () => {
  const [query, setQuery] = useState(''); // Define o estado para a consulta de busca
  const [movies, setMovies] = useState([]); // Define o estado para armazenar os filmes
  const [error, setError] = useState(null); // Define o estado para armazenar erros

  // Função para buscar filmes
  const searchMovies = async () => {
    try {
      if (!query.trim()) {
        setError("Please enter a search query.");
        return;
      }

      setError(null);
      const data = await fetchMovies(query); // Chama a função fetchMovies do serviço
      setMovies(data); // Armazena os dados dos filmes no estado movies
    } catch (error) {
      setError(error.message); // Atualiza o estado de erro
    }
  };

  return (
    <Container>
      <Title>Movie Search Engine</Title>
      <Input
        type="text"
        value={query} // Valor do campo de entrada é ligado ao estado query
        onChange={(e) => setQuery(e.target.value)} // Atualiza o estado query conforme o usuário digita
        placeholder="Search for a movie" // Placeholder do campo de entrada
      />
      <Button onClick={searchMovies}>Search</Button> {/* Botão que chama a função searchMovies quando clicado */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Exibe a mensagem de erro se existir */}
      <MoviesContainer>
        {movies && movies.map((movie) => ( // Verifica se há filmes e os mapeia para exibir MovieCard
          <MovieCard key={movie.imdbID}>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} /> {/* Exibe o pôster do filme */}
            <h3>{movie.Title}</h3> {/* Exibe o título do filme */}
            <p>{movie.Year}</p> {/* Exibe o ano do filme */}
          </MovieCard>
        ))}
      </MoviesContainer>
    </Container>
  );
};

export default MovieSearchEngine; // Exporta o componente MovieSearchEngine como padrão
