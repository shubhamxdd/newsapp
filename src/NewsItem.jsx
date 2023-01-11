import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } =
    props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            position: "absolute",
            justifyContent: "flex-end",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-primary">{source}</span>
        </div>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://staticassets.gannettdigital.com/gci-static-assets/assets/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}{" "}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Click here to read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
