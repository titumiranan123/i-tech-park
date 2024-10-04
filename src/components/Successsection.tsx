import React from "react";
import Heading from "../components/Heading";
import Successcard from "../components/Successcard";
import img from "./../assets/user.png";
const Successsection: React.FC = () => {
  return (
    <div className="max-w-[1240px] lg:px-0 px-4 mx-auto mt-[120px]">
      <Heading
        title="Our Success Story"
        subtitle="We priotize your success with customized strategies , delivering outstanding results"
      />
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        <Successcard
          img={img}
          name="John Doe"
          designation="Founder or Lorem"
          description="I-Tech BD’s digital marketing services have significantly
          boosted our online presence. Their strategic approach and attention to
          detail have delivered impressive results, helping us achieve our goals
          efficiently. Highly recommended for anyone seeking reliable and
          effective digital marketing solutions."
        />
        <Successcard
          img={img}
          name="John Doe"
          designation="Founder or Lorem"
          description="I-Tech BD’s digital marketing services have significantly
          boosted our online presence. Their strategic approach and attention to
          detail have delivered impressive results, helping us achieve our goals
          efficiently. Highly recommended for anyone seeking reliable and
          effective digital marketing solutions."
        />
        <Successcard
          img={img}
          name="John Doe"
          designation="Founder or Lorem"
          description="I-Tech BD’s digital marketing services have significantly
          boosted our online presence. Their strategic approach and attention to
          detail have delivered impressive results, helping us achieve our goals
          efficiently. Highly recommended for anyone seeking reliable and
          effective digital marketing solutions."
        />
      </div>
    </div>
  );
};

export default Successsection;
