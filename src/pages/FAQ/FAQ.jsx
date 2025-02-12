import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import faqImage from '../../assets/FAQs-amico.png'
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
                    </ul>
                </>
            )
        },
        {
            question: "Can I create and host my own marathon on Milescape?",
            answer:
                "Of course! If you're an event organizer looking to host a marathon, Milescape provides a streamlined process to create, customize, and manage your event efficiently. From setting up registration forms to tracking participants and handling payments, we offer a full suite of tools to ensure your marathon is a success."
        },
        {
            question: "How secure is my data on Milescape?",
            answer:
                "We take data security seriously. Milescape follows industry-leading encryption standards to protect your personal and payment information. Our platform ensures a secure transaction process and maintains strict privacy policies to safeguard user data."
        },
    ];

    return (
        <div className="bg-white dark:bg-[#1A1A1A] pt-5 md:pt-10">
            <div className="w-[90%] mx-auto max-w-7xl pb-16">
                <div className="w-full max-w-4xl mx-auto text-center">
                    <Fade direction="up" triggerOnce duration={1000}>
                        <div className='pt-3 mb-5 md:pt-5 md:pb-2'>
                            <Header title='Learn More!' subTitle='Frequently Asked Questions' />
                        </div>
                    </Fade>
                </div>

                <div className="flex flex-col lg:flex-row  gap-4">
                    {/* FAQ Image */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <img className="w-[60%] md:w-[50%] lg:w-4/5" src={faqImage} alt="FAQ Illustration" />
                    </div>

                    {/* Accordion Section */}
                    <div className="w-full md:w-[90%] lg:w-1/2 mx-auto">
                        <Fade cascade triggerOnce>
                            <div className="mt-2 lg:mt-0 bg-gradient-to-tr from-blue-50 to-blue-100 dark:from-[#262626] dark:to-[#1E1E1E] shadow-2xl rounded-lg flex-grow">
                                <Accordion allowZeroExpanded className="w-full p-5 lg:p-8 mx-auto overflow-hidden">
                                    {faqs.map((faq, index) => (
                                        <AccordionItem key={index} className="border-b border-gray-600 rounded-lg mb-2">
                                            <AccordionItemHeading>
                                                <AccordionItemButton
                                                    className="text-lg font-semibold flex border-[1px] border-transparent justify-between items-center p-5 bg-white dark:bg-[#1A1A1A] hover:bg-blue-100 hover:dark:bg-[#3E3E3E] hover:border-blue-500 hover:dark:border-white transition-all duration-300 cursor-pointer rounded-lg shadow-md"
                                                    onClick={() => toggleAccordion(index)}
                                                >
                                                    <span className="text-gray-900 dark:text-white text-sm md:text-base">{faq.question}</span>
                                                    <FaChevronDown
                                                        className={`text-gray-300 text-sm md:text-base ${activeIndex === index ? "rotate-180" : ""}`}
                                                    />
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <Fade direction="up" triggerOnce>
                                                <AccordionItemPanel
                                                    className="text-gray-800 dark:text-gray-300 p-4 transition-all duration-300 bg-blue-200 dark:bg-[#2A2A2A] border-l-4 border-blue-500 rounded-lg"
                                                >
                                                    <p className="leading-relaxed text-sm md:text-base">{faq.answer}</p>
                                                </AccordionItemPanel>
                                            </Fade>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
