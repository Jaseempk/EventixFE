import { EventixABI, EventixContractAddress } from "../../constants";
import { useState, useEffect } from "react";
import {
  useAccount,
  useBalance,
  useContractRead,
  useContractWrite,
} from "wagmi";
import { readContract, waitForTransaction, writeContract } from "wagmi/actions";

function TicketMint() {
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState();
  const [tier, setTier] = useState();
  const [date, setDate] = useState();
  const [daysToEvent, setDaysToEvent] = useState();
  const [address, setAddress] = useState("");
  const [tokenURI, setTokenURI] = useState("");

  const tikcketMintFunc = useContractWrite({
    abi: EventixABI,
    address: EventixContractAddress,
    functionName: "ticketMint",
    args: [price, tier, date, daysToEvent, address, tokenURI],
  });

  return (
    <>
      <div>
        <form onSubmit={() => tikcketMintFunc()}></form>
        <input type="number" onChange={(e) => setPrice(e.target.value)} />
        <input type="number" onChange={(e) => setTier(e.target.value)} />
        <input type="number" onChange={(e) => setDate(e.target.value)} />
        <input type="number" onChange={(e) => setDaysToEvent(e.target.value)} />
        <input type="string" onChange={(e) => setAddress(e.target.value)} />
        <input type="string" onChange={(e) => setTokenURI(e.target.value)} />
        <button type="submit">BookTicket</button>
      </div>
    </>
  );
}

export default TicketMint;
