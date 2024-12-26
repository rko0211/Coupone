import React, { useState } from "react";
import amazonimg from "../../assets/amazon.png";
import discount from "../../assets/discount.png";
import spotify from "../../assets/spotify.png";

interface ItemType {
  id: number;
  image: string;
  discountText: string;
  discountImage: string;
}

const DeliveryItems: React.FC = () => {
  const items: ItemType[] = [
    {
      id: 1,
      image: amazonimg,
      discountText: "Upto 82% OFF",
      discountImage: discount,
    },
    {
      id: 2,
      image: spotify,
      discountText: "Upto 82% OFF",
      discountImage: discount,
    },
  ];

  // Use state to manage item counts dynamically
  const [itemCounts, setItemCounts] = useState<{ [key: number]: number }>(() =>
    items.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  );

  // Handler to increment item count
  const incrementCount = (id: number) => {
    setItemCounts((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  // Handler to decrement item count
  const decrementCount = (id: number) => {
    setItemCounts((prev) => ({
      ...prev,
      [id]: Math.max(prev[id] - 1, 0), // Prevent negative counts
    }));
  };

  return (
    <div>
      {/* Items Section */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-6">Item</h2>
        <div className="flex flex-col gap-10 items-center shadow-custom p-10 px-16 bg-white">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-between w-full"
            >
              <div className="flex flex-col gap-5 items-center">
                <div className="flex flex-col items-center gap-4 py-4 px-8 shadow-custom rounded-[20px]">
                  <img src={item.image} alt="Item" className="w-44 h-28" />
                  <div className="flex flex-col items-center">
                    <p className="font-poppins font-semibold leading-[30px] text-[20px] text-[#888888]">
                      {item.discountText}
                    </p>
                    <img
                      src={item.discountImage}
                      alt="Discount"
                      className="h-16 w-20"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center space-x-2">
                  <div>ADD ITEM</div>
                  <div className="border border-black rounded-[15px] p-2">
                    <button
                      className="px-3 py-1 rounded"
                      onClick={() => decrementCount(item.id)}
                    >
                      -
                    </button>
                    <span className="px-4 py-1 rounded">
                      {itemCounts[item.id]}
                    </span>
                    <button
                      className="px-3 py-1 rounded"
                      onClick={() => incrementCount(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryItems;
