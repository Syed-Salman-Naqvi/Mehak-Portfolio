"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`,
    );
    window.location.href = `mailto:tamseelfatima20@gmail.com?subject=${subject}&body=${body}`;
    setStatus("Your email app will open with this message ready to send.");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="ornament mb-2 block">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full border border-gold-soft bg-parchment px-4 py-3 text-ink outline-none focus:border-gold"
        />
      </div>
      <div>
        <label htmlFor="email" className="ornament mb-2 block">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border border-gold-soft bg-parchment px-4 py-3 text-ink outline-none focus:border-gold"
        />
      </div>
      <div>
        <label htmlFor="message" className="ornament mb-2 block">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full resize-y border border-gold-soft bg-parchment px-4 py-3 text-ink outline-none focus:border-gold"
        />
      </div>
      <button
        type="submit"
        className="border border-forest bg-forest px-6 py-3 text-[0.75rem] tracking-[0.22em] uppercase text-parchment transition-colors hover:bg-moss"
      >
        Send a message
      </button>
      {status ? <p className="text-sm text-sage">{status}</p> : null}
    </form>
  );
}
