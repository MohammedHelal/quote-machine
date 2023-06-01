export default function Quotes({ person, currentQuote, randomNumber }) {
  return (
    <div id="coverBg" className="d-flex vh-100">
      <div
        id="quote-box"
        className="card mx-auto my-auto"
        style={{ backgroundColor: "white", height: "350px" }}
      >
        <div className="card-body">
          <div className="d-flex align-items-start flex-column mb-3 h-100">
            <blockquote id="text" className="p-2 mb-5">
              <div className="fw-semibold fst-italic fs-4">
                "{currentQuote}"
              </div>
              <div className="fs-5">
                <span className="text-decoration-line-through">----</span>
                <cite id="author">by {person.name}</cite>
              </div>
            </blockquote>
            <div className="d-flex w-100 justify-content-between mt-auto p-2">
              <div className="me-auto align-items-center">
                <a
                  id="tweet-quote"
                  className="button p-3 align-middle"
                  title="Tweet this quote!"
                  target="_top"
                  href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22The%20most%20difficult%20thing%20is%20the%20decision%20to%20act%2C%20the%20rest%20is%20merely%20tenacity.%22%20Amelia%20Earhart"
                >
                  <i className="fa fa-twitter fa-2x"></i>
                </a>
                <a
                  id="tumblr-quote"
                  className="button p-3 align-middle"
                  title="Post this quote on tumblr!"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=Amelia%20Earhart&amp;content=The%20most%20difficult%20thing%20is%20the%20decision%20to%20act%2C%20the%20rest%20is%20merely%20tenacity.&amp;canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&amp;shareSource=tumblr_share_button"
                >
                  <i className="fa fa-tumblr fa-2x"></i>
                </a>
              </div>
              <button
                id="new-quote"
                onClick={randomNumber}
                className="btn btn-primary ms-auto"
              >
                Next quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
