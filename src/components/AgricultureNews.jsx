import React, { useState, useEffect } from "react";

const AgricultureNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const url = `https://agrihelpbackend.up.railway.app`; // Your API endpoint
        const response = await fetch(url);
        const data = await response.json();

        if (data.articles) {
          setNews(data.articles); // Update the state with fetched articles
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false); // Ensure loading is set to false after the fetch
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="flex">
      {/* Sidebar placeholder, assuming the sidebar is part of the layout */}
      <div className="lg:ml-56 flex-1">
        <div className="min-h-screen bg-gradient-to-r from-green-300 to-blue-500 pt-6 pl-6 md:pl-16 lg:pl-56">
          <div className="container mx-auto">
            {loading ? (
              <p className="text-center text-white text-xl">Loading...</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {news.map((article, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="w-full h-48 object-cover rounded-md mb-4"
                      />
                      <h2 className="text-2xl font-semibold text-gray-800">
                        {article.title}
                      </h2>
                      <p className="text-gray-600 mt-2">
                        {article.description}
                      </p>
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgricultureNews;
