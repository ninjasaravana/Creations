import React, { useEffect, useState } from "react";
import InfiniteScrollWithLibrary from "./InfiniteScrollWithLibrary";
import InfiniteScrollCustom from "./InfiniteScrollCustom";
import InfiniteScrollTableWithLibrary from "./InfiniteScrollTableWithLibrary";
import InfiniteScrollTableCustom from "./InfiniteScrollTableCustom";

const InfiniteScrollMain: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [tableHeight, setTableHeight] = useState(0);

  const tabs = [
    "Infinite Scroll (with Library)",
    "Infinite Scroll (Custom)",
    "Infinite Scroll Table (with Library)",
    "Infinite Scroll Table (without Library)",
  ];

  useEffect(() => {
    function updateHeight() {
      const headerHeight =
        document.getElementById("headerArea")?.offsetHeight || 0;
      setTableHeight(window.innerHeight - headerHeight - 60); // padding
    }
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div
      style={{
        margin: "20px",
        // height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div id='headerArea' style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Infinite Scroll Examples
        </h1>

        {/* Tab Navigation */}
        <div
          id='tabNavigation'
          style={{
            display: "flex",
            borderBottom: "2px solid #ddd",
            marginBottom: "20px",
            flexShrink: 0,
          }}
        >
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              style={{
                padding: "12px 16px",
                border: "none",
                backgroundColor: activeTab === index ? "#007bff" : "#f8f9fa",
                color: activeTab === index ? "white" : "#333",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: activeTab === index ? "bold" : "normal",
                borderRight:
                  index < tabs.length - 1 ? "1px solid #ddd" : "none",
                whiteSpace: "nowrap",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      {/* Tab Content */}
      <div
        style={{
          height: tableHeight,
          maxHeight: tableHeight,
          overflow: "hidden",
        }}
      >
        {activeTab === 0 && <InfiniteScrollWithLibrary />}
        {activeTab === 1 && <InfiniteScrollCustom />}
        {activeTab === 2 && <InfiniteScrollTableWithLibrary />}
        {activeTab === 3 && <InfiniteScrollTableCustom />}
      </div>
    </div>
  );
};

export default InfiniteScrollMain;
