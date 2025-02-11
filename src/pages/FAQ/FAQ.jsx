import React, { useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import { Fade, Slide } from "react-awesome-reveal";
import "react-accessible-accordion/dist/fancy-example.css"; // Accordion styling
import Header from "../../components/shared/Header";

const FAQ = () => {
    useEffect(() => {
        document.title = `Frequently Asked Questions | Milescape`;
    }, [])
    const faqs = [
        {
            question: "What is Milescape?",
            answer:
                "Milescape is a marathon management platform that connects event organizers and runners to create seamless and inspiring marathon experiences.",
        },
        {
            question: "How do I register for a marathon?",
            answer:
                "You can browse upcoming events on our platform, choose your desired marathon, and register directly through the event page with a few clicks.",
        },
        {
            question: "Is Milescape free to use?",
            answer:
                "Milescape is free for runners to explore and join marathons. Event organizers can use our free tools or opt for premium features for added benefits.",
        },
        {
            question: "Can I track my marathon performance?",
            answer:
                "Yes! Milescape provides real-time tracking and detailed performance analytics, helping you measure and improve your results over time.",
        },
        {
            question: "How do event organizers benefit from Milescape?",
            answer:
                "Organizers can easily manage events, track participant data, and streamline registrations, saving time and ensuring smooth operations.",
        },
    ];

    return (
        <div className="w-[95%] md:w-[90%] mx-auto max-w-7xl mb-5 md:mb-10 lg:mb-16">
            <div className="w-full max-w-4xl mx-auto text-center">

                <Fade direction="up" triggerOnce duration={2000}>
                    <div className='mt-3 mb-5 md:mt-5 md:mb-10 lg:mb-14'>
                        <Header title='Learn More!' subTitle='Frequently Asked Questions'></Header>
                    </div>
                </Fade>
                <p className="text-lg text-gray-700 mb-10">
                    Have questions about Milescape? We've got answers! Explore our FAQs below to find the information you need.
                </p>
            </div>
            <Slide direction="up" triggerOnce>
                <Accordion allowZeroExpanded className="bg-white shadow-lg rounded-lg overflow-hidden">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            className="border-b border-gray-200"
                        >
                            <AccordionItemHeading>
                                <AccordionItemButton className="text-lg font-semibold flex justify-between items-center p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                                    {faq.question}
                                    <FaChevronDown className="text-blue-600" />
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className="text-gray-700 px-4 pb-4">
                                <p>{faq.answer}</p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Slide>
        </div>
    );
};

export default FAQ;
