"use client";

import { Box } from "@mui/material";
import InputField from "./InputField";
import MonthDayPicker from "./MonthDayPicker";
import Link from "next/link";
import React from "react";

const PersonalDetailsForm = () => {
  return (
    <Box className="bg-white rounded-[1.25rem] shadow-[0_8px_16px_0_#BBBBBB26] w-[90vw] max-w-full md:w-[28rem] lg:w-[32rem] mx-auto md:mx-8 my-4 md:my-8 flex flex-col px-4 md:px-10 pt-8 md:pt-12 pb-4 md:pb-6">
      <div className="font-inter font-bold text-[2rem] md:text-[2.375rem] leading-[1.25] text-[#1C2927] mb-2 text-center">
        Personal Details
      </div>
      <div className="font-inter font-normal text-[1rem] md:text-[1.125rem] leading-[1.6875rem] text-[#1C2927] mb-8 text-center">
        Add your Basic info to proceed
      </div>

      <InputField
        id="fullName"
        label="Full Name"
        placeholder="Enter Your Name"
      />
      <InputField
        id="phone"
        label="Phone Number"
        placeholder="Enter Your Phone Number"
      />

      <label
        htmlFor="dob-mmdd"
        className="font-inter font-medium text-[0.9375rem] leading-[100%] mb-2 text-[#000000]"
      >
        Date of Birth
      </label>
      <MonthDayPicker />

      <Box className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
        <Link href="/auth/sign-in" className="w-full">
          <button
            type="button"
            className="w-full h-[3.57rem] rounded-[0.25rem] font-inter font-medium text-[1rem] leading-[100%] text-white transition cursor-pointer"
            style={{
              background: "linear-gradient(90deg, #345794 0%, #101B2E 100%)",
            }}
          >
            Proceed
          </button>
        </Link>
      </Box>

      <div className="mt-10 flex justify-center">
        <span className="font-inter font-normal text-sm md:text-[18px] md:leading-[27px] text-[#1C2927] text-center">
          Copyright © 2025 Falcon. All rights reserved
        </span>
      </div>
    </Box>
  );
};

export default PersonalDetailsForm;
