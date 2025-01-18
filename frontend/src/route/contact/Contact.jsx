const Contact = () => {
  return (
    <div className=" w-full bg-white mt-28 flex flex-col items-center min-h-[80vh]">
      <h1 className="text-blue-500 font-bold text-4xl">Contact Us!</h1>
      <div className="flex gap-2 w-full">
        <div className="w-1/2 py-10">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-lg text-center mb-8">Drop us a line!</p>
            <form className="flex flex-col items-center">
              <input
                type="text"
                placeholder="Name"
                className="w-full max-w-md px-4 py-2 rounded-md border border-gray-400 mb-4"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full max-w-md px-4 py-2 rounded-md border border-gray-400 mb-4"
              />
              <textarea
                placeholder="Message"
                className="w-full max-w-md px-4 py-2 rounded-md border border-gray-400 mb-8"
                rows={3}
              ></textarea>
              <button className="bg-gray-800 w-full max-w-md text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="w-1/2 py-10">
          <h2 className=" textg-2xl my-2 font-semibold">
            Better yet see in you person feel free to visit in bussiness work
            hours
          </h2>
          <h1 className="text-3xl font-bold my-2">Title</h1>
          <h4>Hours</h4>
          <p className="text-xl font-extralight my-1">
            Monday 10:00 am to 05:00 pm
          </p>
          <p className="text-xl font-extralight my-1">
            Tuseday 10:00 am to 05:00 pm
          </p>
          <p className="text-xl font-extralight my-1">
            Wednesday 10:00 am to 05:00 pm
          </p>
          <p className="text-xl font-normal my-1">
            Thursday 10:00 am to 05:00 pm
          </p>
          <p className="text-xl font-extralight my-1">
            Friday 10:00 am to 01:00 pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
