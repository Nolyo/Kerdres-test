import { vickreyAuction } from '../vickrey';
import { Bid } from '../type';

describe('vickreyAuction', () => {
  test('Should return the right winner and the price', () => {
    const bids: Bid[] = [
      { bidder: 'A', amount: 130 },
      { bidder: 'B', amount: 120 },
      { bidder: 'C', amount: 140 }
    ];
    const reservePrice = 100;
    const expected = { winningBidder: 'C', winningPrice: 130 };
    const result = vickreyAuction(bids, reservePrice);
    expect(result).toEqual(expected);
  });

  test('Should return null if no bidder reaches the reserve price', () => {
    const bids: Bid[] = [
      { bidder: 'A', amount: 90 },
      { bidder: 'B', amount: 85 }
    ];
    const reservePrice = 100;
    const result = vickreyAuction(bids, reservePrice);
    expect(result).toBeNull();
  });

  test('Should return the reserve price if the second highest bid does not exceed the reserve price', () => {
    const bids: Bid[] = [
      { bidder: 'A', amount: 110 },
      { bidder: 'A', amount: 98 },
      { bidder: 'B', amount: 95 }
    ];
    const reservePrice = 100;
    const result = vickreyAuction(bids, reservePrice);
    expect(result).toEqual({ winningBidder: 'A', winningPrice: reservePrice });
  });
});