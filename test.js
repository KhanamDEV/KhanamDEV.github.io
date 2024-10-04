let data = [
    {
        "id": 1506391,
        "accommodation": "RV Indochine II",
        "accommodationType": "TWIN ROOM WITH 1 SPARE BED",
        "startDate": "2025-09-11",
    },
    {
        "id": 1506693,
        "accommodation": "RV Indochine II",
        "accommodationType": "TWIN ROOM WITH 1 SPARE BED",
        "startDate": "2026-01-17",
    },
    {
        "id": 1507290,
        "accommodation": "RV Indochine II",
        "accommodationType": "Upper deck 2 beds with small terrace",
        "startDate": "2025-10-29",
    },
    {
        "id": 1507291,
        "accommodation": "RV Indochine II",
        "accommodationType": "Upper deck 2 beds with small terrace",
        "startDate": "2025-09-11",
    },
    {
        "id": 1507890,
        "accommodation": "RV Indochine",
        "accommodationType": "Upper deck 2 beds",
        "startDate": "2025-01-13",
    },
    {
        "id": 1508788,
        "accommodation": "RV Indochine",
        "accommodationType": "Upper deck 2 beds",
        "startDate": "2025-10-08",
    },
    {
        "id": 1509989,
        "accommodation": "RV Indochine II",
        "accommodationType": "Main deck 2 beds",
        "startDate": "2026-01-17",
    },
    {
        "id": 1509990,
        "accommodation": "RV Indochine II",
        "accommodationType": "Upper deck 2 beds",
        "startDate": "2025-10-29",
    },
    {
        "id": 1510294,
        "accommodation": "RV Indochine II",
        "accommodationType": "Upper deck 2 beds",
        "startDate": "2026-01-17",
    },
    {
        "id": 1511794,
        "accommodation": "RV Indochine II",
        "accommodationType": "Main deck 2 beds",
        "startDate": "2025-09-11",
    },
    {
        "id": 1512386,
        "accommodation": "RV Indochine II",
        "accommodationType": "Upper deck 2 beds",
        "startDate": "2025-09-11",
    },
    {
        "id": 1512387,
        "accommodation": "RV Indochine II",
        "accommodationType": "TWIN ROOM WITH 1 SPARE BED",
        "startDate": "2026-01-17",
        
    },
    {
        "id": 1512687,
        "accommodation": "RV Indochine",
        "accommodationType": "Main deck 2 beds",
        "startDate": "2025-10-08",
    },
    {
        "id": 1512688,
        "accommodation": "RV Indochine II",
        "accommodationType": "TWIN ROOM WITH 1 SPARE BED",
        "startDate": "2025-10-29",
    },
    {
        "id": 1512689,
        "accommodation": "RV Indochine ",
        "accommodationType": "TWIN ROOM WITH 1 SPARE BED",
        "startDate": "2025-10-10",
       
    },
    {
        "id": 1514186,
        "accommodation": "RV Indochine",
        "accommodationType": "Upper deck 2 beds",
        "startDate": "2024-11-10",
    },
    {
        "id": 1515391,
        "accommodation": "RV Indochine",
        "accommodationType": "Main deck 2 beds",
        "startDate": "2025-10-24",
    },
    {
        "id": 1515392,
        "accommodation": "RV Indochine II",
        "accommodationType": "Upper deck 2 beds with small terrace",
        "startDate": "2026-01-17",
    },
    {
        "id": 1516590,
        "accommodation": "RV Indochine",
        "accommodationType": "Upper deck 2 beds",
        "startDate": "2025-10-24",
       
    }
];

data.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
const dataAfterFormat = {};
data.forEach(item => {
    console.log(`${item.startDate.slice(0, 7)}`);
    if(!dataAfterFormat[`${item.startDate.slice(0, 7)}`]){
        dataAfterFormat[`${item.startDate.slice(0, 7)}`] = {};
    }
    if(!dataAfterFormat[`${item.startDate.slice(0, 7)}`][`${item.accommodation}`]) {
        dataAfterFormat[`${item.startDate.slice(0, 7)}`][`${item.accommodation}`] = {}
    }
    dataAfterFormat[`${item.startDate.slice(0, 7)}`][`${item.accommodation}`] = item;
});
console.log(dataAfterFormat);

