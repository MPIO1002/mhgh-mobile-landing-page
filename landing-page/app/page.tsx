import Heroes from "./components/Heroes";
import Carousel from "./components/Carousel";
import ShareButton from "./components/ShareButton";
import ScrollDownButton from "./components/ScrollDownButton";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[calc(100vh-55px)] w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/landing/hero-bg.png')" }}>
        <div className="absolute bottom-5 left-0 right-0 p-4 text-center">
          <div className="space-y-2">
            <div className="flex justify-center">
              <img
                src="/landing/title-1.png"
                alt="Title"
                width={380}
                height={120}
                className="object-contain"
                style={{ maxWidth: '380px', width: '100%' }}
                loading="lazy"
              />
            </div>
            <div className="flex justify-center mt-0 mb-15">
              <a
                href="https://mhgh.ggo.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="vibrate-2-normal cursor-pointer bg-transparent p-0 border-none shadow-none hover:scale-105 transition-all duration-300 inline-block"
                aria-label="Tải game"
              >
                <img
                  src="/landing/download.png"
                  alt="Tải game"
                  width={380}
                  height={100}
                  className="object-contain"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute left-0 right-0 bottom-0">
          <ScrollDownButton />
        </div>
      </div>

      {/* Section 1 */}
      <section id="section1" className="h-[calc(100vh-55px)] p-2 flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat w-full" style={{ backgroundImage: "url('/landing/bg-section-1.png')" }}>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex justify-center">
            <img
              src="/landing/title-2.png"
              alt="Title 2"
              width={800}
              height={160}
              className="object-contain w-full h-auto"
              style={{ maxWidth: '100%' }}
              loading="lazy"
            />
          </div>
          <div className="relative flex justify-center my-4 w-full" style={{ maxWidth: '100%', aspectRatio: '1/1' }}>
            <img
              src="/landing/heroes.png"
              alt="Heroes"
              width={800}
              height={800}
              className="object-contain w-full h-auto"
              style={{ maxWidth: '100%' }}
              loading="lazy"
            />
            <img
              src="/landing/main-hero.png"
              alt="Main Hero"
              width={800}
              height={800}
              className="object-contain absolute left-0 top-0 w-full h-full z-10 pointer-events-none"
              style={{ maxWidth: '100%' }}
              loading="lazy"
            />
          </div>
          <div className="flex justify-center mt-2">
            <a
              href="https://mhgh.ggo.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent p-0 border-none shadow-none hover:scale-105 transition-all duration-300 vibrate-2-normal cursor-pointer w-full inline-block"
              aria-label="Join"
            >
              <img
                src="/landing/join.png"
                alt="Join"
                width={400}
                height={160}
                className="object-contain w-full h-auto mx-auto scale-110"
                style={{ maxWidth: '80%' }}
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </section>
      {/* Section 2 */}
      <section className="w-full flex flex-col justify-center -mt-10">
        {/* Phần 1 */}
        <div className="w-full h-[400px] bg-cover bg-center bg-no-repeat p-4 flex gap-0" style={{ backgroundImage: "url('/landing/bg-section-2.png')" }}>
          <div className="flex-1 flex items-center justify-center">
            <img
              src="/landing/chest-hero.png"
              alt="Chest Hero"
              width={250}
              height={250}
              className="object-contain w-full h-auto"
              style={{ maxWidth: '250px' }}
              loading="lazy"
            />
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <img
              src="/landing/title-3.png"
              alt="Title 3"
              width={200}
              height={60}
              className="object-contain w-full h-auto"
              style={{ maxWidth: '200px' }}
              loading="lazy"
            />
            <button className="bg-transparent p-0 border-none shadow-none hover:scale-105 transition-all duration-300 cursor-pointer">
              <img
                src="/landing/button-reward.png"
                alt="Nhận thưởng"
                width={260}
                height={78}
                className="object-contain w-full h-auto scale-120 mt-2"
                style={{ maxWidth: '260px' }}
                loading="lazy"
              />
            </button>
          </div>
        </div>
        {/* Phần 2 */}
        <div className="w-full h-[400px] bg-cover bg-center bg-no-repeat p-4 flex flex-col gap-0 -mt-11 z-20" style={{ backgroundImage: "url('/landing/bg-section-2.png')" }}>
          <div className="flex w-full py-5 px-5">
            <div className="flex flex-col flex-1 gap-0 justify-center pr-0">
              <img
                src="/landing/title-4.png"
                alt="Title 4"
                width={180}
                height={60}
                className="object-contain w-full h-auto"
                style={{ maxWidth: '180px' }}
                loading="lazy"
              />
              <img
                src="/landing/title-5.png"
                alt="Title 5"
                width={180}
                height={60}
                className="object-contain w-full h-auto"
                style={{ maxWidth: '180px' }}
                loading="lazy"
              />
            </div>
            <div className="flex-1 flex items-center justify-center">
            <img
              src="/landing/chest.png"
              alt="Chest"
              width={220}
              height={220}
              className="object-contain w-full h-auto"
              style={{ maxWidth: '220px', marginLeft: 0 }}
              loading="lazy"
            />
            </div>
          </div>
          <div className="flex justify-center items-center gap-6 mt-6">
            <img
              src="/landing/tiktok.png"
              alt="Tiktok"
              width={180}
              height={90}
              className="object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <a
              href="https://www.facebook.com/monghuyengiangho"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-block"
            >
              <img
                src="/landing/facebook.png"
                alt="Facebook"
                width={180}
                height={90}
                className="object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </section>
      {/* Section 3 */}
      <section className="relative max-w-[430px] mx-auto w-full p-2 flex flex-col items-center justify-center bg-cover bg-no-repeat bg-top overflow-hidden -mt-10"
        style={{ backgroundImage: "url('/landing/bg-section-3.png')" }}>
        <img
          src="/landing/title-6.png"
          alt="Title 6"
          width={400}
          height={80}
          className="object-contain w-full h-auto mb-4 mt-8 z-20"
          style={{ maxWidth: '400px' }}
          loading="lazy"
        />
        <Heroes />

        <div className="flex justify-center mt-20 mb-4">
          <ShareButton />
        </div>

        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="flex justify-center mb-0 mt-4">
            <img
              src="/landing/title-7.png"
              alt="Title 7"
              width={300}
              height={60}
              className="object-contain w-full h-auto"
              style={{ maxWidth: '300px' }}
              loading="lazy"
            />
          </div>
          {/* Carousel feature images */}
          <div className="w-full flex justify-center mt-0">
            <Carousel />
          </div>
          <div className="flex justify-center mb-40 mt-4">
            <a
              href="https://mhgh.ggo.vn/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              aria-label="Download Now"
            >
              <img
                src="/landing/download-now.png"
                alt="Download Now"
                width={300}
                height={60}
                className="object-contain w-full h-auto hover:scale-110 transition-transform duration-300 cursor-pointer"
                style={{ maxWidth: '300px' }}
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
