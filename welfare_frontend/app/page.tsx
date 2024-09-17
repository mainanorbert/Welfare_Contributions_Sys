import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="bg-white h-screen overflow-y-scroll  pt-4 md:relative">
      {/* Add the SVG as a background on the right side */}
      <div className="absolute md:inset-0">
        <svg
          width="75%" // Adjust the width to take half of the screen or any proportion
          height="100%"
          viewBox="0 0 1491 1161"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-3 top- h-full"
        >
          <path
            opacity="0.5"
            d="M318.635 86.6942C198.697 187.217 180.111 377.298 98.8809 517.527C70.6041 566.322 34.0667 609.992 15.0036 664.123C-28.7619 788.026 31.472 928.572 112.093 1026.98C150.536 1073.93 195.44 1116.94 249.77 1136.72C291.55 1151.94 336.348 1152.57 380.325 1152.97L1150.79 1160.9C1236.81 1161.77 1332.39 1158.62 1394.24 1092.21C1436.87 1046.48 1454.18 979.692 1468.88 915.944C1486.93 837.613 1503.3 752.546 1475.2 677.94C1443.11 592.582 1361.96 544.21 1311.55 470.555C1229.74 351.223 1231.62 170.731 1127.44 75.4664C1078.8 31.0041 1014.62 13.5679 952.083 4.84978C834.184 -11.6089 722.506 19.4592 606.725 15.1266C507.756 11.428 400.739 17.8741 318.635 86.6942Z"
            fill="#F4E7C5"
          />
        </svg>
      </div>

      {/* Content */}
      <div  className="text-blue-950 absolute z-10 text-black top-[10rem] bg-gree-300 w-4/12 left-[4rem]">
        <p className="text-3xl font-bold ">Fostering Efficiency and Transparency</p>
        <p>To make the image visible without adding content inside the div,
          you need to give the div some dimensions (width and height).
          Since an empty div doesn't have any intrinsic dimensions,
          setting the size will ensure the background image is displayed.
          To make the image visible without adding content inside the div,
          you need to give the div some dimensions (width and height).
          Since an empty div doesn't have any intrinsic dimensions,
          setting the size will ensure the background image is displayed.
           </p>
           <div className="flex justify-around mt-6">
            <p className="bg-blue-950 rounded text-white py-2 px-10">Fundraise</p>
            <p className="border-2 border-blue-950 px-10 py-2 rounded">Learn More</p>
           </div>
      </div>
      <div className="text-center z-10 md:right-[4rem] rounded-3xl top-[9rem] absolute text-black"
      style={{
        backgroundImage: `url('/Display.jpg')`,
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',        
        backgroundPosition: 'center',
        width: '700px',
        height: '450px',
       }}
      >
      
      </div>
          
      <div className="relative z-10 flex justify-end pt-4 pr-[9rem] space-x-4">
        <Link className="pr-4 bg-blue-950 rounded py-2 px-6" href="/login">
          Login
        </Link>
        <Link className="pr-4 bg-blue-950 rounded py-2 px-6" href="/register">
          Register
        </Link>
      </div>
    </div>
  );
}
