const Footer = () => {
  return (
    <section className="bg-gray-50 fixed bottom-0 w-full">
      <div className="container mx-auto py-8 flex justify-between items-center">
        <div className="flex space-x-6">
          <div className="text-sm">
            <h1 className="text-gray-900 font-medium pb-1">Free Shipping </h1>
            <p className="text-gray-500">
              Get 2-day free shipping anywhere in North America.
            </p>
          </div>
          <div className="text-sm">
            <h1 className="text-gray-900 font-medium pb-1">Free Shipping </h1>
            <p className="text-gray-500">
              Get 2-day free shipping anywhere in North America.
            </p>
          </div>
        </div>
        <div className="flex space-x-6 items-center">
          <div className="text-right">
            <h1 className="font-bold text-3xl text-gray-900">$2,717</h1>
            <p className="text-sm text-gray-500 pt-1">
              Need financing? <span className="underline">Learn more</span>{' '}
            </p>
          </div>
          <div className="">
            <button className="bg-gray-900 px-6 py-3 rounded-md text-white text-sm font-medium">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
