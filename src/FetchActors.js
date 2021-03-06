import React from "react";

export default class FetchActors extends React.Component {
  state = {
    loading: true,
    person: null,
    expanded: null
  };

  async componentDidMount() {
    const url = "https://swapi.dev/api/people/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person.length) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
        <h1>Actors</h1>
        {this.state.person.map((person, i) => (
          <div>
            <div>
              {person.name}
              <button onClick={() => this.setState({ expanded: i })}>
                Info
              </button>
              {this.state.expanded === i && (
                <CharacterInfo key={person.name} person={person} />
              )}
            </div>
          </div>
        ))}
        <button onClick={() => alert("Entered")}>Enter</button>
      </div>
    );
  }
}

const CharacterInfo = ({ person }) => {
  return (
    <ul>
      {Object.entries(person).map(([key, value]) => (
        <li key={key}>{`${key}: ${value}`}</li>
      ))}
    </ul>
  );
};

