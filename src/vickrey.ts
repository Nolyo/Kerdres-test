import { Bid } from "./type";

export function vickreyAuction(bids: Bid[], reservePrice: number): { winningBidder: string; winningPrice: number } | null {
    // Order offres by amount
    bids.sort((a, b) => b.amount - a.amount);
  
    // Find the highest bidder
    const winningBid = bids.find(bid => bid.amount >= reservePrice);
  
    if (!winningBid) {
      return null; // No bidder has reached the reserve price
    }

    // We remove the winning bidder and take the highest bid
    const secondHighestBid = bids.find(bid => bid.bidder !== winningBid.bidder && bid.amount >= reservePrice);

    // If there is no second highest bid, we take the reserve price
    const winningPrice = secondHighestBid ? secondHighestBid.amount : reservePrice;
  
    return { winningBidder: winningBid.bidder, winningPrice };
  }