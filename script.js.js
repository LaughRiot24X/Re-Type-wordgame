const refresh = document.querySelector(".p2");

refresh.addEventListener("click", () => {
    location.reload();
});

const timer = document.getElementById("timer");
const start = document.getElementById("stbtn");
const again = document.getElementById("tabtn");
const input = document.getElementById("inp2");
let seconds = 5;
let rng;
const score = document.getElementById("score")
let scorenum = 0
let gameActive = false;

const display = document.querySelector(".wrdinp");
const words = [
  "apple", "tiger", "rocket", "ocean", "planet",
  "shadow", "candle", "forest", "silver", "bridge",
  "thunder", "pocket", "marble", "falcon", "castle",
  "ember", "whisper", "anchor", "velvet", "compass",
  "cactus", "mirror", "breeze", "lantern", "harbor",
  "cobalt", "meadow", "voyage", "quartz", "summit",
  "pioneer", "horizon", "boulder", "orchard", "nebula",
  "crimson", "glacier", "chimney", "parrot", "zephyr",
  "canyon", "tundra", "beacon", "prism", "sparrow",
  "dagger", "meadowlark", "volt", "timber", "solstice",
  "acorn", "amber", "atlas", "aurora", "badger",
  "bamboo", "banjo", "banyan", "barley", "basalt",
  "bison", "blizzard", "blossom", "bobcat", "bonfire",
  "bramble", "brisk", "bronze", "burrow", "cabana",
  "caliber", "camel", "canopy", "caribou", "cascade",
  "cedar", "celestial", "chalice", "chameleon", "chapel",
  "cheetah", "chestnut", "cipher", "citadel", "clover",
  "cobra", "comet", "condor", "coral", "cougar",
  "cradle", "crater", "creek", "crest", "cricket",
  "crow", "crystal", "current", "cypress", "dawn",
  "delta", "desert", "dewdrop", "diamond", "dolphin",
  "dragon", "drift", "dusk", "eagle", "eclipse",
  "eddy", "emerald", "enigma", "equinox", "estuary",
  "fable", "fjord", "flame", "flare", "flint",
  "flora", "fog", "fox", "frost", "galaxy",
  "gale", "gazelle", "gecko", "geyser", "gorge",
  "granite", "grove", "gulch", "gust", "habitat",
  "hail", "hawk", "hazel", "hearth", "heather",
  "hermit", "heron", "hickory", "hive", "hollow",
  "hyena", "ibis", "iceberg", "iguana", "impala",
  "indigo", "inferno", "island", "ivory", "jackal",
  "jade", "jaguar", "jasmine", "javelin", "jay",
  "juniper", "karma", "kelp", "kestrel", "key",
  "kingfisher", "kite", "knoll", "koala", "lagoon",
  "larch", "lark", "lasso", "lava", "lavender",
  "ledge", "lemur", "leopard", "lichen", "lilac",
  "lily", "linden", "lynx", "macaw", "magma",
  "magnet", "magnolia", "mahogany", "manta", "maple",
  "marigold", "marmot", "marsh", "marten", "mastodon",
  "meteor", "mica", "mimosa", "mineral", "minnow",
  "mirage", "mist", "moat", "monarch", "mongoose",
  "monsoon", "moose", "moraine", "moss", "moth",
  "mountain", "mustang", "narwhal", "nectar", "newt",
  "nightingale", "nimbus", "nomad", "nova", "oak",
  "oasis", "obsidian", "ogre", "olive", "onyx",
  "opal", "orca", "orchid", "oriole", "osprey",
  "otter", "owl", "oyster", "pagoda", "palmetto",
  "panda", "panther", "papaya", "paradox", "pebble",
  "pelican", "peregrine", "petal", "pewter", "phantom",
  "pheasant", "phoenix", "pine", "pinnacle", "piranha",
  "plateau", "plover", "plum", "polar", "pollen",
  "poplar", "porcupine", "prairie", "prawn", "puma",
  "python", "quail", "quasar", "quiver", "raccoon",
  "radish", "rafter", "rainforest", "rapids", "raven",
  "reef", "ridge", "rift", "ripple", "river",
  "robin", "rooster", "rose", "rowan", "rubble",
  "ruby", "russet", "sable", "saffron", "sage",
  "salamander", "salmon", "sandstone", "sapphire", "savanna",
  "scarab", "scepter", "scorpion", "sea", "seagull",
  "seahorse", "sequoia", "serpent", "shard", "shark",
  "shale", "sherbet", "shore", "shrew", "shrub",
  "sierra", "silt", "siren", "skink", "skipper",
  "skylark", "slate", "sleet", "sloth", "smoke",
  "snail", "snake", "snipe", "snowfall", "solitude",
  "sparrowhawk", "sphinx", "spider", "spire", "spruce",
  "squall", "squirrel", "stag", "starfish", "starlight",
  "steppe", "stork", "storm", "stream", "sunbeam",
  "sunflower", "sunrise", "sunset", "swallow", "swamp",
  "swan", "sycamore", "talon", "tamarack", "tapir",
  "tarantula", "teal", "tempest", "terrace", "terrier",
  "thicket", "thistle", "thorn", "thrush", "tidal",
  "toad", "topaz", "tornado", "torrent", "tortoise",
  "toucan", "trail", "trident", "trout", "truffle",
  "tulip", "turf", "turquoise", "turtle", "twig",
  "typhoon", "urchin", "vale", "valley", "vampire",
  "vapor", "verbena", "vermilion", "vine", "viper",
  "vista", "vortex", "vulture", "walnut", "walrus",
  "wapiti", "warbler", "wasp", "waterfall", "weasel",
  "whirlpool", "willow", "wisteria", "wolf", "wolverine",
  "wombat", "woodland", "woodpecker", "wormwood", "wren",
  "yak", "yam", "yew", "zenith", "zircon"
];

start.addEventListener("click", () => {
    start.style.display = "none";
    timer.textContent = String(seconds);
    timer.style.fontFamily = "sans-serif";
    timer.style.fontWeight = "700";
    gameActive = true;

    let clock = setInterval(() => {
        seconds = seconds - 1;
        timer.textContent = String(seconds);
        if (seconds <= 0) {
            clearInterval(clock)
            gameActive = false;
            again.style.display = "inline-block";
            score.style.display = "none";
            input.disabled = true;
            input.blur();
            
        }
    }, 1000);

    rng = Math.floor(Math.random() * words.length);
    display.value = words[rng];
    input.focus();
    input.style.fontWeight = "600";

    scorenum = 0;
    score.textContent = String(score);
});

again.addEventListener("click", () => {
    location.reload();
    again.style.display = "none";
    score.style.display = "inline-block";
});

document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();

    if (key === "enter" && gameActive && seconds > 0) {
        if (input.value === words[rng].toLowerCase()) {
            scorenum = scorenum + 1;
            score.textContent = String(scorenum);
            seconds = seconds + 2;
            timer.textContent = String(seconds);
            rng = Math.floor(Math.random() * words.length);
            display.value = words[rng];
            input.value = "";
            score.style.display = "inline-block";
        }else{
            rng = Math.floor(Math.random() * words.length);
            display.value = words[rng];
            input.value = "";
            score.textContent = "0";
            scorenum = 0;
            score.style.display = "none";
        }
    }
})