import Spline from "@splinetool/react-spline";
import floating from "../assets/floatingimg.png";

function Robot() {
  return (
    <>
      <div className="hidden md:block absolute right-4 bottom-0">
        <Spline scene="https://prod.spline.design/sqLRqrvDft1vLfqG/scene.splinecode" />
      </div>
      <div className="md:hidden absolute bottom-24 w-svw flex justify-center items-center mt-8">
        <img className="floating-image h-60" src={floating} />
      </div>
    </>
  );
}

export default Robot;
