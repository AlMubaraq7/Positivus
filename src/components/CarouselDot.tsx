interface Props extends React.SVGProps<SVGElement> {
  onClick: () => void;
}
const CarouselDot: React.FC<Props> = ({ className, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="none"
    viewBox="0 0 22 22"
    className={className}
    onClick={onClick}
  >
    <g filter="url(#filter0_d_341_531)">
      <path d="M11.01 2.06 18 0l-2.04 7.01L18 14l-6.99-2.04L4 14l2.06-6.99L4 0z"></path>
    </g>
    <defs>
      <filter
        id="filter0_d_341_531"
        width="22"
        height="22"
        x="0"
        y="0"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="4"></feOffset>
        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_341_531"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_341_531"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);

export default CarouselDot;
