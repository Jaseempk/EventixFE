import { EventixABI, EventixContractAddress } from "../../constants";
import { useState, useEffect } from "react";
import {
  useAccount,
  useBalance,
  useContractRead,
  useContractWrite,
} from "wagmi";
import { readContract, waitForTransaction, writeContract } from "wagmi/actions";

export default function TicketMint() {
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState();
  const [tier, setTier] = useState();
  const [date, setDate] = useState();
  const [daysToEvent, setDaysToEvent] = useState();
  const [address, setAddress] = useState();
  const [tokenURI, setTokenURI] = useState("");

  const tikcketMintFunc = useContractWrite({
    abi: EventixABI,
    address: EventixContractAddress,
    functionName: "ticketMint",
    args: [price, tier, date, daysToEvent, address, tokenURI],
  });
}
