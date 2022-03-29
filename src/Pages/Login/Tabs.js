import React from 'react';
import styled from 'styled-components';

function Tabs({ selectedTab, setSelectedTab }) {
    return (
        <TabContainer>
            <Tab1 className={selectedTab ? 'active' : ''} onClick={() => setSelectedTab(true)}>
                Acceso
            </Tab1>
            <Tab2 className={!selectedTab ? 'active' : ''} onClick={() => setSelectedTab(false)}>
                Registro
            </Tab2>
        </TabContainer>
    );
}

export default Tabs;

const TabContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 18px;
    width: 20%;
    min-width: 214px;
    transition: background-color 0.3s, color 0.3s;

    .active {
        background-color: ${process.env.REACT_APP_SECONDARY_COLOR};
        color: white;
    }
`;

const Tab1 = styled.div`
    z-index: 9999;
    padding: 12px 14px;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    margin-right: 2px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.9);
    transition: box-shadow 0.3s, background-color 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55), color 0.3s ease;

    :hover {
        box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
    }
`;

const Tab2 = styled(Tab1)`
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
`;
