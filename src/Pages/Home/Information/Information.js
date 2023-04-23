import React from "react";
import { FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";

const Information = () => {
  return (
    <div className="footer gap-10 mb-10 p-10 bg-black text-neutral-content items-center h-64 place-items-center">
      <div className="flex top-2 items-center">
        <div>
          <FaCalendarAlt className="text-4xl text-orange-700"></FaCalendarAlt>
        </div>
        <div >
          <p>We are open monday-friday</p>
          <br />
          <p className="text-3xl">7:00 am - 9:00 pm</p>
        </div>
      </div>

      <div className="flex items-center">
        <FaPhoneAlt className="text-4xl text-orange-700"></FaPhoneAlt>
        <div>
            <p>Have a question?</p>
            <p className="text-3xl">+2546 251 2658</p>
        </div>
      </div>
      <div className="flex items-center">
       <ImLocation2 className="text-4xl text-orange-700"></ImLocation2>
       <div>
       <p>Need a repair? our address</p>
       <p className="text-3xl">Liza Street, New York</p>
       </div>
      </div>
    </div>
  );
};

export default Information;
