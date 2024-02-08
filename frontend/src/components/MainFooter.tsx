import React from "react";

const MainFooter: React.FC = () => {
  return (
    <footer className="bg-white border-t pt-12 my-16 p-5 ">
      <div className="md:grid md:grid-cols-2 md:gap-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">About</h2>
          <p>
            Eco-friendly products benefit you and the planet. They reduce
            pollution, waste, and toxins, improving air and water quality. Plus,
            they're often made from recycled materials and support sustainable
            businesses.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Terms and Condition</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
