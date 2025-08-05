import { useState, useRef } from "react";
import TabComponent from "./Tabs";

const ChromeTabBar = () => {
  const [tabs, setTabs] = useState([
    { id: 1, title: "New Tab", isActive: true },
  ]);
  const [nextId, setNextId] = useState(2);
  const tabsContainerRef = useRef(null);

  const addTab = () => {
    const newTab = {
      id: nextId,
      title: "New Tab",
      isActive: false,
    };

    setTabs((prevTabs) => {
      const updatedTabs = prevTabs.map((tab) => ({ ...tab, isActive: false }));
      return [...updatedTabs, { ...newTab, isActive: true }];
    });
    setNextId(nextId + 1);
  };

  const closeTab = (tabId: any, e: any) => {
    e.stopPropagation();
    if (tabs.length === 1) return; // Do nothing if only 1 tab

    setTabs((prevTabs) => {
      const tabIndex = prevTabs.findIndex((tab) => tab.id === tabId);
      const wasActive = prevTabs[tabIndex].isActive;
      const newTabs = prevTabs.filter((tab) => tab.id !== tabId);

      // If closed tab was active, make adjacent tab active
      if (wasActive && newTabs.length > 0) {
        const newActiveIndex = Math.min(tabIndex, newTabs.length - 1);
        newTabs[newActiveIndex].isActive = true;
      }

      return newTabs;
    });
  };

  const activateTab = (tabId: any) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) => ({
        ...tab,
        isActive: tab.id === tabId,
      }))
    );
  };

  return (
    <div className="root">
      <div className="title-bar">
        {/* Tab Bar */}
        <div className="tab-bar">
          <div ref={tabsContainerRef} className="tabs-container">
            {tabs.map((tab, index) => (
              <TabComponent key={tab.id} tab={tab} index={index} tabs={tabs} activateTab={activateTab} closeTab={closeTab} />
            ))}
          </div>
          {/* Add Tab Button */}
          <div
            className="add-tab"
            onClick={addTab}
            onMouseEnter={(e) => {
              e.currentTarget.classList.add("hovered");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove("hovered");
            }}
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="#9AA0A6">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </div>
        </div>
        {/* Window Controls */}
        <div className="window-controls">
          <div className="window-control">−</div>
          <div className="window-control">⧠</div>
          <div className="window-control">✕</div>
        </div>
      </div>
      {/* Address Bar */}
      <div className="address-bar">
        {/* Navigation Buttons */}
        <div className="nav-buttons">
          <button className="nav-btn nav-btn-left"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg></button>
          <button className="nav-btn nav-btn-right"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg></button>
          <button className="nav-btn nav-btn-reload"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 640"><path d="M500.7 138.7L512 149.4L512 96C512 78.3 526.3 64 544 64C561.7 64 576 78.3 576 96L576 224C576 241.7 561.7 256 544 256L416 256C398.3 256 384 241.7 384 224C384 206.3 398.3 192 416 192L463.9 192L456.3 184.8C456.1 184.6 455.9 184.4 455.7 184.2C380.7 109.2 259.2 109.2 184.2 184.2C109.2 259.2 109.2 380.7 184.2 455.7C259.2 530.7 380.7 530.7 455.7 455.7C463.9 447.5 471.2 438.8 477.6 429.6C487.7 415.1 507.7 411.6 522.2 421.7C536.7 431.8 540.2 451.8 530.1 466.3C521.6 478.5 511.9 490.1 501 501C401 601 238.9 601 139 501C39.1 401 39 239 139 139C238.9 39.1 400.7 39 500.7 138.7z"/></svg></button>
        </div>
        {/* Address Bar Input */}
        <div className="address-input-container">
          <div className="address-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search Google or type a URL"
            className="address-input"
          />
          <button className="address-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </button>
        </div>
        {/* Right Controls */}
        <div className="address-right-controls">
          <button className="address-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </button>
          <div className="address-avatar">G</div>
          <button className="address-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 640 640" stroke-width="1.5" stroke="currentColor" className="size-6"><path d="M320 208C289.1 208 264 182.9 264 152C264 121.1 289.1 96 320 96C350.9 96 376 121.1 376 152C376 182.9 350.9 208 320 208zM320 432C350.9 432 376 457.1 376 488C376 518.9 350.9 544 320 544C289.1 544 264 518.9 264 488C264 457.1 289.1 432 320 432zM376 320C376 350.9 350.9 376 320 376C289.1 376 264 350.9 264 320C264 289.1 289.1 264 320 264C350.9 264 376 289.1 376 320z"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChromeTabBar;
