function BackgroundImage() {
  return (
    <div className='fixed inset-0 -z-10 h-full w-full'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='100%'
        height='100%'
        viewBox='0 0 1743 1744'
        preserveAspectRatio='none'
        className='h-full w-full'
      >
        {/* Radial Gradient Background */}
        <rect width='100%' height='100%' fill='url(#radial-gradient)' />

        {/* Original Background Lines */}
        <path
          fill='#0E1827'
          stroke='url(#paint1_linear_3143_1642)'
          d='M1200.71 73.446L2689.86 2280.33l-3696.58-718.54L1200.71 73.446z'
          opacity='0.14'
        ></path>
        <path
          fill='#0E1827'
          stroke='url(#paint2_linear_3143_1642)'
          d='M1200.71 253.446L2689.86 2460.33l-3696.58-718.54L1200.71 253.446z'
          opacity='0.14'
        ></path>
        <path
          fill='#0E1827'
          stroke='url(#paint3_linear_3143_1642)'
          d='M1257.19 1355.08L-73.551 3660.95-1048.2 23.498 1257.19 1355.08z'
          opacity='0.21'
        ></path>
        <path
          fill='#0E1827'
          stroke='url(#paint4_linear_3143_1642)'
          d='M474.322 1265.08L1805.06 3570.95 2779.71-66.502 474.322 1265.08z'
          opacity='0.21'
        ></path>

        {/* Definitions */}
        <defs>
          <radialGradient
            id='radial-gradient'
            cx='50%'
            cy='0%'
            r='145.05%'
            fx='50%'
            fy='0%'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0%' stopColor='#1D2B41' />
            <stop offset='57.38%' stopColor='#020509' />
            <stop offset='88.16%' stopColor='#0F1A29' />
          </radialGradient>

          <linearGradient
            id='paint1_linear_3143_1642'
            x1='841.476'
            x2='1200.85'
            y1='1921.55'
            y2='72.752'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#fff'></stop>
            <stop offset='1' stopColor='#fff' stopOpacity='0'></stop>
          </linearGradient>
          <linearGradient
            id='paint2_linear_3143_1642'
            x1='841.476'
            x2='1200.85'
            y1='2101.55'
            y2='252.752'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#fff'></stop>
            <stop offset='1' stopColor='#fff' stopOpacity='0'></stop>
          </linearGradient>
          <linearGradient
            id='paint3_linear_3143_1642'
            x1='-561.361'
            x2='1257.87'
            y1='1842.36'
            y2='1354.89'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#fff'></stop>
            <stop offset='1' stopColor='#fff' stopOpacity='0'></stop>
          </linearGradient>
          <linearGradient
            id='paint4_linear_3143_1642'
            x1='2292.87'
            x2='473.639'
            y1='1752.36'
            y2='1264.89'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#fff'></stop>
            <stop offset='1' stopColor='#fff' stopOpacity='0'></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default BackgroundImage;
