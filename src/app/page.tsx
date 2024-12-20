import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-gradient-to-b from-teal-700 to-teal-500 text-white flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: 'url("/images/hero-pets.jpg")' }}></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Welcome to My Pets World</h1>
          <p className="text-lg md:text-2xl mb-8">
            Explore blogs, stories, and resources for pet lovers!
          </p>
          <Link
            href="/blog"
            className="bg-yellow-400 text-teal-900 px-6 py-3 rounded-md text-lg font-semibold hover:bg-yellow-500 transition"
          >
            Explore Blogs
          </Link>
        </div>
      </section>

      {/* Highlight Section with Images */}
      <section className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Blogs",
            link: "/blog",
            image: "/images/blogs.jpg",
            description: "Discover amazing pet stories and tips!",
          },
          {
            title: "Share Your Story",
            link: "/story",
            image: "/images/stories.jpg",
            description: "Share your pet adventures with the world!",
          },
          {
            title: "Adopt a Pet",
            link: "/adoption",
            image: "/images/adoption.jpg",
            description: "Find loving homes for pets in need.",
          },
          {
            title: "My Pets",
            link: "/mypets",
            image: "/images/mypets.jpg",
            description: "Meet my adorable pets!",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
            <Link
              href={item.link}
              className="absolute inset-0"
              aria-label={item.title}
            ></Link>
          </div>
        ))}
      </section>

      {/* Featured Blog Section */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-teal-700 text-center mb-8">
            Featured Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={`/images/blog-${index + 1}.jpg`}
                  alt={`Blog ${index + 1}`}
                  className="h-40 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-teal-700 mb-2">
                    Blog Title {index + 1}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of the blog. Keep it short and engaging!
                  </p>
                  <Link
                    href={`/blog/${index + 1}`}
                    className="text-teal-600 font-semibold hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser Section */}
      <section className="bg-teal-100 text-teal-900 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-8">
            I’m a passionate pet lover with a dream to create a safe haven for
            animals. Join me on my journey!
          </p>
          <Link
            href="/about"
            className="bg-teal-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-teal-800"
          >
            Learn More
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
