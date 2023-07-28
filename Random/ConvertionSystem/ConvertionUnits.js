const ConvertionUnits = {
    KM: {
        KM: 1,
        HM: 1e1,
        DCAM: 1e2,
        M: 1e3,
        DM: 1e4,
        CM: 1e5,
        MM: 1e6,
        label: "Kilometros",
    },

    HM: {
        KM: 1e-1,
        HM: 1,
        DCAM: 1e1,
        M: 1e2,
        DM: 1e3,
        CM: 1e4,
        MM: 1e5,
        label: "Hectometros",
    },

    DCAM: {
        KM: 1e-2,
        HM: 1e-1,
        DCAM: 1,
        M: 1e1,
        DM: 1e2,
        CM: 1e3,
        MM: 1e4,
        label: "Decametros",
    },

    M: {
        KM: 1e-3,
        HM: 1e-2,
        DCAM: 1e-1,
        M: 1,
        DM: 1e1,
        CM: 1e2,
        MM: 1e3,
        label: "Metros",
    },

    DM: {
        KM: 1e-4,
        HM: 1e-3,
        DCAM: 1e-2,
        M: 1e-1,
        DM: 1,
        CM: 1e1,
        MM: 1e2,
        label: "Decimetros",
    },

    CM: {
        KM: 1e-5,
        HM: 1e-4,
        DCAM: 1e-3,
        M: 1e-2,
        DM: 1e-1,
        CM: 1,
        MM: 1e1,
        label: "Centimetros",
    },

    MM: {
        KM: 1e-6,
        HM: 1e-5,
        DCAM: 1e-4,
        M: 1e-3,
        DM: 1e-2,
        CM: 1e-1,
        MM: 1,
        label: "Milimetros",
    },
};

const convertionRates = ({ initialUnit, targetUnit }) => {
    return ConvertionUnits[initialUnit][targetUnit];
};

export { ConvertionUnits, convertionRates };
