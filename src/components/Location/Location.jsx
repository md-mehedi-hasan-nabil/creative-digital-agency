import GoogleMap from "./GoogleMap";

export default function Location() {
  return (
    <section className="py-8 my-12">
      <div className="container">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <div className="col-span-6">
            <h2 className="py-5 text-2xl font-semibold">Location</h2>
          </div>
          <div className="col-span-6">
            <div className="rounded-md">
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
