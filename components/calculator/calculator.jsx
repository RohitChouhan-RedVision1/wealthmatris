"use client";

import { useState, useEffect } from "react";
import { Card } from "../ui/card";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"; // Import Recharts components
// import { Bar } from "react-chartjs-2";  // Import Bar chart component from react-chartjs-2
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import Link from "next/link";
import styles from "./calculator.module.css";
import { motion } from "framer-motion";
import axios from "axios";
const MotionCard = motion(Card);

// import { Chart } from "react-google-charts";  // Import Google Chart

// Register ChartJS components
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 }
  })
};

const fadeInVariants1 = {
  hidden: { opacity: 0, y: -100 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 }
  })
};
export default function Calculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(2500);
  const [expectedReturn, setExpectedReturn] = useState(10);
  const [investmentDuration, setInvestmentDuration] = useState(10);
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState([]);

  const calculateSip = async () => {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_DATA_API}/api/calculators/sip-calculator?monthlyInvestment=${monthlyInvestment}&investmentDuration=${investmentDuration}&expectedReturn=${expectedReturn}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
        if (res.status === 200) {
            const data = res.data
            const futureValue = data.futureValue;
            const totalInvestment = data.totalInvestment;
            const yearlyData = data.yearlyData;
            setResult({
                futureValue: Number(futureValue.toFixed(2)),
                totalInvestment: Number(totalInvestment.toFixed(2))
            });
            setChartData(yearlyData);
        }
    }
    catch (error) {
        console.log(error)
    }

};

// console.log(result,chartData[0],"dnajkdnh")
// Update the calculation when any of the investment values change
useEffect(() => {
    calculateSip();
}, [monthlyInvestment, investmentDuration, expectedReturn]);

  const chartDataset = chartData.map((item) => ({
    year: item.year,
    profit: item.growth-item.investedAmount,
    investment: item.investedAmount,
  }));
  return (
    <div className="main_section bg-white">
      <div className="max-w-screen-xl mx-auto   items-center text-center ">
      <div className="">
          <motion.h2 initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={0} className="topheading  text-[var(--rv-primary)] ">CALCULATOR</motion.h2>
          <motion.h2 initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={1} className="subheading  text-[var(--rv-primary)] mb-4">
            Power Of SIP
          </motion.h2>
          <motion.div initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={2} className="em_bar mx-auto">
            <div className="em_bar_bg" />
          </motion.div>
          <div className="flex flex-col md:flex-row pt-5 md:relative ">
            <MotionCard initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants1}
          custom={0} className="p-6 sm:p-4 bg-[var(--rv-primary)] md:w-[65%] rounded-xl  border-none">
              {/* < */}
              <div className="sm:space-y-8 lg:pl-32 md:pr-40">
                {/* Invested Amount Section */}
                <div>
                  <div className="flex sm:flex-row justify-between">
                    <label className="block  text-white text-sm md:text-lg font-semibold ">
                      Invested Amount (₹)
                    </label>
                    <div className="relative w-28 md:w-32">
                      <input
                        type="number"
                        value={monthlyInvestment}
                        onChange={(e) =>
                          setMonthlyInvestment(Number(e.target.value))
                        }
                        className="w-full pl-12 bg-transparent border  border-white border-solid rounded-[75px] text-white font-bold"
                        placeholder="Amount"
                      />
                      <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[var(--rv-primary)]">
                        ₹
                      </span>
                    </div>
                  </div>
                  <Slider
                    value={[monthlyInvestment]}
                    onValueChange={(value) => setMonthlyInvestment(value[0])}
                    max={100000}
                    step={1000}
                    className="mt-2 text-[#d7d8d8]"
                  />
                </div>
              </div>

              <div className="space-y-8 lg:pl-32 md:pr-40 mt-2 ">
                <div>
                  <div className="flex sm:flex-row  justify-between">
                    <label className="block text-white text-sm md:text-lg font-semibold">
                      Expected Return (%)
                    </label>
                    <div className="relative w-28 md:w-32">
                      <input
                        type="number"
                        value={expectedReturn}
                        onChange={(e) =>
                          setExpectedReturn(Number(e.target.value))
                        }
                        className="w-full pl-12 bg-transparent border  border-white border-solid rounded-[75px] text-white font-bold"
                        placeholder="Amount"
                      />
                      <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[var(--rv-primary)]">
                        %
                      </span>
                    </div>
                  </div>
                  <Slider
                    value={[expectedReturn]}
                    onValueChange={(value) => setExpectedReturn(value[0])}
                    max={30}
                    step={0.5}
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="space-y-8 lg:pl-32 md:pr-40 mt-2">
                {/* Invested Amount Section */}
                <div>
                  <div className=" flex sm:flex-row  justify-between">
                    <label className="block text-white text-sm md:text-lg font-semibold">
                      Time Period (Y)
                    </label>
                    <div className="relative w-28 md:w-32">
                      <input
                        type="number"
                        value={investmentDuration}
                        onChange={(e) => setInvestmentDuration(Number(e.target.value))}
                        className="w-full pl-12 bg-transparent border  border-white border-solid rounded-[75px] text-white font-bold"
                        placeholder="Amount"
                      />
                      <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[var(--rv-primary)]">
                        Y
                      </span>
                    </div>
                  </div>
                  <Slider
                    value={[investmentDuration]}
                    onValueChange={(value) => setInvestmentDuration(value[0])}
                    max={40}
                    step={1}
                    className="mt-2 "
                  />
                </div>
              </div>

             

              <div className="space-y-8 lg:pl-32 md:pr-40 mt-4 ">
                {/* Invested Amount Section */}
                <div className="border-2 border-solid border-[var(--rv-primary)] rounded-[10px] p-4 flex flex-col lg:flex-row justify-between">
                  <div
                    className={`${styles.beborder} flex flex-col justify-between items-center`}
                  >
                    <label className="block mb-1 text-white font-bold">
                      Total Invested
                    </label>
                    <label className="block mb-1 text-[var(--rv-secondary)] font-bold">
                      ₹{result?.totalInvestment}
                    </label>
                  </div>
                  <div
                    className={`${styles.beborder} flex flex-col justify-between items-center`}
                  >
                    <label className="block mb-1 text-white font-bold">
                      Estimated Return
                    </label>
                    <label className="block mb-1 text-[var(--rv-secondary)] font-bold">
                        ₹{((result?.futureValue - result?.totalInvestment).toFixed(2))}
                    </label>
                  </div>

                  <div className="flex flex-col justify-between items-center pt-2.5 md:pt-0 pb-5 md:pb-0">
                    <label className="block mb-1 text-white font-bold">
                      Total Amount
                    </label>
                    <label className="block mb-1 text-[var(--rv-secondary)] font-bold">
                      ₹{Number(result?.futureValue || 0).toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}

                    </label>
                  </div>
                </div>
              </div>
            </MotionCard>

            {/* Info Card */}
            <MotionCard initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInVariants}
          custom={1} className="p-2 bg-white md:absolute md:w-[45%]  md:right-2 md:bottom-16">
               <div className="mt-2 h-[200px] lg:h-[220px]  bg-white">
                  {/* <Bar data={chartDataset} options={chartOptions} /> */}
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartDataset}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="profit" fill="var(--rv-primary)" stackId="a" />
                      <Bar dataKey="investment" fill="var(--rv-secondary)" stackId="a" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
            </MotionCard>
          </div>
        </div>
      </div>
    </div>
  );
}
