const Service = () => {
  const washes = [
    {
      id: 1,
      title: "Interior or Exterior Wash - Sedan",
      price: 4000,
      description:
        "Interior: Vacuuming, rubber mats cleaned, wipe down of all surfaces, glass cleaning, & air  Exterior: Thorough rim cleaning (face & barrels), power wash foamer, air dry, spray wax, & tire shine. ",
    },
    {
      id: 2,
      title: "Interior and exterior wash SUV",
      price: 200,
      description:
        "Interior: Vacuuming, rubber mats cleaned, wipe down of all surfaces, glass cleaning, & air freshener Exterior: Thorough rim cleaning (face & barrels), power wash foamer, air dry, spray wax, & tire shine.",
    },
  ];
  const tints = [
    {
      id: 1,
      title: "Regular Tints - Front Two Windows",
      price: 200,
      description:
        "The rear windows of SUVs, Trucks, and Crossovers already come with  glass that's been stained dark from the factory. While no tint film will ever match perfectly with the stained glass, we've found that 20% is the closest match. But we'll put on whatever percentage you request!  ",
    },
    {
      id: 2,
      title: "Regular Tints - Full Car w/ Windshield",
      price: 200,
      description:
        "Protect yourself from the sun's harmful UV rays while making your vehicle's windows darker. Keep in mind that if you're doing the windshield as well, be sure to bring a windshield sticker (https://a.co/d/al93jAC) prior to your visit to ensure nothing adhesive gets stuck to your freshly tinted windshield. Not sure which percentage to choose? Our team of experts would be happy to recommend 50%, 35%, 20% or 5% (Limo) tint shades. ",
    },
    {
      id: 3,
      title: "Ceramic Tints - Full Car w/ Windshield",
      price: 200,
      description:
        "Ceramic tints is the top tier of tint types in the industry. In addition to protecting against the sun's harmful UV rays, ceramic tints will last nearly twice as long as regular tints, and also serve as a way to regulate the temperature (heat rejection) in the summer. However, harnessing the heat rejection properties requires ALL the windows (including the front windshield) to be tinted. Lastly, ceramic tints offer better visibility, meaning the tints will be lighter looking from the inside out.",
    },
  ];
  const wrapping = [
    {
      id: 1,
      title: "Roof Wrap",
      price: 5999,
      description:
        "Looking to spruce up your ride? Ask us  about our wide selections of vinyl color options, including gloss black and carbon fiber!     ",
    },
    {
      id: 1,
      title: "Black PPF Wrap",
      price: 5999,
      description:
        "This option is for those looking for a gloss black roof that keeps its brilliant luster for up to 10 years! Protect your car roof while changing the color to a beautiful glossy black! ",
    },
    {
      id: 1,
      title: "Full Color changw",
      price: 5999,
      description:
        "Fall in love with your car all over again by simply changing the color! We have the entire rainbow of colors ready and waiting for you. ",
    },
  ];
  return (
    <div className="  mt-24 min-h-[100vh] flex flex-col items-center">
      <h1 className="text-2xl font-bold my-2">Welcome</h1>
      <p className=" font-normal text-xl px-20 text-center">
        There's much to see here. So, take your time, look around, and learn all
        there is to know about us. We hope you enjoy our site and take a moment
        to drop us a line.
      </p>
      <div className="flex mt-6 w-full h-[-webkit-aviable] bg-gray-200 flex-col items-center justify-center">
        <h1 className="text-4xl font-bold my-2 text-blue-500">
          Basic Price List
        </h1>
        <hr className="h-[2px] rounded-md w-60 my-2 bg-gray-500" />
        <div className=" px-20 my-2 flex flex-col  justify-center">
          <div>
            <h1 className="text-2xl font-bold text-blue-500">Washes</h1>
            <p className="text-lg font-normal my-1">
              Royal Treatment For Your Vehicle
            </p>
          </div>
          <div className="flex gap-10 flex-col ">
            {washes.map((e) => (
              <div key={e.id} className="flex justify-center items-center">
                <div className=" flex flex-col">
                  <h2 className="text-2xl my-1 font-medium">{e.title}</h2>
                  <p className="text-xl font-normal">{e.description}</p>
                </div>
                <span className=" text-2xl font-normal">{e.price}</span>
              </div>
            ))}
          </div>
        </div>
        <div className=" px-20 my-2 flex flex-col  justify-center">
          <div>
            <h1 className="text-2xl font-bold text-blue-500">Tints</h1>
            <p className="text-lg font-normal my-1">
              Royal Treatment For Your Vehicle
            </p>
          </div>
          <div className="flex gap-10 flex-col ">
            {tints.map((e) => (
              <div key={e.id} className="flex justify-center items-center">
                <div className=" flex flex-col">
                  <h2 className="text-2xl my-1 font-medium">{e.title}</h2>
                  <p className="text-lg font-normal">{e.description}</p>
                </div>
                <span className=" text-2xl font-normal">{e.price}</span>
              </div>
            ))}
          </div>
        </div>
        <div className=" px-20 my-2 flex flex-col  justify-center">
          <div>
            <h1 className="text-2xl font-bold text-blue-500">VNYl Wraping</h1>
            <p className="text-lg font-normal my-1">
              Royal Treatment For Your Vehicle
            </p>
          </div>
          <div className="flex gap-10 flex-col ">
            {wrapping.map((e) => (
              <div key={e.id} className="flex justify-center items-center">
                <div className=" flex flex-col">
                  <h2 className="text-2xl my-1 font-medium">{e.title}</h2>
                  <p className="text-lg font-normal">{e.description}</p>
                </div>
                <span className=" text-2xl font-normal">{e.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
