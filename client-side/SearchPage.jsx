import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/main.css';
const request = require('superagent');
const payload = require('./payload.JSON');
var _ = require('lodash');
var repo = [];

class SearchPage extends React.Component {
  //=========== Uncomment this if mongo working
  componentDidMount() {
    // uncomment if mongo working
    // request.get('http://localhost:8080/api/data', (err, res) => {
    //   this.setState({data: res.body, show: true});
    //   repo = res.body;
    // });

    this.setState({ data: payload }); // comment this if mongo working
    repo = payload; // comment this if mongo working
  }

  constructor() {
    super();
    this.state = { data: '' };
  }

  filter() {
    var name = document.getElementById('name').value;
    var rating = document.getElementById('rating').value;
    var price = document.getElementById('price').value;
    var track = document.getElementsByName('track')[0].checked;
    var track1 = document.getElementsByName('track')[1].checked;

    var filtered = [];
    Object.assign(filtered, repo);

    var filtered = filtered.filter(item => {
      if (name && item['attributes']['name'].toLowerCase().indexOf(name.toLowerCase()) == -1) return false;

      if (price && item['attributes']['price'] > price) return false;

      if (rating && _.ceil(item['attributes']['avgRating']) != rating) return false;

      if ((track || track1) && item['attributes']['fastTrack'] != track) return false;

      return true;
    });

    this.setState({ data: filtered, show: true });
  }

  render() {
    //var data = payload;
    var data = this.state.data;

    let productList = [];
    for (var i = 0; i < data.length; i++) {
      var currentProduct = data[i];
      var details = currentProduct;
      console.log(currentProduct);
      productList.push(
        <div
          className="item"
          key={details._id}
          style={{
            //border: 'black 1px solid',
            display: 'inline-block',
            padding: '10px',
            margin: '10px'
          }}
        >
          <img
            style={{ height: '150px' }}
            src={'http://media.4rgos.it/s/Argos/' + details.id + '_R_SET%3Fw=220&h=220'}
          />
          <div className="info">
            <div className="productTitle"> {details.attributes.name} </div>
            <div className="productPrice"> £{details.attributes.price} </div>
            <div> StarRatings: {_.ceil(details.attributes.avgRating)} </div>
            <div> Reviews: {_.ceil(details.attributes.reviewsCount)} </div>
            <a href={'http://www.argos.co.uk/product/' + details.id} className="links">
              {' '}
              More Info{' '}
            </a>
            <br />
            <button className="material-button-raised">
              {' '}
              <b>Add to trolley </b>{' '}
            </button>
          </div>
        </div>
      );
    }

    return (
      <center>
        <h1> Product Search Page </h1>
        <br />
        {/* <div>Filter by... Price, starRating and FastTrack..</div> */}
        <label>Min Price: </label>
        <input type="number" name="price" id="price" step="0.01" />
        <label> Rating: </label>
        <input type="number" name="rating" id="rating" min="0" mnax="5" />
        <label> Fast Track: </label>
        <input type="radio" name="track" value="true" /> <span>True</span>
        <input type="radio" name="track" value="false" /> False
        <br />
        <br />
        <input
          id="name"
          name="name"
          className="search"
          style={{
            display: 'inline',
            fontSize: '20px'
          }}
          placeholder="Search for.."
          onKeyPress={event => {
            if (event.key === 'Enter') {
              this.filter();
            }
          }}
        />
        <button className="filter-btn" onClick={this.filter.bind(this)}>
          Go
        </button>
        <br />
        <br />
        <div className="flex-container">{productList} </div>
      </center>
    );
  }
}

export default SearchPage;
