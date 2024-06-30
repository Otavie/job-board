import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center mx-auto">
        <Link href={"/"} className="font-semibold text-xl">
          Job Board
        </Link>
        <nav className="flex gap-6 *:px-4 *:py-2 *:rounded-lg">
          <Link className="bg-gray-500" href={"/login"}>
            Login
          </Link>
          <Link className="bg-blue-600" href={"/new-listing"}>
            Post a Job
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
