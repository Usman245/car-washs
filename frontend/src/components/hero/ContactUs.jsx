const ContactUs = () => {
  return (
    <div className="bg-gray-200 w-full py-10">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-4">
          Contact Us
        </h1>
        <hr className="border-t-2 border-blue-600 mb-4" />
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
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
