"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../../tracing-beam.tsx";

export function TracingBeamDemo() {
    return (
        <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased mt-24 pt-4 relative">
                {dummyContent.map((item, index) => (
                    <div key={`content-${index}`} className="mb-10">
                        <h2 className="bg-purple-600 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                            {item.badge}
                        </h2>

                        <p className="text-xl text-white mb-4">
                            {item.title}
                        </p>

                        <div className="text-sm text-white prose prose-sm dark:prose-invert">
                            {item?.image && (
                                <img
                                    src={item.image}
                                    alt="blog thumbnail"
                                    height="1000"
                                    width="1000"
                                    className="rounded-lg mb-10 object-cover"
                                />
                            )}
                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </TracingBeam>
    );
}


const dummyContent = [
  {
    title: "A Mood Tracker for daily reports",
    description: (
      <>
        <p>
        Recently, I developed a web application on the SafePage platform, specializing in personal development. This application provides users with a secure platform to track and enhance their personal growth. It offers various tools such as goal management, habit tracking, and planning for personal development activities. SafePage thus provides a friendly and secure environment to support users on their journey towards personal fulfillment.
        </p>
        <p>
        Additionally, in the future, the Moov'Page application will be accessible on mobile platforms once I have mastered Swift, React Native, and Kotlin for
        mobile app development.
        </p>
        
      </>
    ),
    badge: "Moov'Page",
    image:
      require("./images/capt5SafePagePresent.png"),
  },
  {
    title: "Creating Articles for the productivity of the user",
    description: (
      <>
        <p>
        Within the SafePage platform, I'm also involved in creating productivity-focused articles for users. These articles aim to provide practical tips and proven strategies to help users enhance their efficiency and organization in their daily lives. Collaborating closely with SafePage's editorial team, I strive to produce relevant and engaging content that addresses the needs and challenges of our user community, assisting them in reaching their goals and maximizing their potential.
        </p>
       
      </>
    ),
    badge: "Blog",
    image:
      require("./images/capt3ArticleSagePagePresent.png"),
  },
  {
    title: "An evolving project",
    description: (
      <>
        <p>
        SafePage is an evolving project that I am currently working on. I am continuously exploring new features and functionalities to enhance the user experience and provide a more comprehensive platform for personal development. By collaborating with other team members and incorporating user feedback, I aim to create a dynamic and user-friendly environment that empowers users to achieve their personal growth goals effectively.
        </p>
      </>
    ),
    badge: "Remaster",
    image:
      require('./images/capt4SafePagePresent.png'),
  },
];
