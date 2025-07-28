import { TiFlashOutline } from "react-icons/ti";
import { TbBrain } from "react-icons/tb";
import { RiChat3Line } from "react-icons/ri";
import { FiEye } from "react-icons/fi";

export const iconMap = {
  Reaction: TiFlashOutline,
  Memory: TbBrain,
  Verbal: RiChat3Line,
  Visual: FiEye,
};

export const resultsData = [
  {
    category: "Reaction",
    score: 80,
    textColor: "text-red-400",
    bgColor: "bg-red-50",
  },
  {
    category: "Memory",
    score: 92,
    textColor: "text-yellow-400",
    bgColor: "bg-yellow-50",
  },
  {
    category: "Verbal",
    score: 61,
    textColor: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    category: "Visual",
    score: 72,
    textColor: "text-blue-800",
    bgColor: "bg-blue-50",
  },
];
