import React, { useState } from 'react';

interface AccordionProps {
    sections: {
        title: string;
        content: string;
    }[];
}

interface AccordionSectionProps {
    section: {
        title: string;
        content: string;
    };
    isActiveSection: boolean;
    setActiveIndex: (index: number | null) => void;
    sectionIndex: number;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
    section,
    isActiveSection,
    setActiveIndex,
    sectionIndex,
}) => {
    const toggleSection = () => {
        const nextIndex = isActiveSection ? null : sectionIndex;
        setActiveIndex(nextIndex);
    };
    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={toggleSection}>
                <div>{section.title}</div>
                <button className={isActiveSection ? "accordion-button accordion-button-active" : "accordion-button"} type="button"></button>
            </div>
            {isActiveSection && (
                <div className="accordion-content">{section.content}</div>
            )}
        </div>
    );
};

const Accordion: React.FC<AccordionProps> = ({ sections }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <div className="accordion">
            {sections.map((section, index) => (
                <AccordionSection
                    section={section}
                    key={index}
                    isActiveSection={index === activeIndex}
                    setActiveIndex={setActiveIndex}
                    sectionIndex={index}
                />
            ))}
        </div>
    );
};

export default Accordion;
