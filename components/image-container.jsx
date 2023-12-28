import Image from 'next/image';

const ImageContainer = () => {
  return (
    <>
      <div className="border border-gray-200 rounded-md overflow-hidden flex justify-center">
        <Image
          src="/img/kemper-front.jpg"
          width={500}
          height={340}
          alt=""
          className=""
        />
      </div>
      <div className="flex mt-3 space-x-3 overflow-hidden">
        <div className="border border-gray-900 rounded-md overflow-hidden">
          <Image
            src="/img/kemper-front.jpg"
            width={500}
            height={340}
            alt=""
            className=""
          />
        </div>
        <div className="border border-gray-200 rounded-md overflow-hidden">
          <Image
            src="/img/kemper-angle.jpg"
            width={500}
            height={340}
            alt=""
            className=""
          />
        </div>
        <div className="border border-gray-200 rounded-md overflow-hidden">
          <Image
            src="/img/kemper-rear.jpg"
            width={500}
            height={340}
            alt=""
            className=""
          />
        </div>
      </div>
    </>
  );
};

export default ImageContainer;
