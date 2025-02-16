const datapacks = [
    {
        id: 1,
        title: "Silk Touch Spawner",
        version: "1.21+",
        icon: "https://i.imgur.com/3UiSVpH.png",
        images: ["https://static.planetminecraft.com/files/image/minecraft/data-pack/2024/692/18222743_l.webp"],
        description: "This data pack introduces a highly requested feature: the ability to break and collect spawner blocks using a Silk Touch-enchanted pickaxe!",
        detailedDescription: "With this data pack, you no longer have to worry about losing mob spawners when mining. Simply use a pickaxe with the Silk Touch enchantment, and the spawner will drop as an item. You can then place it anywhere you like, allowing you to build custom mob farms and relocate spawners for more flexible gameplay.",
        keyFeatures: [
            "Break spawners with a Silk Touch-enchanted pickaxe and collect them as items.",
            "Works only with pickaxes enchanted with Silk Touch.",
            "Players do not receive XP when breaking spawners obtained with Silk Touch, preventing exploitation of XP farming bugs.",
            "Fully compatible with Minecraft 1.21 and 1.21+ versions.",
        ],
        downloadLink: null,
        planetMinecraft: "https://www.planetminecraft.com/data-pack/krixh99-s-silk-touch-spawner-mc-1-21-1-21-1/",
        installation: [
            "Download the .zip data pack file.",
            "Extract the .zip file into your world's datapacks folder.",
            "Ensure that you extract the contents of the archive, not just place the .zip file in the folder.",
            "Start or load your world, and the data pack will be active.",
            "If you're playing on a server, you may need to restart the server for the data pack to be enabled."
        ]
    },
    {
        id: 2,
        title: "Enhanced Wither Skull",
        version: "1.21+",
        icon: "https://i.imgur.com/kn8LVnl.png",
        images: ["https://oyster.ignimgs.com/mediawiki/apis.ign.com/minecraft/4/4a/Wither_Skeletons.png","https://i.imgur.com/BcPaM2I.png"],
        description: "This data pack modifies the drop rates of Wither Skeleton skulls based on the Looting enchantment level of the player.\n",
        detailedDescription: "This feature significantly improves the chances of obtaining Wither Skeleton Skulls when using the Looting enchantment.\n The higher the Looting level on the weapon, the greater the chance of a drop.\n This tweak is perfect for players looking to farm Wither Skulls more efficiently for fighting the Wither Boss.",
        keyFeatures: [
            "Increases Wither Skull drop chances with Looting enchantment.",
            "Looting 0: <strong>5%</strong>, Looting 1: <strong>15%</strong>, Looting 2: <strong>20%</strong>, Looting 3: <strong>25%</strong> chance.",
            "Optimized for farming Wither Skeletons more efficiently.",
            "Perfect for players preparing to fight the Wither Boss.",
            "Fully compatible with Minecraft 1.21 and 1.21+ versions.",

        ],
        downloadLink: null,
        planetMinecraft: "https://www.planetminecraft.com/data-pack/krixh99-s-enhanced-wither-skull-mc-1-20-1-21/",
        installation: [
            "Download the .zip data pack file.",
            "Extract the .zip file into your world's datapacks folder.",
            "Ensure that you extract the contents of the archive, not just place the .zip file in the folder.",
            "Start or load your world, and the data pack will be active.",
            "If you're playing on a server, you may need to restart the server for the data pack to be enabled."
        ]
    },
    {
        "id": 3,
        "title": "Nether Wart Block Recycler",
        "version": "1.21+",
        "icon": "https://i.imgur.com/Lt6rq7n.png",
        "images": ["https://i.imgur.com/gATEX10.png", "https://i.imgur.com/u5zlvjS.png"],
        "description": "This data pack allows you to convert Nether Wart Blocks back into Nether Wart.\nCompatible with Crafter Block, allowing for easy conversion within your farms.",
        "detailedDescription": "With this feature, you can efficiently return Nether Wart Blocks back to their Nether Wart form using a crafting recipe. For each Nether Wart Block, you will receive 9 Nether Wart items. This tweak is perfect for players looking to save inventory space and optimize their Nether Wart farms. Additionally, this data pack is fully compatible with the Crafter Block, allowing for automatic conversions within farms or crafting stations.",
        "keyFeatures": [
            "Converts Nether Wart Blocks back into Nether Wart.",
            "1 Nether Wart Block → 9 Nether Wart.",
            "Optimized for resource efficiency and farming.",
            "Perfect for players with large Nether Wart farms or those preparing for potion brewing.",
            "Fully compatible with Crafter Block for automatic conversions in farms or crafting stations.",
            "Fully compatible with Minecraft 1.21 and 1.21+ versions."
        ],
        "downloadLink": null,
        "planetMinecraft": "https://www.planetminecraft.com/data-pack/nether-wart-block-recycler/",
        "installation": [
            "Download the .zip data pack file.",
            "Extract the .zip file into your world's datapacks folder.",
            "Ensure that you extract the contents of the archive, not just place the .zip file in the folder.",
            "Start or load your world, and the data pack will be active.",
            "If you're playing on a server, you may need to restart the server for the data pack to be enabled."
        ]
    }
      
];

document.addEventListener('DOMContentLoaded', () => {
    generateHTML();
    setTimeout(() => {
        const eventScript = document.createElement('script');
        eventScript.innerHTML = document.querySelector('script[src="script.js"]').innerHTML;
        document.body.appendChild(eventScript);
    }, 100);
});

function generateHTML() {
    const datapackContainer = document.getElementById('datapackContainer');
    const contentContainer = document.getElementById('contentContainer');
    
    datapacks.forEach(pack => {
        datapackContainer.innerHTML += `
            <div class="datapack-box" data-content="content${pack.id}">
                <div class="box-inner">
                    <div class="icon-3d" style="background-image: url('${pack.icon}');"></div>
                    <h3>${pack.title}</h3>
                    <p class="version">${pack.version}</p>
                </div>
            </div>
        `;
        
        const hasMultipleImages = pack.images.length > 1;
        
        contentContainer.innerHTML += `
            <section class="content-section" id="content${pack.id}">
                <div class="content-header">
                    <h2>${pack.title}</h2>
                    <button class="close-btn">&times;</button>
                </div>
                <div class="content-body">
                    <div class="image-carousel">
                        <div class="carousel-inner">
                            ${pack.images.map((img, index) => 
                                `<img src="${img}" class="${index === 0 ? 'active' : ''}">`
                            ).join('')}
                        </div>
                        ${hasMultipleImages ? `
                            <button class="carousel-btn prev-btn">&lt;</button>
                            <button class="carousel-btn next-btn">&gt;</button>
                        ` : ''}
                    </div>
                    <div class="description">
                        <h3>Description</h3>
                        <p>${pack.description}</p>
                    </div>
                    <div class="detailed-description">
                        <h3>Detailed Description</h3>
                        <p>${pack.detailedDescription}</p>
                    </div>
                    <div class="key-features">
                        <h3>Key Features</h3>
                        <ul>
                            ${pack.keyFeatures.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="installation">
                        <h3>Installation</h3>
                        <ol>
                            ${pack.installation.map(item => `<li>${item}</li>`).join('')}
                        </ol>
                    </div>
                    <div class="download-buttons">
                        ${pack.downloadLink ? `<a href="${pack.downloadLink}" class="download-btn" target="_blank">Download</a>` : ''}
                        ${pack.planetMinecraft ? `<a href="${pack.planetMinecraft}" class="planet-btn" target="_blank">PlanetMinecraft </a>` : ''}
                    </div>
                </div>
            </section>
        `;
    });
}
