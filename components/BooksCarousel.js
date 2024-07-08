import React, { useEffect, useState } from "react";
import Image from "next/image";

function BooksCarousel({ booksData }) {
    const [bookImageUrls, setBookImageUrls] = useState([]);

    useEffect(() => {
        console.log("booksData", booksData);
        const url = "https://covers.openlibrary.org/b/ISBN/";
        const url2 = "-M.jpg";

        setBookImageUrls(
            booksData.map((book) => {
                console.log(
                    "book",
                    book.title,
                    book.isbn,
                    url + book.isbn + url2
                );
                return url + book.isbn + url2;
            })
        );
    }, [booksData]);

    let imagesMarkup = bookImageUrls.map((url, index) => {
        return (
            <Image
                key={index}
                src={url}
                alt="Book Cover"
                width={300}
                height={300}
            />
        );
    });
    return (
        <div className="h-full bg-gray-100 dark:bg-gray-700">
            <div
                id="profile-card"
                className="px-10 max-w-screen-2xl my-0 pt-10 flex flex-col md:flex-wrap md:flex-row items-center justify-center mx-auto bg-pink-100 dark:bg-[#101010]"
            >
                {imagesMarkup}
                {/* <Image
                    src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659905828i/7235533.jpg"
                    alt="Book Cover"
                    width={300}
                    height={400}
                /> */}
                {/* Rest of your code */}
            </div>
        </div>
    );
}

export default BooksCarousel;
