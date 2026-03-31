import React from "react";
import "./BookComponent.css"; // Assuming you save the CSS in a file named BookComponent.css

function BookComponent({}) {
    return (
        <div className="mobile-layout">
            <div className="actions">
                <i className="fas fa-chevron-left"></i>
                <i className="fas fa-bookmark"></i>
            </div>
            <div className="book-cover">
                <img
                    className="book-top"
                    src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-top.svg"
                    alt="book-top"
                />
                <img
                    className="book-side"
                    src="https://raw.githubusercontent.com/atomic-variable/images-repo/e37f432405904a280858e5437ce1960753bc78a3/book-side.svg"
                    alt="book-side"
                />
            </div>
            <div className="preface">
                <div className="content">
                    <div className="header">
                        <div className="title">The Diary of a Young Girl</div>
                        <div className="icon">
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className="author">by Anne Frank</div>
                    <div className="body">
                        <p>
                            also known as The Diary of Anne Frank, is a book of
                            the writings from the Dutch-language diary kept by
                            Anne Frank while she was in hiding for two years
                            with her family during the Nazi occupation of the
                            Netherlands
                        </p>
                        <p>
                            Anne calls her diary &quot;Kitty&quot;, so almost all of the
                            letters are written to Kitty.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookComponent;
