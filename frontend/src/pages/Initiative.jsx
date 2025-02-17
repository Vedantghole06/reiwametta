// import React from 'react';

const Initiative = () => {
  const articles = [
    {
      id: 1,
      title: "6 Strategies to Find Your Conference Keynote and Other Speakers",
      image: "/img1.jpeg",
      description: "Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.",
      date: "12 Mar",
      author: "Jhon Doe"
    },
    {
      id: 2,
      title: "How Successfully Used Paid Marketing to Drive Incremental Ticket Sales",
      image: "/img2.jpeg",
      description: "Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.",
      date: "12 Mar",
      author: "Jhon Doe"
    },
    {
      id: 3,
      title: "Introducing Workspaces: Work smarter, not harder with new navigation",
      image: "/img3.jpeg",
      description: "Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.",
      date: "12 Mar",
      author: "Jhon Doe"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-medium uppercase tracking-wider">Our Initiative</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <button className="absolute bottom-4 right-4 bg-white px-4 py-1 rounded-full text-sm hover:bg-gray-100 transition-colors duration-300">
                Read more
              </button>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-yellow-500">
                {article.title}
              </h3>

              <p className="text-gray-600 mb-4 text-sm">
                {article.description}
              </p>

              <div className="flex items-center text-sm text-gray-500">
                <span>{article.date}</span>
                <span className="mx-2">-</span>
                <span>{article.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="border-2 border-yellow-500 text-yellow-500 px-8 py-2 rounded-full hover:bg-yellow-500 hover:text-white transition-colors duration-300">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Initiative;