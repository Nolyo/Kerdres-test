import { Bid } from "./type";
import { vickreyAuction } from "./vickrey";

const bids: Bid[] = [
  { bidder: 'A', amount: 130 },
  { bidder: 'A', amount: 110 },
  { bidder: 'C', amount: 125 },
  { bidder: 'D', amount: 115 },
  { bidder: 'D', amount: 105 },
  { bidder: 'D', amount: 90 },
  { bidder: 'E', amount: 140 },
  { bidder: 'E', amount: 135 },
  { bidder: 'E', amount: 132 },
];
  
console.log(vickreyAuction(bids, 100));
  