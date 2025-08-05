const mainContent = () => {
  // For search bar shadow on hover
  const handleSearchBarMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.add("search-bar-hover");
  };
  const handleSearchBarMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove("search-bar-hover");
  };

  // For customize button hover
  const handleCustomizeMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.add("customize-btn-hover");
  };
  const handleCustomizeMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove("customize-btn-hover");
  };

  return (
    <div className="main-root">
      {/* Top Bar */}
      <div className="top-bar">
        <span>Gmail</span>
        <span>Images</span>
        <div className="top-bar-apps">
          <img width="16" height="16" src="public\dots.svg" alt="Apps" />
        </div>
        <div className="top-bar-avatar">G</div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Google Logo */}
        <img
          className="logo"
          src="public\logo.png"
          alt="Google Logo"
        />

        {/* Search Bar */}
        <div className="search-bar-container">
          <div
            className="search-bar"
            onMouseEnter={handleSearchBarMouseEnter}
            onMouseLeave={handleSearchBarMouseLeave}
          >
            <div className="search-bar-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="4"
                stroke="#9AA0A6"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search Google or type a URL"
              className="search-bar-input"
            />
            <div className="search-bar-actions">
              <div className="search-bar-action-btn">
                <img src="public\mic.svg" alt="Search" />
              </div>
              <div className="search-bar-action-btn">
                <img src="public\lens.svg" alt="Search" />
              </div>
            </div>
          </div>
        </div>

        {/* Shortcuts */}
        <div className="shortcuts">
          {/* Add Shortcut Button */}
          <div className="shortcut-add">
            <div className="shortcut-add-icon">+</div>
            <span className="shortcut-add-label">Add shortcut</span>
          </div>
        </div>
      </div>

      {/* Bottom Right Customize Button */}
      <div
        className="customize-btn"
        onMouseEnter={handleCustomizeMouseEnter}
        onMouseLeave={handleCustomizeMouseLeave}
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="#E8EAED">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        Customise Chrome
      </div>
    </div>
  );
};

export default mainContent;
