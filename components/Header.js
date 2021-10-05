import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white sm:flex text-center items-center  sm:justify-between px-7 py-3">
      <Link href="/">
        <a className="sm:flex sm:items-center sm:mb-0 mb-4 block">
          <Image src="/images/logo.png" alt="" width={100} height={70} />
          <h2 className="sm:text-2xl text-xl sm:ml-3">DevSpace</h2>
        </a>
      </Link>
      <nav>
        <ul>
          <Link href="/blog">
            <a className="mx-4 text-lg transition duration-300 ease-in-out hover:text-green-500">
              Blog
            </a>
          </Link>
          <Link href="/about">
            <a className="mx-4 text-lg transition duration-300 ease-in-out hover:text-green-500">
              About
            </a>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
