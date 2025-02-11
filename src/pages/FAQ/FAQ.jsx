import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from "react-accessible-accordion";
import { Fade } from "react-awesome-reveal";
import Header from "../../components/shared/Header";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is Milescape, and how does it work?",
            answer:
                "Milescape is an all-in-one marathon management platform designed to connect event organizers and runners, ensuring seamless event planning, registration, and performance tracking. Whether you're an organizer looking to streamline marathon logistics or a runner searching for the perfect challenge, Milescape provides a user-friendly experience to make your journey effortless and enjoyable."
        },
        {
            question: "How can I register for a marathon through Milescape?",
            answer:
                "Registering for a marathon on Milescape is quick and hassle-free. Simply browse through our curated list of upcoming marathons, select your preferred event, and complete the registration in just a few clicks. Our platform ensures a secure and smooth registration process, providing instant confirmation and event details."
        },
        {
            question: "Is Milescape free to use for runners and event organizers?",
            answer:
                "For runners, Milescape is entirely free, allowing them to explore events, register, and access essential race information. Event organizers can also use our free tools to manage marathons effectively. However, we offer premium features—such as advanced analytics, priority listing, and promotional tools—to help organizers maximize their event’s reach and efficiency."
        },
        {
            question: "Can I track my marathon performance using Milescape?",
            answer:
                "Absolutely! Milescape provides real-time performance tracking and post-race analytics, allowing you to monitor key metrics such as pace, distance, completion time, and personal progress. Our intuitive dashboard helps runners set goals, compare past performances, and continuously improve their endurance and speed."
        },
        {
            question: "What benefits do event organizers get from using Milescape?",
            answer: (
                <>
                    Event organizers gain access to a comprehensive set of tools for managing marathons efficiently, including:
                    <ul className="list-disc ml-5 mt-2">
                        <li><strong>Seamless registration system</strong> – Automate participant sign-ups and manage entries effortlessly.</li>
                        <li><strong>Real-time tracking & analytics</strong> – Monitor participant progress and overall event performance.</li>
                        <li><strong>Marketing & promotion tools</strong> – Increase event visibility through our platform’s network.</li>
                        <li><strong>Data management & insights</strong> – Get detailed reports on participant demographics and feedback for better planning in future events.</li>
                    </ul>
                </>
            )
        },
        {
            question: "Does Milescape offer customer support for runners and organizers?",
            answer:
                "Yes, we prioritize user satisfaction with dedicated customer support available for both runners and organizers. Whether you need assistance with registration, event management, or technical support, our team is ready to help via live chat, email, and phone support."
        },
        {
            question: "Can I create and host my own marathon on Milescape?",
            answer:
                "Of course! If you're an event organizer looking to host a marathon, Milescape provides a streamlined process to create, customize, and manage your event efficiently. From setting up registration forms to tracking participants and handling payments, we offer a full suite of tools to ensure your marathon is a success."
        },
        {
            question: "Does Milescape support virtual marathons?",
            answer:
                "Yes, Milescape supports both physical and virtual marathons. Virtual marathon participants can register, complete their runs at their own pace from anywhere, and submit their results through our tracking system. Organizers can engage global participants with leaderboards, digital certificates, and exclusive rewards."
        },
        {
            question: "How secure is my data on Milescape?",
            answer:
                "We take data security seriously. Milescape follows industry-leading encryption standards to protect your personal and payment information. Our platform ensures a secure transaction process and maintains strict privacy policies to safeguard user data."
        },
        {
            question: "How can I stay updated about upcoming marathons?",
            answer:
                "To stay informed about upcoming marathons, sign up for our newsletter or follow us on social media. Milescape also allows users to set event alerts, so you never miss out on registration deadlines or exciting race opportunities."
        }
    ];

    return (
        <div className="w-[90%]  mx-auto max-w-7xl mb-16 ">
            <div className="w-full max-w-4xl mx-auto text-center">
                <Fade direction="up" triggerOnce duration={1000}>
                    <div className='mt-3 mb-5 md:mt-5 md:mb-10 lg:mb-14'>
                        <Header title='Learn More!' subTitle='Frequently Asked Questions' />
                    </div>
                </Fade>
            </div>

            <Fade direction="up" cascade triggerOnce >
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 shadow-2xl rounded-lg">
                    <Accordion allowZeroExpanded className="w-full p-5 lg:p-8 mx-auto overflow-hidden">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} className="border-b border-blue-200 rounded-lg mb-2">
                                <AccordionItemHeading>
                                    <AccordionItemButton
                                        className="text-lg font-semibold flex border-[1px] border-white justify-between items-center p-5 bg-white hover:bg-blue-100 hover:border-blue-600 transition-all duration-300 cursor-pointer rounded-lg shadow-md"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <span className="text-blue-900">{index + 1}. {faq.question}</span>
                                        <FaChevronDown
                                            className={`text-blue-900 ${activeIndex === index ? "rotate-180" : ""}`}
                                        />
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <Fade direction="up" triggerOnce>
                                    <AccordionItemPanel
                                        className="text-gray-700 p-4 transition-all duration-300 bg-blue-50 border-l-4 border-blue-400 rounded-lg"
                                    >
                                        <p className="leading-relaxed">{faq.answer}</p>
                                    </AccordionItemPanel>
                                </Fade>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </Fade>
        </div>
    );
};

export default FAQ;
