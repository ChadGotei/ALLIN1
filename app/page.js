import MainPageContent from "./_components/MainPageContent";

export default function BackgroundVideo() {
  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        className="fixed inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/Showreel1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


      <div className="relative z-10">
        <MainPageContent />
      </div>
    </div>
  );
}
