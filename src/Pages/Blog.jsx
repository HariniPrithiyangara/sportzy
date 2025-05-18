import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Running Shoes for 2025",
    date: "May 10, 2025",
    excerpt:
      "Discover the best running shoes with cutting-edge technology and unbeatable comfort.",
  },
  {
    id: 2,
    title: "How to Choose the Perfect Sportswear",
    date: "April 25, 2025",
    excerpt:
      "A complete guide to selecting sportswear that suits your activity, style, and budget.",
  },
  {
    id: 3,
    title: "Benefits of Yoga for Athletes",
    date: "April 15, 2025",
    excerpt:
      "Learn how incorporating yoga into your routine can improve flexibility and performance.",
  },
];

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-black">
          Our Blog
        </h1>

        <div className="space-y-12">
          {blogPosts.map(({ id, title, date, excerpt }) => (
            <article
              key={id}
              className="border-l-4 border-red-600 bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-3xl font-bold text-black hover:text-red-600 cursor-pointer mb-3">
                {title}
              </h2>
              <p className="text-sm text-gray-500 italic mb-4">{date}</p>
              <p className="text-gray-700 leading-relaxed">{excerpt}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
