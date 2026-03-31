import React from "react";
import Image from "next/image";

function BookComponent({ book }) {
    return (
        <div className="flex flex-col md:flex-row bg-white dark:bg-[#1f1f1f] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {/* Cover Image Container */}
            <div className="relative w-full md:w-48 h-64 md:h-auto flex-shrink-0 bg-gray-200 dark:bg-gray-800">
                {book.coverUrl ? (
                    <img
                        src={book.coverUrl}
                        alt={`${book.title} cover`}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                        No Cover
                    </div>
                )}
            </div>

            {/* Content Container */}
            <div className="p-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {book.title}
                    </h3>
                    <div className="flex space-x-2">
                        <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            book.category === 'serious'
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                            : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        }`}>
                            {book.category}
                        </span>
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                            {book.type}
                        </span>
                    </div>
                </div>

                <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                    by {book.author}
                </h4>

                <p className="text-sm text-gray-700 dark:text-gray-300 flex-grow line-clamp-4">
                    {book.description}
                </p>
            </div>
        </div>
    );
}

export default BookComponent;
