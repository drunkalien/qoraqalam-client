type Props = {
  active: boolean;
  onClick: any;
  className: string;
};

const Star = ({ active = false, ...props }: Props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={active ? "#FCB03E" : "none"}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Star;
