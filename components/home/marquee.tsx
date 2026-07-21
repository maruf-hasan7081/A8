const message =
  "New Arrivals: The Midnight Library | Special Discount on Memberships | Explore Story, Tech & Science | Borrow Your Next Favourite Book";

export function Marquee() {
  return (
    <div className="marquee overflow-hidden border-y border-[#d99b3d]/30 bg-[#fff4d9] py-3 text-sm font-bold text-[#70480d]">
      <div className="marquee-track" aria-label={message}>
        {[0, 1].map((copy) => (
          <span key={copy} className="px-6">
            {message}
            <span className="px-6" aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
