import React, { useState } from "react";
// import UserContext from "../../context/UserContext";
import Rating from "@mui/material/Rating";

interface ReviewData {
  rating: number;
  reviewTitle: string;
  recommend: string;
  productReview: string;
  nickname: string;
  email: string;
  terms: boolean;
}
interface ReviewListProps {
  reviewData: ReviewData[];
}
const ReviewList: React.FC<ReviewListProps> = ({ reviewData }) => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  // Function to toggle review visibility
  const toggleReviews = () => {
    setShowAllReviews((prev) => !prev);
  };

  return (
    <div className="w-[90%] mx-auto my-12">
      <div className="rounded-[20px] shadow-custom p-10">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-[36px] font-normal leading-[54px]">
            Reviews ({reviewData.length})
          </h2>
          <button
            onClick={toggleReviews}
            className="font-poppins font-semibold px-10 py-2 text-white bg-[#404040] rounded-[15px] text-[32px] leading-[48px]"
          >
            {showAllReviews ? "Less" : "More"}
          </button>
        </div>
        <ul className="my-10">
          {(showAllReviews ? reviewData : reviewData.slice(0, 2)).map(
            (review, index) => (
              <div className="my-10" key={index}>
                <div className="flex items-center">
                  <Rating
                    name="half-rating-read"
                    defaultValue={review.rating}
                    precision={0.5}
                    sx={{ marginRight: "0.5rem" }}
                    readOnly
                  />
                  <span className="text-[12px] text-[#404040]">2 days ago</span>
                </div>

                <div className="my-3 font-semibold font-poppins text-[20px]">
                  {review.reviewTitle}
                </div>

                <div className="text-[#404040] text-[16px] my-3 leading-[30px] font-poppins">
                  {review.productReview}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-blue-500 font-poppins leading-[20px] text-[18px]">
                    Reply
                  </div>

                  <div className="flex items-center gap-2 font-poppins text-[18px]">
                    <div>{review.nickname}</div>
                    <div className="w-10 h-10 rounded-full bg-black"></div>
                  </div>
                </div>
              </div>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default ReviewList;
