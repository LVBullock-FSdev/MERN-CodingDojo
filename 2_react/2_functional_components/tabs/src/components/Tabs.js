import React, { useState } from 'react';

const Tabs = (props) => {
    console.log(props);
    const [selectedTab, setSelectedTab] = useState(0);  //0 is default value for selectedTab
    return (
        <div id="container">

            <div id="header">
                <h1>Tabs Assignment</h1>
                    {props.tabButtons.map((tab, i) =>{

                        const tabButtonStyles = {
                            padding: "20px", 
                            marginRight: "10px", 
                            border: "1px solid gray"
                        }

                        if (selectedTab === i) {
                            tabButtonStyles.backgroundColor = "purple";
                            tabButtonStyles.color = "white";
                        }

                        return (
                            <span 
                            key={i}
                                onClick={(event) =>{
                                    setSelectedTab(i);
                                    props.tabButtons[i].callback();
                                }}

                                style={tabButtonStyles}>

                                    {tab.label}
                            </span>
                        );
                    })}
            </div>

            <div id="main">
                <h3>{ props.tabButtons[selectedTab].content }</h3>
            </div>

        </div>
    );
};

export default Tabs;