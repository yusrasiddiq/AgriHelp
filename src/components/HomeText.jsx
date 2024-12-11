export default function HomeText() {
  return (
    <>
      <div className="flex min-h-[25vh] items-center justify-center bg-yellow-400 font-bold text-gray-900 pt-20  font-mono">
        <div className="flex flex-col items-center justify-center text-center space-y-12">
          <div className="text-4xl font-bold text-center">
            <span className="tracking-wide"></span> One Stop Solution For{" "}
            <span className="tracking-wide"></span>
            <div className="relative inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden mt-4 underline">
              <span className="animate-word-delay-1 col-span-full row-span-full">
                Weather Reports
              </span>
              <span className="animate-word-delay-3 col-span-full row-span-full">
                Agriculture News
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
            @keyframes word {
              0% {
                transform: translateY(100%);
              }
              15% {
                transform: translateY(-10%);
                animation-timing-function: ease-out;
              }
              20% {
                transform: translateY(0);
              }
              40%,
              100% {
                transform: translateY(-110%);
              }
            }
  
            .animate-word {
              animation: word 7s infinite;
            }
            .animate-word-delay-1 {
              animation: word 7s infinite;
              animation-delay: -1.4s;
            }
            .animate-word-delay-2 {
              animation: word 7s infinite;
              animation-delay: -2.8s;
            }
            .animate-word-delay-3 {
              animation: word 7s infinite;
              animation-delay: -4.2s;
            }
            .animate-word-delay-4 {
              animation: word 7s infinite;
              animation-delay: -5.6s;
            }
          `}
      </style>
    </>
  );
}
