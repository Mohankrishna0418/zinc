"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="progress-loader">
        <div className="progress" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .progress-loader {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .progress-loader {
    width: 343px;
    background: rgba(255, 255, 255, 0.2);
    height: 5px;
    border-radius: 7px;
  }

  .progress {
    content: "";
    width: 1px;
    height: 5px;
    border-radius: 7px;
    background: rgb(144, 75, 246);
    transition: 0.5s;
    animation: loading1274 2s ease infinite;
  }

  @keyframes loading1274 {
    0% {
      width: 0%;
    }

    10% {
      width: 10%;
    }

    50% {
      width: 40%;
    }

    60% {
      width: 60%;
    }

    100% {
      width: 100%;
    }
  }
`;

interface LoadingProviderProps {
  children: React.ReactNode;
}

const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : children;
};

export default LoadingProvider;