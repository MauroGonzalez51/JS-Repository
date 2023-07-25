const passwordStrength = {
    VERY_WEAK: {
        color: "#E10C0C",
        label: "very veak",
        classLabel: "strong-red",
    },

    WEAK: {
        color: "#E84407",
        label: "weak",
        classLabel: "red",
    },

    MEDIUM: {
        color: "#F0EE3D",
        label: "medium",
        classLabel: "yellow",
    },

    DECENT: {
        color: "#ABE74E",
        label: "decent",
        classLabel: "light-green",
    },

    STRONG: {
        color: "#39DD0D",
        label: "strong",
        classLabel: "green",
    },

    VERY_STRONG: {
        color: "#0BD814",
        label: "very strong",
        classLabel: "strong-green",
    },
};

let valuePerRule = 100 / Object.entries(passwordStrength).length;

const modifiedPasswordStrength = Object.values(passwordStrength).map((item, index) => {
    return { ...item, value: valuePerRule * (index + 1) };
});

export { modifiedPasswordStrength, valuePerRule };
