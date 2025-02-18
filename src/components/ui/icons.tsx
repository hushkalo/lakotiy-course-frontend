import { type HTMLAttributes } from "react";

type IconProps = HTMLAttributes<SVGElement>;

export const Icons = {
  instagram: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="none"
      viewBox="0 -0.5 25 25"
      {...props}
    >
      <path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.5 5h-6a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4Z"
        clipRule="evenodd"
      />
      <path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12.5 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
        clipRule="evenodd"
      />
      <rect
        width="2"
        height="2"
        x="15.5"
        y="9"
        fill="white"
        rx="1"
        transform="rotate(-90 15.5 9)"
      />
      <rect
        width="1"
        height="1"
        x="16"
        y="8.5"
        stroke="white"
        strokeLinecap="round"
        rx=".5"
        transform="rotate(-90 16 8.5)"
      />
    </svg>
  ),
  telegram: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="white"
        fillRule="evenodd"
        d="M23.112 4.494c.318-1.55-1.205-2.837-2.68-2.267L2.342 9.216c-1.647.637-1.72 2.941-.117 3.682l3.94 1.818 1.873 6.559a1 1 0 0 0 1.67.432l2.886-2.887 4.043 3.033a2 2 0 0 0 3.16-1.198l3.315-16.16ZM3.063 11.082l18.09-6.99-3.316 16.161L13.1 16.7a1 1 0 0 0-1.307.093l-1.236 1.236.371-2.043 7.28-7.279a1 1 0 0 0-1.204-1.575L6.95 12.876l-3.888-1.794Zm5.114 3.397.606 2.123.233-1.281a1 1 0 0 1 .277-.528l2.22-2.22-3.336 1.906Z"
        clipRule="evenodd"
      />
    </svg>
  ),
};
