import { EventixABI, EventixContractAddress } from "../../constants";
import { useState, useEffect } from "react";
import {
  useAccount,
  useBalance,
  useContractRead,
  useContractWrite,
} from "wagmi";
import { readContract, waitForTransaction, writeContract } from "wagmi/actions";

const [sellerAddress, setSellerAddress] = useState("");
const [buyerAddress, setBuyerAddress] = useState("");
const [ticketId, setTicketId] = useState();
const [ticketPrice, setTicketPrice] = useState();
const [signature, setSignature] = useState("");
const [loading, setLoading] = useState(false);

const saleData = {
  seller: sellerAddress,
  buyer: buyerAddress,
  tokenId: ticketId,
  price: ticketPrice,
};

export default function DirectTicketSale() {
  setLoading(true);

  const ticketSale = useContractWrite({
    abi: EventixABI,
    address: EventixContractAddress,
    functionName: "ticketSale",
    args: [saleData, signature],
  });
  return (
    <>
      <div>
        <form onSubmit={() => ticketSale()}>
          <input
            type="text"
            onChange={(e) => setSellerAddress(e.target.value)}
          />
          <input
            type="text"
            onChange={(e) => setBuyerAddress(e.target.value)}
          />
          <input type="number" onChange={(e) => setTicketId(e.target.value)} />
          <input
            type="number"
            onChange={(e) => setTicketPrice(e.target.value)}
          />
          <input type="text" onChange={(e) => setSignature(e.target.value)} />
          <button type="submit">Sell</button>
        </form>
      </div>
    </>
  );
}
