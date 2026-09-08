import { Metadata } from "next";
import TeamMemberClient from "../../TeamMemberClient";

export const metadata: Metadata = {
  title: "Dolly Bavarva - Co-Founder | Skill Sphere",
  description: "Learn more about Dolly Bavarva, Co-Founder at Skill Sphere.",
};

export default function Page() {
  return <TeamMemberClient slug="dolly-bavarva" />;
}
