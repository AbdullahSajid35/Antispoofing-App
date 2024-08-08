import spoofImage from "/spoofing.webp";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex justify-center  gap-6 items-center">
        <div className="flex flex-col flex-1 gap-4 text-left ">
          <h1 className="font-bold text-[30px]">
            Welcome to Face Anti-Spoofing
          </h1>
          <p>
            Ensure your security with our advanced face anti-spoofing
            technology. You can detect spoofing using your live camera, capture
            a photo, or upload an image from your device. Choose from different
            models, including YOLO for fast, real-time detection, or ResNet for
            highly accurate analysis. Get started now by selecting your
            preferred method and model.
          </p>
        </div>
        <div className="flex-1">
          <img width={400} height={400} src={spoofImage} alt="spoof-image" />
        </div>
      </div>
      <div className="self-start">
        <Link to="detection">
          <button className="bg-blue-700 text-white p-2 rounded-md">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
