import React, { Component } from 'react'
import Card from '../components/Card/Card';

class List extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      data: []
    };
  }

  async componentDidMount() {
    const movies = await fetch('../../public/assets/data.json');
    const moviesJSON = await movies.json();

    if (moviesJSON) {
      this.setState({
        isLoading: false,
        data: moviesJSON
      });
    }
  }

  render() {
    const { isLoading, data } = this.state;

    if (isLoading) {
      return <div>Loading...</div>
    }

    return (
      <div className='row d-flex justify-content-center'>
        {data.map(movie => (
          <div key={movie.id} className='col-sm-2'>
            <Card movie={movie}/>
          </div>
        ))}
      </div>
    )
  }
}

export default List;