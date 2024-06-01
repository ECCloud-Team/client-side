import React from 'react';

const CircularProgress = ({ percentage }) => {
    const radius = 50;
    const stroke = 10;
    const normalizedRadius = radius - stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <svg
            height={radius * 2}
            width={radius * 2}
            className="circular-chart"
        >
            <circle
                stroke="lightgrey"
                fill="transparent"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            <circle
                stroke="blue"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={circumference + ' ' + circumference}
                style={{ strokeDashoffset }}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="20px"
                fontWeight="bold"
                fill="black"
            >
                {`${percentage}%`}
            </text>
        </svg>
    );
};

export default CircularProgress;
