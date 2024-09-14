import React from 'react';
import img1 from '../../public/Blogs/1.jfif'
import img2 from '../../public/Blogs/2.png'
import img3 from '../../public/Blogs/3.jfif'

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Exciting New Features Coming Soon!",
      image: img1,
      excerpt: "We're excited to announce new features coming to our platform soon. Stay tuned for more details!",
    },
    {
      id: 2,
      title: "How to Optimize Your Website for Performance",
      image: img2,
      excerpt: "Discover tips and tricks to improve your website's performance and user experience.",
    },
    {
      id: 3,
      title: "The Future of Web Development",
      image: img3,
      excerpt: "Explore the trends and technologies shaping the future of web development.",
    },
  ];

  return (
    <div>
      {/* Blog Header */}
      <section className="bg-transparent-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-purple-800">Our Latest Blog Posts</h1>
          <p className="text-purple-600 mt-2">Insights, tips, and updates from our team</p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800">{blog.title}</h2>
                  <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                  <a
                    href={`/blog/${blog.id}`}
                    className="text-purple-600 hover:text-purple-800 mt-4 inline-block"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Blog Button */}
      <section className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center">
          <a
            href="/add-blog"
            className="bg-purple-600 text-white py-2 px-6 rounded hover:bg-purple-700 transition duration-300 inline-block"
          >
            Add Blog
          </a>
        </div>
      </section>
    </div>
  );
}

export default Blog;
