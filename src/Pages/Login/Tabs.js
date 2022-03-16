import React from 'react';
import styled from 'styled-components';

function Tabs({ selectedTab, setSelectedTab }) {
    return (
        <TabContainer>
            <Tab1 className={selectedTab === 1 || selectedTab === 0 ? 'active' : ''} onClick={() => setSelectedTab(1)}>
                Acceso
            </Tab1>
            <Tab2 className={selectedTab === 2 ? 'active' : ''} onClick={() => setSelectedTab(2)}>
                Registro
            </Tab2>
        </TabContainer>
    );
}

export default Tabs;

const TabContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 15px;
    width: 20%;
    min-width: 214px;

    .active {
        background-color: ${process.env.REACT_APP_SECONDARY_COLOR};
        color: white;
    }
`;

const Tab1 = styled.div`
    padding: 10px 12px;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    margin-right: 2px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.7);

    transition: box-shadow 0.1s, background-color 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55), color 0.3s ease;

    :hover {
        box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.8);
    }
`;

const Tab2 = styled(Tab1)`
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
`;
