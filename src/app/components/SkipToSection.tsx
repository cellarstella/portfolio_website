import Link from "next/link";
import React from "react";

export default function SkipToSection({ sectionId, children }: { sectionId: string; children: React.ReactNode }) {
  return (
    <Link href={`#${sectionId}`}>
      {children}
    </Link>
  );
}