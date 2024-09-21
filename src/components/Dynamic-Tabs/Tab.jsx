import React, { useState } from 'react';

const Tab = ({ tab, openTab, setOpenTab }) => {
  return (
    <div className='tab' onClick={() =>setOpenTab(tab.id)}>
      <h3 className={openTab===tab.id?'opened':null}>{tab.label}</h3>
      {openTab === tab.id ? <p>{tab.content}</p> : null}
    </div>
  );
};

export default Tab;
