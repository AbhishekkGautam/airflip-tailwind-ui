import ImageContainer from '@/components/image-container';

export default function Home() {
  return (
    <main className="container mx-auto py-12 mb-24">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Get your Kemper Profiling Amp
        </h1>
        <p className="text-xl text-gray-500 pt-1">
          All your favorite amps and effects, together in one little box.
        </p>
      </div>
      <hr />
      <div className="w-full mt-12 flex space-x-8">
        <div className="w-1/2 sticky left-0 top-8 h-full overflow-y-auto">
          <ImageContainer />
        </div>
        <div className="w-1/2">
          <span className="text-sm font-medium text-gray-500">Starting at</span>
          <h1 className="text-5xl font-extrabold text-gray-900">$1,799</h1>
          <div className="mt-6">
            <p className="text-lg text-gray-900 pb-4">
              The KEMPER PROFILER™ is the leading-edge digital guitar amplifier
              and all-in-one effects processor.
            </p>
            <div className="text-gray-500">
              <p className="pb-4">
                Hailed as a game-changer by guitarists the world over, the
                PROFILER™ is the first digital guitar amp to really nail the
                full and dynamic sound of a guitar or bass amp.
              </p>
              <p className="pb-4">
                This is made possible by a radical, patented technology and
                concept which we call PROFILING.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-lg font-medium">Form Factor</h1>
            <div className="flex space-x-4 mt-2">
              <div className="border border-gray-700 rounded-md p-4 text-sm cursor-pointer">
                <h1 className="text-gray-900 font-medium pb-2">
                  Profiler Head
                </h1>
                <p className="text-gray-500">
                  Compact amplifier head, perfect for a speaker cabinet or desk.
                </p>
              </div>
              <div className="border border-gray-300 rounded-md p-4 text-sm cursor-pointer">
                <h1 className="text-gray-900 font-medium pb-2">
                  Profiler Rack
                </h1>
                <p className="text-gray-500">
                  3U rackmount version of the classic profiling amplifier.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-lg font-medium">Power Amp</h1>
            <div className="flex flex-col w-full space-y-4 mt-2">
              <div className="border border-gray-700 rounded-md p-4 text-sm cursor-pointer">
                <h1 className="text-gray-900 font-medium pb-2">None</h1>
                <p className="text-gray-500">
                  Use in the studio or with your own power amp.
                </p>
              </div>
              <div className=" flex justify-between items-center border border-gray-300 rounded-md p-4 text-sm">
                <div className="cursor-pointer">
                  <h1 className="text-gray-900 font-medium pb-2">Powered</h1>
                  <p className="text-gray-500">
                    Built-in 600W solid state power amp.
                  </p>
                </div>
                <div className="text-sm text-gray-900">+ $449</div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-lg font-medium">Foot Controller</h1>
            <div className="flex flex-col w-full space-y-4 mt-2">
              <div className="border border-gray-700 rounded-md p-4 text-sm cursor-pointer">
                <h1 className="text-gray-900 font-medium">None</h1>
              </div>
              <div className="flex justify-between items-center border border-gray-300 rounded-md p-4 text-sm cursor-pointer">
                <h1 className="text-gray-900 font-medium">
                  Profiler Remote Foot Controller
                </h1>
                <p className="text-sm text-gray-900">+ $449</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
