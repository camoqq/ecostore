import React from "react";

const BannerSlider: React.FC = () => {
  return (
    <section className="md:flex border md:h-96">
      <div className="md:w-6/12 p-5">
        <img
          src="https://a.storyblok.com/f/162306/6517x4345/79eb711de2/greggs-eco-shop-interior.jpg/m/1200x0/smart/filters:quality(95)"
          alt=""
          className="w-full h-full object-cover shadow-xl mx-auto rounded-lg"
        />
      </div>
      <div className="md:w-4/12 md:flex md:justify-center md:items-center mx-auto">
        <div>
          <h2 className="font-bold text-xl mb-3">Why Eco-Friendly Products Are Worth It</h2>
          <p className="text-gray-400">
            Eco-friendly products benefit you and the planet. They reduce
            pollution, waste, and toxins, improving air and water quality. Plus,
            they're often made from recycled materials and support sustainable
            businesses. While some may be costlier upfront, they can last longer
            and save you money in the long run. Choosing eco-friendly products
            is an investment in your health and the future of our planet. Start
            small and make a difference!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerSlider;
