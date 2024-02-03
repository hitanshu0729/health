import React, { Component } from 'react';
import Newsitem from "./Home/Newsitem"
import PropTypes from 'prop-types';

class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async (page = 1) => {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=fe482e9785024063a6d4034d4eb1506b&page=${page}`;
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page, loading: false });
  };

  prevclick = async () => {
    this.fetchNews(this.state.page - 1);
  };

  nextclick = async () => {
    this.fetchNews(this.state.page + 1);
  };

  render() {
    const { articles, loading, page } = this.state;

    return (
      <div className="container my-3 border border-dark p-3">
        <h1 className="text-center" style={{ margin: "35px 0px" , fontSize:"50px",color:"white"}}>
          Recent Health Updates
        </h1>

        <div className="row">
  {articles
    .filter(element => element.urlToImage !== null) // Filter out elements with null urlToImage
    .map((element, index) => (
      <div className="col-md-4" key={index}>
        <Newsitem
          title={element.title}
          description={element.description}
           urlToImage={element.urlToImage}
          newsUrl={element.url}
        />
      </div>
    ))}
</div>


        {loading && (
          <div className="d-flex justify-content-center my-3">
          <div class="spinner-border text-success"></div>
          </div>
        )}

        <div className="container d-flex justify-content-between">
          <button
            className="btn btn-dark"
            onClick={this.prevclick}
            disabled={page <= 1 || loading}
          >
            &larr; Previous
          </button>
          <button
            className="btn btn-dark"
            onClick={this.nextclick}
            disabled={loading}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
