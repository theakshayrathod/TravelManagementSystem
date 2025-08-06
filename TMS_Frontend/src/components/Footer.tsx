

const Footer = () => {
  return (
    <footer className=" bg-gray-800 text-white p-6 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg font-semibold">TMS © {new Date().getFullYear()}</div>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/user/about" className="hover:underline">About</a>
          <a href="/user/features" className="hover:underline">Features</a>
          <a href="/user/contact" className="hover:underline">Contact</a>
          <a href="/user/privacy" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
