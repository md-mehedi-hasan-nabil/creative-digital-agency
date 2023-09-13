// data-aos="fade-up-right" data-aos-duration="500"

export default function NewsCard() {
  return (
    <div className="newscard relative col-span-12 md:col-span-4 rounded-lg overflow-hidden transition-all">
      <img
        src="https://images.unsplash.com/photo-1504711434969-e33886168f5c"
        alt="news"
        className="main-image w-full md:h-72 object-cover"
      />
      <div className="absolute bottom-0 card bg-base-100 shadow-xl image-full">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c"
            alt="news"
            className="second-image w-full md:h-72 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
}
