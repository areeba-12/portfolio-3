import React from "react";
import Image from "next/image";
import { CalendarIcon } from "@heroicons/react/20/solid";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

const BlogCards = ({ comment, image, title, date }: BlogCards) => {
  return (
    <>
      <div className="blogCards-wrapper">
        <div className="">
          <Image
            src={`${image}`}
            alt="blog"
            width={300}
            height={300}
            className="blogCards-image"
          />
        </div>
        <div className="blogCards-content">
          <div className="blogCards-calender-wrapper">
            <CalendarIcon className="blogCards-calender-icon" />

            <p className="blogCards-date">{date}</p>
          </div>
          <h1 className="blogCards-title">{title}</h1>
          <div className="blogCards-bottom-content">
            <div className="blogCards-chat-wrapper">
              <ChatBubbleLeftRightIcon className="blogCards-chat-icon" />
              <p className="blogCards-comments">{comment} Comments</p>
            </div>
            <button className="blogCards-button">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCards;
