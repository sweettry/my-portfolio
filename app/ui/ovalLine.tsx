function OvalLine() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1067.97 50' // Adjusted height in the viewBox
      className='h-auto w-full'
    >
      <defs>
        <linearGradient
          id='d'
          x1='0.19'
          y1='25'
          x2='1067.78'
          y2='25'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0' stopColor='#fff' stopOpacity='0' />
          <stop offset='1' stopColor='#fff' />
        </linearGradient>
        <linearGradient
          id='edge-gradient'
          x1='0'
          y1='0'
          x2='1'
          y2='1'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='0' stopColor='#fff' stopOpacity='0.3' />
          <stop offset='1' stopColor='#fff' stopOpacity='0' />
        </linearGradient>
      </defs>
      <g>
        <path
          fill='url(#d)'
          stroke='url(#edge-gradient)'
          strokeWidth='20' // Thinner stroke width
          strokeMiterlimit='10'
          d='M533.98,5c212.75,0,403.65,16.86,533.8,44.41C945.25,23.04,751.74,.5,533.98,.5S122.72,23.04,.19,49.41C130.34,21.36,321.23,5,533.98,5Z'
          opacity='0.21' // 50% opacity
        />
      </g>
    </svg>
  );
}

export default OvalLine;
