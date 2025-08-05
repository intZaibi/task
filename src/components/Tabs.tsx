export default function TabComponent ({ tab, index, tabs, activateTab, closeTab }: any) {
    return (
    <div
      className={`tab${tab.isActive ? " active" : ""}${
        index === tabs.length - 1 && tabs.length > 1 ? " slide-in" : ""
      }`}
      onClick={() => activateTab(tab.id)}
      onMouseEnter={(e) => {
        if (!tab.isActive) {
          e.currentTarget.classList.add("hovered");
        }
      }}
      onMouseLeave={(e) => {
        if (!tab.isActive) {
          e.currentTarget.classList.remove("hovered");
        }
      }}
    >
      {/* Tab Content */}
      <div className="tab-content">
        <div className="tab-icon-container">
          <div className="tab-icon-bg">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="#9AA0A6">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>
        </div>
        {/* Tab Title */}
        <span className={`tab-title${tab.isActive ? " active" : ""}`}>
          {tab.title}
        </span>
      </div>
      {/* Close Button */}
      <div
        className={`tab-close${tabs.length === 1 ? " disabled" : ""}`}
        onClick={(e) => closeTab(tab.id, e)}
        onMouseEnter={(e) => {
          if (tabs.length > 1) {
            e.currentTarget.classList.add("hovered");
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.classList.remove("hovered");
        }}
      >
        <svg viewBox="0 0 24 24" width="12" height="12" fill="#9AA0A6">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </div>
    </div>
  );
}