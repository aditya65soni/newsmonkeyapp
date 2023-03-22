import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
      this.props;
    return (
      <div className="my-3">

        <div className="card" >
          <div className="container">
            <span class=" badge rounded-pill bg-danger" style={{
              display: 'flex',justifyContent: 'flex-end', right: '0px',position: 'absolute'
            }}>
              {source}
            </span>
          </div>
          <img src={!imageUrl?'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJkIP_Q2xyUEdLk6eJLTTpEbGhQD-5-dcsw&usqp=CAU':imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "unknown" : author} on{" "}
                {new Date(publishedAt).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;


// !imageUrl?'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaJkIP_Q2xyUEdLk6eJLTTpEbGhQD-5-dcsw&usqp=CAU':'imageUrl'