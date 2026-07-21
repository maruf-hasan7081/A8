"use client";

import { Quote, Star } from "lucide-react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { SectionHeading } from "@/components/ui/section-heading";

const testimonials = [
  {
    name: "Nadia Rahman",
    role: "University student",
    quote:
      "The category filter makes finding a useful book incredibly quick. The layout also feels calm and focused.",
  },
  {
    name: "Arafat Hossain",
    role: "Junior developer",
    quote:
      "I found both Clean Code and Eloquent JavaScript in one place. The book details are clear and easy to scan.",
  },
  {
    name: "Samiha Noor",
    role: "Curious reader",
    quote:
      "Leaf & Lore feels like a small independent library translated into a modern digital experience.",
  },
];

export function Testimonials() {
  return (
    <section className="page-shell py-20">
      <SectionHeading
        eyebrow="Reader notes"
        title="A library designed to feel human"
        description="A smooth digital experience should help readers focus on books, not interfaces."
        centered
      />

      <div className="mx-auto mt-10 max-w-4xl">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={24}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          loop
          className="pb-12"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <article className="rounded-[2rem] border border-[#173f35]/10 bg-white p-7 shadow-sm sm:p-10">
                <div className="flex items-center justify-between">
                  <Quote className="size-10 text-[#d99b3d]" aria-hidden="true" />
                  <div className="flex gap-1 text-[#d99b3d]" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="size-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-6 font-display text-2xl leading-relaxed text-[#173f35] sm:text-3xl">
                  “{item.quote}”
                </blockquote>
                <div className="mt-7 border-t border-[#173f35]/10 pt-5">
                  <p className="font-bold text-[#173f35]">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
