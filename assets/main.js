const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC4FHiPgS1KXkUMx3dxBUtPg&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '29a778578amsh74d3ed56017c0c0p14f1ffjsn974e27576c4a',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    try {
        const response = await fetch(urlApi, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

//con esta estructura el programa automáticamente al ser ejectuado ejecuta esta función
(async ()=>{
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video =>`
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    title
                </h3>
            </div>
        </div>
        `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();