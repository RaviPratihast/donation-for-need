import React from "react";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className=" max-sm:h-full max-sm:w-full max-sm:mt-40  flex flex-col justify-evenly">
      {/* message part */}
      <h1 className="flex justify-center mt-3 text-2xl">
        Urgent Medical Support Needed
      </h1>
      <div className="flex justify-center mt-5 shadow-sm">
        <img className="h-64 max-sm:h-52" src="deep.jpg" alt="patient" />
      </div>

      <div className=" p-6 max-sm:p-2 m-4 rounded-lg shadow-xl  max-sm:m-1 flex flex-col gap-2">
        <p>Dear Friends and Well-Wishers,</p>
        <p>
          I hope this message finds you well. I am writing to share a matter of
          great significance.
        </p>
        <p>
          Currently, my mother is undergoing medical treatment at Apollo
          Hospital in Chennai. Her diagnosis includes a Pacemaker pocket, Lead
          infection, and moderate pericardial effusion. The estimated cost of
          her treatment is approximately 15-20 lakhs, as conveyed by the medical
          team.
        </p>
        <p>
          While I am doing my best to cover her medical expenses, I am humbly
          reaching out to all of you for any support you may be willing to
          offer. Your generous contributions, whether through GPay/PhonePe or a
          direct bank transfer, would be a tremendous help during this
          challenging period.
        </p>
        <p className="">
          You can access her medical records via the following link:
          <a
            className=" border border-b-black italic p-1 ml-4 "
            href="https://docs.google.com/document/d/17m7b1px7lC91umHqammHn-L2n8npBdRGuO4ZA4kynnQ/edit?usp=sharing"
          >
            Medical Reports
          </a>
        </p>
        <p>
          I genuinely appreciate your consideration and potential assistance.
          Your kindness would mean the world to my family and me.
        </p>
        <div className="flex justify-between">
          <div>
            <p>With warm regards,</p>
            <p>Dipjyoti Das</p>
          </div>
          <button
            className=" bg-black text-white w-24 rounded-lg text-sm"
            onClick={() => navigate("payment-page")}
          >
            DONATE
          </button>
        </div>
      </div>
    </div>
  );
};
