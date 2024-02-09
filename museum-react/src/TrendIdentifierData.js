
const getGraphData = () => {
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory'));
    if (!searchHistory) return null;

    
    const data = {
        labels: ["Museums", "Art", "Artists"],
        datasets: [{
            label: 'Search Counts',
            data: [searchHistory.searchMuseums.length, searchHistory.searchArt.length, searchHistory.searchArtists.length],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1
        }]
    };

    return data;
};

export default getGraphData;
