import { CATEGORY_NAMES, STEPS_IMAGES } from "./constants";

export const CONSTRUCTION_STEPS = [
  {
    id: 1,
    category: [CATEGORY_NAMES?.STEEL],
    name: "TMT Steel",
    image: STEPS_IMAGES.TMT_STEEL,
  },
  {
    id: 2,
    category: [
      CATEGORY_NAMES?.BRICKS,
      CATEGORY_NAMES?.["WATER-PROOFING"],
      CATEGORY_NAMES?.["TERMITE-SOLUTION"],
    ],
    name: "Bricks",
    image: STEPS_IMAGES.BRICKS,
  },
  {
    id: 3,
    category: [CATEGORY_NAMES?.CEMENT],
    name: "Cement",
    image: STEPS_IMAGES.CEMENT,
  },
  {
    id: 4,
    category: [
      CATEGORY_NAMES?.["ELECTRICAL-SLAB-AND-WALL-MATERIAL"],
      CATEGORY_NAMES?.["WIRES-AND-CABLES-EWC0100-FLAT"],
      CATEGORY_NAMES?.["SHEET-AND-SWITCHES-EWC0100-FLAT"],
    ],
    name: "Electrical",
    image: STEPS_IMAGES.ELECTRICAL,
  },
  {
    id: 5,
    category: [
      CATEGORY_NAMES?.["VETRIFIED-TILES"],
      CATEGORY_NAMES?.["CERAMIC-WALL-TILE-TOILED-AND-KITCHEN"],
      CATEGORY_NAMES?.["GRANITE-DOOR_FRAME-WINDOW_FRAME-KITCHEN_TOP-STAIRCASE"],
      CATEGORY_NAMES?.["ROUGH-STONE-TERRACE-AND-PARKING-AREA"],
    ],
    name: "Flooring",
    image: STEPS_IMAGES.FLOORING,
  },
  {
    id: 6,
    category: [
      CATEGORY_NAMES?.["DOOR-FRAME-SINGLE-REBATE-ELS0100"],
      CATEGORY_NAMES?.["DOOR-SHUTTER"],
      CATEGORY_NAMES?.["MAIN-DOOR"],
    ],
    name: "Door",
    image: STEPS_IMAGES.DOOR,
  },
  {
    id: 7,
    category: [CATEGORY_NAMES?.["WINDOW-MATERIAL"]],
    name: "Windows",
    image: STEPS_IMAGES.WINDOWS,
  },
  {
    id: 8,
    category: [
      CATEGORY_NAMES?.["WALL-FINISH-POP-FALSE-CEILING"],
      CATEGORY_NAMES?.["WALL-FINISH-POP-IN-WALLS"],
      CATEGORY_NAMES?.["WALL-FINISH-INTERNAL-WALL-PAINT"],
    ],
    name: "Wall Finish",
    image: STEPS_IMAGES.WALL_FINISH,
  },
  {
    id: 9,
    category: [
      CATEGORY_NAMES?.["STAIR-HANDRAIL"],
      CATEGORY_NAMES?.["BALCONY-HANDRAIL"],
    ],
    name: "Hand Rails",
    image: STEPS_IMAGES.RAILINGS,
  },
  {
    id: 10,
    category: [CATEGORY_NAMES?.STONE],
    name: "Stone",
    image: STEPS_IMAGES.BRICKS,
  },

  {
    id: 11,
    category: [
      CATEGORY_NAMES?.["MIX-CONCRETE-PCC"],
      CATEGORY_NAMES?.["MIX-CONCRETE-RMC"],
    ],
    name: "Mix Concrete",
    image: STEPS_IMAGES.MIX_CONCRETE,
  },
  {
    id: 12,
    category: [CATEGORY_NAMES?.SAND],
    name: "Sand",
    image: STEPS_IMAGES.SAND,
  },
  {
    id: 13,
    category: [
      CATEGORY_NAMES?.["PLUMBING-CP-AND-VITREOUS"],
      CATEGORY_NAMES?.["PLUMBING-CPVC-INTERNAL-AND-EXTERNAL"],
      CATEGORY_NAMES?.["PLUMBING-PVC-INTERNAL-AND-EXTERNAL"],
    ],
    name: "Plumbing",
    image: STEPS_IMAGES.PLUMBING,
  },

  {
    id: 14,
    category: [CATEGORY_NAMES?.["WATER-TANK"], CATEGORY_NAMES?.KITCHEN],
    name: "Preferences",
    image: STEPS_IMAGES.WATER_TANK,
  },
];
