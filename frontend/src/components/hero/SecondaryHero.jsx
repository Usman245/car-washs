const HeroTwo = () => {
  return (
    <div className="text-center my-8">
      <h2 className="text-blue-500 text-4xl mb-6">About GearGrid NYC</h2>
      <div className="flex justify-center mobile:flex-col items-center">
        <div className="max-w-xs rounded-lg overflow-hidden mx-2 flex flex-col justify-center items-center">
          <img
            src="https://img1.wsimg.com/isteam/ip/5e82261c-c60e-49cc-b3f4-645509305557/Screenshot%202023-12-14%20at%206.13.19%20PM.png/:/cr=t:0%25,l:0.27%25,w:99.47%25,h:100%25/rs=w:365,h:365,cg:true"
            alt="Placeholder"
            className="w-[250px] h-[250px] object-cover object-center rounded-full"
          />
          <div className="p-4">
            <h4 className="text-xl font-semibold mb-2">Our Mission</h4>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              ante sed ipsum sagittis pharetra.
            </p>
          </div>
        </div>
        <div className="max-w-xs rounded-lg overflow-hidden mx-2 flex flex-col justify-center items-center">
          <img
            src="https://img1.wsimg.com/isteam/ip/5e82261c-c60e-49cc-b3f4-645509305557/Screenshot%202023-12-14%20at%206.14.32%20PM.png/:/cr=t:0%25,l:9.87%25,w:80.25%25,h:100%25/rs=w:365,h:365,cg:true"
            alt="Placeholder"
            className="w-[250px] h-[250px] object-cover object-center rounded-full"
          />
          <div className="p-4">
            <h4 className="text-xl font-semibold mb-2">
              Expert Detailing Systam
            </h4>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              ante sed ipsum sagittis pharetra.
            </p>
          </div>
        </div>
        <div className="max-w-xs rounded-lg overflow-hidden mx-2 flex flex-col justify-center items-center">
          <img
            src="https://img1.wsimg.com/isteam/ip/5e82261c-c60e-49cc-b3f4-645509305557/Screenshot%202023-12-14%20at%206.09.45%20PM.png/:/cr=t:0%25,l:9.73%25,w:80.53%25,h:100%25/rs=w:365,h:365,cg:true"
            alt="Placeholder"
            className="w-[250px] h-[250px] object-cover object-center rounded-full"
          />
          <div className="p-4">
            <h4 className="text-xl font-semibold mb-2">Convinient Location</h4>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              ante sed ipsum sagittis pharetra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
