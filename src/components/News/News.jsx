import NewsCard from "./NewsCard";
import SectionTitle from "../SectionTitle";

export default function News() {
  return (
    <section className="py-8 my-12">
      <div className="container">
        <SectionTitle subTitle="news" heading="Latest News" />

        <div className="mt-16 grid grid-cols-12 gap-6">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </section>
  );
}
