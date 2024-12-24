import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardComponent from "../shared/CardComponent";

const OfferSection: React.FC = () => {
  return (
    <div className="mt-10 w-[90%] mx-auto">
      <div className="font-['Poppins'] text-lg font-bold leading-[40px] text-left decoration-[underline-from-font] decoration-skip-ink-none text-[#404040] w-max block mb-8">
        Popular Offer Of The Day
        <br />
        <span className="w-full block h-1 bg-[#248D50]"></span>
      </div>

      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="w-full md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-1">
                <Card className="w-max">
                  <CardComponent />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default OfferSection;
