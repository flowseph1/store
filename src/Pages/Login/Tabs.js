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
    min-width: fit-content;
    border-radius: 8px;
    transition: background-color 0.3s, color 0.3s;
    border: 1px solid rgba(0, 0, 0, 0.2);

    .active {
        background-color: #eeee;
    }
`;

const Tab1 = styled.div`
    z-index: 9999;
    padding: 12px 14px;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    border-radius: 8px 0 8px 8px;

    cursor: pointer;
    color: rgba(0, 0, 0, 0.9);
    transition: box-shadow 0.3s, background-color 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55), color 0.3s ease;

    :hover {
        box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
    }
`;

const Tab2 = styled(Tab1)`
    border-radius: 8px 8px 8px 0;
`;
