export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold tracking-wide p-2 bg-blue-300 rounded-lg">
        Payload CMS and Clerk example
      </h1>
      <div className="flex mt-4 justify-center p-2 bg-orange-200 rounded-lg items-center gap-3">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-ping justify-center "></div>
        <h1 className="text-2xl font-semibold">
          MongoDB Edition
        </h1>
      <h3 className="text-lg mt-2 text-gray-500">
        Updated for Payload v3.53 and Clerk v6.13.0
      </h3>
      </div>
      <div className="mt-10 flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/egKaeOuddFA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <div className="mt-10 flex justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7PNGNqqFlu0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
