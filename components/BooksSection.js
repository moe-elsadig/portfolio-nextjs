import React, { useState } from "react";
import BookComponent from "./BookComponent";

function BooksSection({ bookData }) {
    const [filter, setFilter] = useState("all");

    const filteredBooks = bookData?.filter((book) => {
        if (filter === "all") return true;
        return book.category === filter;
    }) || [];

    return (
        <section id="books-section" className="bg-gray-100 dark:bg-gray-700 py-10 antialiased">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Filter Controls */}
                <div className="flex justify-center space-x-4 mb-8">
                    <button
                        onClick={() => setFilter("all")}
                        className={`px-4 py-2 rounded-md font-medium transition-colors ${
                            filter === "all"
                                ? "bg-red-500 text-white"
                                : "bg-white dark:bg-[#101010] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => setFilter("serious")}
                        className={`px-4 py-2 rounded-md font-medium transition-colors ${
                            filter === "serious"
                                ? "bg-red-500 text-white"
                                : "bg-white dark:bg-[#101010] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                        Serious
                    </button>
                    <button
                        onClick={() => setFilter("fun")}
                        className={`px-4 py-2 rounded-md font-medium transition-colors ${
                            filter === "fun"
                                ? "bg-red-500 text-white"
                                : "bg-white dark:bg-[#101010] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                        }`}
                    >
                        Fun
                    </button>
                </div>

                {/* Books Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredBooks.map((book, index) => (
                        <BookComponent key={index} book={book} />
                    ))}
                </div>

                {filteredBooks.length === 0 && (
                    <div className="text-center py-10 text-gray-500 dark:text-gray-400">
                        No books found in this category.
                    </div>
                )}
            </div>
        </section>
    );
}

export default BooksSection;
