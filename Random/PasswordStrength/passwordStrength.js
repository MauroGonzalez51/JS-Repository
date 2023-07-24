const passwordStrength = {
    VERY_WEAK: {
        color: "#E10C0C",
        value: 20,
        label: "very veak",
        classLabel: "strong-red",
    },

    WEAK: {
        color: "#E84407",
        value: 40,
        label: "weak",
        classLabel: "red",
    },

    MEDIUM: {
        color: "#F0EE3D",
        value: 60,
        label: "medium",
        classLabel: "yellow",
    },

    STRONG: {
        color: "#39DD0D",
        value: 80,
        label: "strong",
        classLabel: "green",
    },

    VERY_STRONG: {
        color: "#0BD814",
        value: 100,
        label: "very strong",
        classLabel: "strong-green",
    },
};

export default passwordStrength;
