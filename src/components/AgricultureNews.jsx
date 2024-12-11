// src/components/AgricultureNews.js
import React, { useState, useEffect } from "react";

const AgricultureNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = "1adce1c892844c078ebde9b4c4c89dcf"; // Replace with your NewsAPI key

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url =
          "https://newsapi.org/v2/top-headlines?country=in&apiKey=YOUR_API_KEY";
        const proxy = "https://cors-anywhere.herokuapp.com/";

        fetch(proxy + url)
          .then((response) => response.json())
          .then((data) => console.log(data));
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };
    fetchNews();
  }, [apiKey]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 to-blue-500 pl-56 pt-6">
      <div className="container mx-auto">
        {loading ? (
          <p className="text-center text-white text-xl">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h2 className="text-2xl font-semibold text-gray-800">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mt-2">{article.description}</p>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AgricultureNews;
