import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spiner from "./Spiner";
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {

  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      page: 1,
      loading: true,
      totalResults: 0

    };
    document.title = `${this.capitalize(this.props.category)} - NewsMonkey`
  }
  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  updatenews = async () => {
    this.props.setProgress(10)
    const url =
      `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=eee8737b9b414e25baf48e3610921b1c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedata = await data.json();
    this.props.setProgress(70)
    console.log(parsedata);
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false
    });
    this.props.setProgress(100)

  }
  async componentDidMount() {

    this.updatenews()
  }

  handlePrewClick = async () => {

    this.setState({ page: this.state.page - 1 })
    this.updatenews()
  };


  handleNextClick = async () => {

    this.setState({ page: this.state.page + 1 })
    this.updatenews()
  };

  fetchMoreData = async() => {
  this.setState({page:this.state.page+1})
  const url =
      `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=eee8737b9b414e25baf48e3610921b1c&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalResults: parsedata.totalResults,
      loading:false

  });}
  

  render() {
    console.log("render");
    return (
      <>
        <h1 className="text-center my-5"> Top {this.capitalize(this.props.category)} Headlines</h1>

        { this.state.loading && <Spiner />}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={ this.state.loading && <Spiner />}
          
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

// eee8737b9b414e25baf48e3610921b1c api key

// 9925394c6d994881b8a02697904dbc24