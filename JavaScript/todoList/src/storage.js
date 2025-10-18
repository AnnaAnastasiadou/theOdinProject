const STORAGE_KEY = 'taskFlowGroups';

export const loadData = () => {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        if (!data) {
            return [];
        }
        return JSON.parse(data);
    }
    catch (error){
        console.error("Error loading data from localStorage: ", error);
        return[];
    }
}

export const saveData = (groups) => {
    try {
        const data = JSON.stringify(groups);
        localStorage.setItem(STORAGE_KEY, data);
        console.log("Groups saved to localStorage.");
    }
    catch (error) {
        console.error("Error saving data to localStorage: ", error);
    }
}