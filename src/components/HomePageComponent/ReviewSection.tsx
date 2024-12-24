// import React from "react";
// import { Card } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// import SectionHeading from "../shared/SectionHeading";
// import Rating from "@mui/material/Rating";
// // import Stack from "@mui/material/Stack";

// const ReviewSection: React.FC = () => {
//   const smallCards = [
//     {
//       id: 1,
//       img: "brand1",
//       name: "Madhuri Naik, Navi Mumbai",
//       description:
//         "My favourite app that gave me extra discounts and cashback on brands like Amazon, Flipkart & Myntra. Using this app for a long time and I am really enjoying its features.",
//     },
//     {
//       id: 2,
//       img: "brand1",
//       name: "Madhuri Naik, Navi Mumbai",
//       description:
//         "My favourite app that gave me extra discounts and cashback on brands like Amazon, Flipkart & Myntra. Using this app for a long time and I am really enjoying its features.",
//     },
//     {
//       id: 3,
//       img: "brand1",
//       name: "Madhuri Naik, Navi Mumbai",
//       description:
//         "My favourite app that gave me extra discounts and cashback on brands like Amazon, Flipkart & Myntra. Using this app for a long time and I am really enjoying its features.",
//     },
//     {
//       id: 4,
//       img: "brand1",
//       name: "Madhuri Naik, Navi Mumbai",
//       description:
//         "My favourite app that gave me extra discounts and cashback on brands like Amazon, Flipkart & Myntra. Using this app for a long time and I am really enjoying its features.",
//     },
//     {
//       id: 5,
//       img: "brand1",
//       name: "Madhuri Naik, Navi Mumbai",
//       description:
//         "My favourite app that gave me extra discounts and cashback on brands like Amazon, Flipkart & Myntra. Using this app for a long time and I am really enjoying its features.",
//     },
//   ];
//   return (
//     <div className="mt-10 w-[90%] mx-auto">
//       <SectionHeading heading="Hear It From Our Customers" />
//       <div>
//         <Carousel
//           opts={{
//             align: "center",
//           }}
//           className="w-full "
//         >
//           <CarouselContent>
//             {cards[activeTab]?.map((item, index) => (
//               <CarouselItem
//                 key={index}
//                 className="w-full md:basis-1/2 lg:basis-1/4"
//               >
//                 <div className="p-1 w-max">
//                   <Card className="w-max">
//                     <div
//                       key={item.id}
//                       className=" w-[240px] border  rounded-[4px] p-4 shadow-custom flex flex-col items-center"
//                     >
//                       <img
//                         src={item.imgsrc}
//                         alt="Company Logo"
//                         className="w-[160px]"
//                       />
//                       <p className="text-gray-700 mb-1 font-semibold font-[Poppins] leading-[30px] text-[20px]">
//                         {item.title}
//                       </p>
//                       <p className=" my-4  font-semibold text-[18px] leading-[27px] font-[Poppins]">
//                         {item.subtitle}
//                       </p>
//                       <button className="bg-[#248D50] font-semibold text-white py-2 px-8 rounded-sm hover:bg-green-600">
//                         {item.buttonText}
//                       </button>
//                     </div>
//                   </Card>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default ReviewSection;

// {
//   /* <div
//   key={card.id}
//   className="w-[360px]  rounded-[8px] py-8 px-7 shadow-custom flex flex-col items-start justify-between gap-2 bg-[#BFFFD9]"
// >
//   <div>
//     <Rating
//       name="half-rating-read"
//       defaultValue={3.5}
//       precision={0.5}
//       sx={{ marginRight: "2.5rem" }}
//       readOnly
//     />
//   </div>
//   <div className=" w-full font-['Poppins'] text-[16px] leading-[24px] text-left ">
//     {card.description}
//   </div>
//   <div className=" w-full font-['Poppins'] text-pretty   text-[16px] leading-[24px] text-right">
//     {card.name}
//   </div>
// </div>; */
// }
