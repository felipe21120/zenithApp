import { Content, Navbar, Spotlight} from "@/components";

export default function Home () {
  return (
    <>
      <link rel="icon" href="/Logo-zenith.png"/>
      <div className="flex flex-col lg:flex-row px-6 md:px-10 lg:px-20 pt-0 gap-10">
        <Spotlight />
        <div className="w-full lg:w-1/2">
          <Navbar />
        </div>
        <div className="w-full lg:w-1/2">
          <Content />
        </div>
      </div>
    </>
  );
}

