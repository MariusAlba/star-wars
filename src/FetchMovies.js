import React from "react";

export default class FetchMovies extends React.Component {
  state = {
    loading: true,
    movies: null
  };

  async componentDidMount() {
    const url = "https://swapi.dev/api/films/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ movies: data.results, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.movies.length) {
      return <div>didn't get a movie</div>;
    }

    return (
      <div>
        <h1>Movies</h1>
        {this.state.movies.map(movie =>(
          <div>{movie.title}</div>
        ))}
      </div>
    );
  }
}