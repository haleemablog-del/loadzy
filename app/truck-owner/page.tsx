import type { Metadata } from "next";
import TruckOwnerClient from "./TruckOwnerClient";

export const metadata: Metadata = {
  title: "Truck Owners & Drivers | Find Loads | LOADZY",
  description:
    "Find available truck loads and transport opportunities with LOADZY. Connect with loads across South India and keep your truck moving.",
};

export default function TruckOwnerPage() {
  return <TruckOwnerClient />;
}