import loaderImage from "../../assets/loading.png"

export default function PageLoader() {
  return (
    <div className="page-loader fixed top-0 left-0 w-full h-full z-50 bg-slate-700/70 flex justify-center items-center">
      <div>
        <img className="w-12 animate-spin" src={loaderImage} alt="Loading..." />
      </div>
    </div>
  );
}
