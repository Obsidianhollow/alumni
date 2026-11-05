
import React from "react";
import { Link } from "react-router-dom";

const galleryImages = [
  {
    id: 1,
    title: "Campus Moments",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800",
  },
  {
    id: 2,
    title: "Annual Celebrations",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800",
  },
  {
    id: 3,
    title: "Student Activities",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800",
  },
  {
    id: 4,
    title: "Workshops & Seminars",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
  },
  {
    id: 5,
    title: "Campus Life",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
  },
  {
    id: 6,
    title: "Unforgettable Memories",
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800",
  },
];

const HomeGallery = () => {
  return (
    <section className="bg-[#f4f1eb] text-gray-700 body-font">
      <div className="container px-5 py-20 mx-auto">

        {/* Section Heading */}
        <div className="flex flex-col text-center w-full mb-14">
          <h2 className="sm:text-4xl text-3xl font-semibold title-font mb-5 text-gray-900">
            Gallery
          </h2>

          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
            Explore the moments, celebrations, achievements and experiences
            that make our institution special.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="flex flex-wrap -m-3">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="lg:w-1/3 sm:w-1/2 w-full p-3"
            >
              <div className="relative h-72 overflow-hidden rounded-xl group shadow-md bg-gray-200">

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t' from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-all duration-500" />

                {/* Image Title */}
                <div className="absolute inset-0 flex flex-col justify-end p-7 text-white">
                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center mt-12">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-[#233d4d] text-white font-medium tracking-wide hover:bg-[#fe7f2d] transition-all duration-300 shadow-md group"
          >
            See More

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default HomeGallery;
