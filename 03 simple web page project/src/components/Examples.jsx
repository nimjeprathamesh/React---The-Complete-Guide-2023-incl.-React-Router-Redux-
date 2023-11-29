import { useState } from 'react';
import { EXAMPLES } from '../data.jsx';
import Section from './Section.jsx';
import TabButton from './TabButton.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {
    const [selectedTopic, setSelectedTopic]= useState();

    function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>;

    if (selectedTopic && EXAMPLES[selectedTopic.toLowerCase()]) {
        const topic = EXAMPLES[selectedTopic.toLowerCase()];
        tabContent = (<div id = "tab-content">
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
            <pre>
                <code>
                    {topic.code}
                </code>
            </pre>
            </div>
        );
    }
    
    return (
        <Section title="Examples" id='examples'>
            <Tabs
                buttons={
                <>
                    <TabButton
                    isSelected = {selectedTopic === 'Components'}
                    onClick = {() => handleClick('Components')}
                    >
                        Components
                    </TabButton>
                    <TabButton
                        isSelected = {selectedTopic === 'JSX'}
                        onClick = {() => handleClick('JSX') }
                    >
                        JSX
                    </TabButton>
                    <TabButton
                        isSelected = {selectedTopic === 'Props'}
                        onClick = {() => handleClick('Props')}
                    >
                        Props
                    </TabButton>
                    <TabButton
                        isSelected = {selectedTopic === 'State'}
                        onClick = {() => handleClick('State')}
                    >
                        State
                    </TabButton>
                </>
            }
        >
            {tabContent}
        </Tabs>
        </Section>
    );
}