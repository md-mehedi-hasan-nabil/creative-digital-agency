export default function TeamMemberCard() {
  return (
    <article className="px-4 pb-4 pt-8 bg-slate-100 text-black rounded-3xl transition-all hover:bg-slate-400 hover:shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold  text-2xl ">
          Mehedi Hasan Nabil
        </h2>
        <p className="font-semibold ">Learn More</p>
      </div>
      <img
        className="w-full h-96 object-cover"
        src="https://images.unsplash.com/photo-1581382575275-97901c2635b7"
        alt=""
      />
    </article>
  );
}
