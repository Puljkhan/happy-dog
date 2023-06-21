import React, { useState, useEffect } from "react";

type ProgressBarProps = {
  progress: number;
  onFinish?: () => void;
};

const ProgressBar = ({ progress }: ProgressBarProps) => {
  const handleState = (progress: number) => {
    if (progress < 100) {
      return "active";
    }
    if (progress === 100) {
      return "success";
    }
  };

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <div className="progress-value">{progress}</div>
    </div>
  );
};

export default ProgressBar;
