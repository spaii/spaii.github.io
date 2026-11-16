import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contact } from "@/data/portfolio";
import { SectionHeading } from "@/sections/SectionHeading";

const rowClass =
  "flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b py-3.5";
const labelClass = "w-24 font-mono text-xs text-muted-foreground";
const valueClass = "min-w-0 flex-1 basis-52 break-all font-medium";
const linkClass = `${valueClass} text-primary underline-offset-4 hover:underline`;

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Jika browser menolak, alamat email tetap tampil sebagai teks yang bisa diblok.
    }
  }

  return (
    <section id="kontak" className="pt-14">
      <SectionHeading title="Contact" path="/kontak" />
      <p className="max-w-[56ch]" data-aos="fade-up">
        {contact.blurb}
      </p>

      <div className="mt-6 border-t" data-aos="fade-up" data-aos-delay="80">
        <div className={rowClass}>
          <span className={labelClass}>Email</span>
          <span className={valueClass}>{contact.email}</span>
          <Button variant="outline" size="sm" onClick={copyEmail}>
            {copied ? <Check /> : <Copy />}
            {copied ? "tersalin" : "salin"}
          </Button>
        </div>
        {contact.whatsapp && (
          <div className={rowClass}>
            <span className={labelClass}>WhatsApp</span>
            <a
              href={contact.whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              {contact.whatsapp.label}
            </a>
          </div>
        )}
        <div className={rowClass}>
          <span className={labelClass}>GitHub</span>
          <a
            href={contact.github.href}
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            {contact.github.label}
          </a>
        </div>
        <div className={rowClass}>
          <span className={labelClass}>LinkedIn</span>
          <a
            href={contact.linkedin.href}
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            {contact.linkedin.label}
          </a>
        </div>
      </div>
    </section>
  );
}
