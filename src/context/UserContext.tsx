import { createContext } from "react";

// Define the type for the review data
export interface ReviewData {
  rating: number;
  reviewTitle: string;
  recommend: string;
  productReview: string;
  nickname: string;
  email: string;
  terms: boolean;
}

// Define the type for the context value
interface UserReviewContextType {
  AmazonData: {
    reviewData: ReviewData[];
    setReviewData: React.Dispatch<React.SetStateAction<ReviewData[]>>;
  };
  KfcData: {
    kfcReviewData: ReviewData[];
    setKfcReviewData: React.Dispatch<React.SetStateAction<ReviewData[]>>;
  };
}

// Create the context
const UserContext = createContext<UserReviewContextType | undefined>(undefined);

export default UserContext;
