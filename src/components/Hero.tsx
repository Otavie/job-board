const Hero = () => {
  return (
    <section className="py-12">
      <h1 className="text-4xl font-semibold text-center">
        Find your next
        <br />
        dream job
      </h1>
      {/* <p className="text-center text-gray-300 mt-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
        alias consectetur natus veritatis dolorem soluta fugiat, voluptate enim
        voluptatem vitae qui fugit quos blanditiis aliquam optio ipsum harum sed
        recusandae!
      </p> */}
      <form className="flex gap-2 mt-4 max-w-md mx-auto">
        <input
          type="search"
          placeholder="Search word or phrase"
          className="border border-gray-200 w-full py-2 px-3 rounded-md"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Search
        </button>
      </form>
    </section>
  );
};

export default Hero;
