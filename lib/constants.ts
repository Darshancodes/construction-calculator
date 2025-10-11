export const MISCALLENOUS_COST = {
  CATEGORY: "SEWER CONNECTION,AC,PIPE-FITTING",
  PERCENT: 5,
};
export const LABOUR_COST = { PER_SQFT_RATE: 290 };
export const MANAGEMENT_COST = { PER_SQFT_RATE: 249 };

export const GROUND_FLOOR_AREA = 2000;
export const TOTAL_NO_OF_FLOORS = 5;
export const TOTAL_BUILDUP_AREA = GROUND_FLOOR_AREA * TOTAL_NO_OF_FLOORS;

export const CATEGORY_NAMES = {
  STEEL: "STEEL",
  BRICKS: "BRICKS",
  STONE: "STONE",
  "WATER-PROOFING": "WATER-PROOFING",
  "TERMITE-SOLUTION": "TERMITE-SOLUTION",
  CEMENT: "CEMENT",
  "ELECTRICAL-SLAB-AND-WALL-MATERIAL": "ELECTRICAL-SLAB-AND-WALL-MATERIAL",
  "WIRES-AND-CABLES-EWC0100-FLAT": "WIRES-AND-CABES-EWC0100-FLAT",
  "SHEET-AND-SWITCHES-EWC0100-FLAT": "SHEET-AND-SWITCHES-FLAT",
  "VETRIFIED-TILES": "VETRIFIED-TILES",
  "CERAMIC-WALL-TILE-TOILED-AND-KITCHEN":
    "CERAMIC-WALL-TILE-TOILED-AND-KITCHEN",
  "GRANITE-DOOR_FRAME-WINDOW_FRAME-KITCHEN_TOP-STAIRCASE":
    "GRANITE-DOOR_FRAME-WINDOW_FRAME-KITCHEN_TOP-STAIRCASE",
  "ROUGH-STONE-TERRACE-AND-PARKING-AREA":
    "ROUGH-STONE-TERRACE-AND-PARKING-AREA",
  "DOOR-SHUTTER": "DOOR-SHUTTER",
  "DOOR-FRAME-SINGLE-REBATE-ELS0100": "DOOR-FRAME-SINGLE-REBATE-ELS0100",
  "MAIN-DOOR": "MAIN-DOOR",
  "WINDOW-MATERIAL": "WINDOW-MATERIAL",
  "WALL-FINISH-POP-FALSE-CEILING": "WALL-FINISH-POP-FALSE-CEILING",
  "WALL-FINISH-POP-IN-WALLS": "WALL-FINISH-POP-IN-WALLS",
  "WALL-FINISH-INTERNAL-WALL-PAINT": "WALL-FINISH-INTERNAL-WALL-PAINT",
  "STAIR-HANDRAIL": "STAIR-HANDRAIL",
  "BALCONY-HANDRAIL": "BALCONY-HANDRAIL",
  "WATER-TANK": "WATER-TANK",
  KITCHEN: "KITCHEN",
  "MIX-CONCRETE-RMC": "MIX-CONCRETE-RMC",
  "MIX-CONCRETE-PCC": "MIX-CONCRETE-PCC",
  SAND: "SAND",
  "PLUMBING-PVC-INTERNAL-AND-EXTERNAL": "PLUMBING-PVC-INTERNAL-AND-EXTERNAL",
  "PLUMBING-CPVC-INTERNAL-AND-EXTERNAL": "PLUMBING-CPVC-INTERNAL-AND-EXTERNAL",
  "PLUMBING-CP-AND-VITREOUS": "PLUMBING-CP-AND-VITREOUS",
};

export const TMT_STEEL_CATEGORY = {
  BRANDS: [
    {
      NAME: "TATA TISCON",
      PER_UNIT_RATE: 75,
      PER_UNIT: "KG",
      STANDARD_QUANTITY: 3.5,
      STANDARD_QUANTITY_UNIT: "SQFT",
      IMAGE: "/product-images/tata-tiscon.svg",
    },
    {
      NAME: "JINDAL PANTHER",
      PER_UNIT_RATE: 75,
      PER_UNIT: "KG",
      STANDARD_QUANTITY: 3.5,
      STANDARD_QUANTITY_UNIT: "SQFT",
      IMAGE: "/product-images/jindal-panther.svg",
    },
    {
      NAME: "JSW OR RATHI",
      PER_UNIT_RATE: 70,
      PER_UNIT: "KG",
      STANDARD_QUANTITY: 3.5,
      STANDARD_QUANTITY_UNIT: "SQFT",
      IMAGE: "/product-images/jsw-steel.svg",
    },
  ],
};

export const BRICKS_CATEGORY = {
  BRANDS: [
    {
      NAME: "FLY ASH BRICKS",
      PER_UNIT_RATE: 8,
      PER_UNIT: "NOS",
      STANDARD_QUANTITY: 12,
      STANDARD_QUANTITY_UNIT: "SQFT",
      IMAGE: "/product-images/fly-ash-bricks.svg",
    },
    {
      NAME: "RENWEL OR OTHER CLAY BRICKS",
      PER_UNIT_RATE: 7,
      PER_UNIT: "NOS",
      STANDARD_QUANTITY: 12,
      STANDARD_QUANTITY_UNIT: "SQFT",
      IMAGE: "/product-images/renwal.svg",
      IMAGE2: "/product-images/other-clay-bricks.svg",
    },
    {
      NAME: "KANOTA OR HANUMANGARH",
      PER_UNIT_RATE: 7,
      PER_UNIT: "NOS",
      STANDARD_QUANTITY: 12,
      STANDARD_QUANTITY_UNIT: "SQFT",
      IMAGE: "/product-images/kanota.svg",
      IMAGE2: "/product-images/hanumangarh.svg",
    },
  ],
  WATER_PROOFING: [
    {
      NAME: "YES",
      PER_SQFT_RATE: 40,
      STANDARD_QUANTITY: 0.3,
      STANDARD_QUANTITY_UNIT: "SQFT",
    },
    {
      NAME: "NO",
      PER_SQFT_RATE: 0,
      STANDARD_QUANTITY: 0,
      STANDARD_QUANTITY_UNIT: "SQFT",
    },
  ],
  TERMITE_SOLUTION: [
    {
      NAME: "YES",
      PER_SQFT_RATE: 15,
      STANDARD_QUANTITY: 0.9,
      STANDARD_QUANTITY_UNIT: "SQFT",
    },
    {
      NAME: "NO",
      PER_SQFT_RATE: 0,
      STANDARD_QUANTITY: 0,
      STANDARD_QUANTITY_UNIT: "SQFT",
    },
  ],
};

export const CEMENT_CATEGORY = {
  BRANDS: [
    {
      NAME: "ULTRATECH OR AMBHUJA",
      PER_UNIT_RATE: 340,
      PER_UNIT: "BAG",
      STANDARD_QUANTITY: 0.17,
      STANDARD_QUANTITY_UNIT: "SQFT",
      IMAGE: "/product-images/ultratech.svg",
    },
    {
      NAME: "JK",
      PER_UNIT_RATE: 320,
      PER_UNIT: "BAG",
      STANDARD_QUANTITY: 0.17,
      STANDARD_QUANTITY_UNIT: "SQFT",
      IMAGE: "/product-images/jk.svg",
    },
    {
      NAME: "WONDER OR SHREE",
      PER_UNIT_RATE: 320,
      PER_UNIT: "BAG",
      STANDARD_QUANTITY: 0.17,
      STANDARD_QUANTITY_UNIT: "SQFT",
      IMAGE: "/product-images/shree.svg",
    },
  ],
};

export const ELECTRICAL_CATEGORY = {
  ELECTRICAL_OR_WALL_MATERIAL: [
    {
      NAME: "SHIVA OR JINDAL",
      PER_SQFT_RATE: 20,
      IMAGE: "/product-images/shiva-wall-electric.svg",
    },
    {
      NAME: "OTHER BRANDS",
      PER_SQFT_RATE: 17,
      IMAGE: "/product-images/other-brands-wall-electric.svg",
    },
  ],
  "WIRES_AND_CABLES_EWC0100-FLAT": [
    {
      NAME: "SHIVA OR JINDAL",
      PER_SQFT_RATE: 70,
      IMAGE: "/product-images/shiva-wall-electric.svg",
    },
    {
      NAME: "OTHER BRANDS",
      PER_SQFT_RATE: 60,
      IMAGE: "/product-images/other-brands-wall-electric.svg",
    },
  ],
  "SHEET-AND-SWITCHES_EWC0100-FLAT": [
    {
      NAME: "ANCHOR PENTA",
      PER_SQFT_RATE: 12,
      IMAGE: "/product-images/anchor-penta.svg",
    },
    {
      NAME: "HAVELLS",
      PER_SQFT_RATE: 18,
      IMAGE: "/product-images/havells-sheet.svg",
    },
    {
      NAME: "SCHNEIDER/GM",
      PER_SQFT_RATE: 18,
      IMAGE: "/product-images/gm-sheet.svg",
    },
  ],
};

export const FLOORING_CATEGORY = {
  VETRIFIED_IMAGE: "/brand-images/vetrified.svg",
  VETRIFIED_TILES: [
    { NAME: "50RS/SQFT", PER_SQFT_RATE: 50 },
    { NAME: "80RS/SQFT", PER_SQFT_RATE: 80 },
    { NAME: "120RS/SQFT", PER_SQFT_RATE: 120 },
  ],
  CERAMIC_WALL_TILE_IMAGE: "/brand-images/ceramic-wall-tile.svg",
  CERAMIC_WALL_TILE_TOILET_KITCHEN: [
    { NAME: "50RS/SQFT", PER_SQFT_RATE: 50, STANDARD_QUANTITY: 0.4 },
    { NAME: "80RS/SQFT", PER_SQFT_RATE: 80, STANDARD_QUANTITY: 0.4 },
    { NAME: "120RS/SQFT", PER_SQFT_RATE: 120, STANDARD_QUANTITY: 0.4 },
  ],
  GRANITE_DOORFRAME_IMAGE: "/brand-images/granite.svg",
  GRANITE_DOORFRAME_WINDOWFRAME_KITCHENTOP_STAIRCASE: [
    { NAME: "75RS/SQFT", PER_SQFT_RATE: 75, STANDARD_QUANTITY: 0.2 },
    { NAME: "90RS/SQFT", PER_SQFT_RATE: 90, STANDARD_QUANTITY: 0.2 },
    { NAME: "120RS/SQFT", PER_SQFT_RATE: 120, STANDARD_QUANTITY: 0.2 },
  ],
  ROUGH_STONE_IMAGE: "/brand-images/rough-stone.svg",
  ROUGH_STONE_TERRACE_PARKINGAREA: [
    { NAME: "40RS/SQFT", PER_SQFT_RATE: 40, STANDARD_QUANTITY: 1.25 },
    { NAME: "60RS/SQFT", PER_SQFT_RATE: 60, STANDARD_QUANTITY: 1.25 },
    { NAME: "90RS/SQFT", PER_SQFT_RATE: 90, STANDARD_QUANTITY: 1.25 },
  ],
};

export const DOOR_CATEGORY = {
  DOOR_SHUTTER: [
    { PER_SQFT_RATE: 45 },
    { PER_SQFT_RATE: 55 },
    { PER_SQFT_RATE: 65 },
  ],
  DOOR_FRAME_SINGLE_REBATE_ELS0100: [
    {
      NAME: "WOODEN",
      PER_SQFT_RATE: 35,
      IMAGE: "/product-images/wooden-door.svg",
    },
    {
      NAME: "GRANITE",
      PER_SQFT_RATE: 20,
      IMAGE: "/product-images/granite-door.svg",
    },
    {
      NAME: "KAROLI STONE",
      PER_SQFT_RATE: 8,
      IMAGE: "/product-images/karoli-door.svg",
    },
  ],
  MAIN_DOOR: [
    { NAME: "15000/DOOR", PER_RATE_UNIT: 15000, PER_UNIT: "DOOR" },
    { NAME: "20000/DOOR", PER_RATE_UNIT: 20000, PER_UNIT: "DOOR" },
    { NAME: "30000/DOOR", PER_RATE_UNIT: 30000, PER_UNIT: "DOOR" },
  ],
};

export const WINDOWS_CATEGORY = {
  MATERIAL: [
    {
      NAME: "UPVC",
      PER_SQFT_RATE: 65,
      IMAGE: "/product-images/upvc-window.svg",
    },
    {
      NAME: "ALUMINIUM",
      PER_SQFT_RATE: 55,
      IMAGE: "/product-images/aluminium-window.svg",
    },
    {
      NAME: "WOODEN",
      PER_SQFT_RATE: 65,
      IMAGE: "/product-images/wooden-window.svg",
    },
  ],
};

export const WALL_FINISHES = {
  POP_FALSE_CEILING: [
    {
      NAME: "SACARNI/BIRLA",
      PER_SQFT_RATE: 120,
      STANDARD_QUANTITY: 0.7,
      IMAGE: "/product-images/birla-pop-false-ceiling.svg",
    },
    {
      NAME: "JK SUPER",
      PER_SQFT_RATE: 120,
      STANDARD_QUANTITY: 0.7,
      IMAGE: "/product-images/jk-super-pop-false-ceiling.svg",
    },
    {
      NAME: "OTHER BRANDS",
      PER_SQFT_RATE: 110,
      STANDARD_QUANTITY: 0.7,
      IMAGE: "/product-images/other-brands-pop-false-ceiling.svg",
    },
  ],
  POP_IN_WALLS: [
    {
      NAME: "PLUMB",
      PER_SQFT_RATE: 18,
      STANDARD_QUANTITY: 3,
      IMAGE: "/product-images/pop-in-walls-plumb.svg",
    },
    {
      NAME: "PHANTI",
      PER_SQFT_RATE: 15,
      STANDARD_QUANTITY: 3,
      IMAGE: "/product-images/pop-in-walls-phanti.svg",
    },
    {
      NAME: "PUNNING",
      PER_SQFT_RATE: 10,
      STANDARD_QUANTITY: 3,
      IMAGE: "/product-images/pop-in-walls-punning.svg",
    },
  ],
  INTERMNAL_WALL_PAINT: [
    {
      NAME: "ROYAL MATT",
      PER_SQRT_RATE: 45,
      STANDARD_QUANTITY: 3.5,
      IMAGE: "/product-images/royal-matt-paint.svg",
    },
    {
      NAME: "PREMIUM",
      PER_SQRT_RATE: 25,
      STANDARD_QUANTITY: 3.5,
      IMAGE: "/product-images/premium-asian-paints.svg",
    },
    {
      NAME: "TRACTOR EMULSION",
      PER_SQRT_RATE: 20,
      STANDARD_QUANTITY: 3.5,
      IMAGE: "/product-images/tractor-emulsion-paint.svg",
    },
  ],
};

export const HANDRAILS = {
  STAIR_HANDRAIL: [
    {
      NAME: "SS RAILING 304 GRADE",
      PER_UNIT_RATE: 400,
      PER_UNIT: "RFT",
      STANDARD_QUANTITY: 30,
      IMAGE: "/product-images/ss-railing-304-grade.svg",
    },
    {
      NAME: "MS RAILING",
      PER_UNIT_RATE: 1000,
      PER_UNIT: "RFT",
      STANDARD_QUANTITY: 30,
      IMAGE: "/product-images/ms-railing-stair.svg",
    },
    {
      NAME: "SS RAILING",
      PER_UNIT_RATE: 1200,
      PER_UNIT: "RFT",
      STANDARD_QUANTITY: 30,
      IMAGE: "/product-images/ss-railing-glass.svg",
    },
  ],
  BALCONY_HANDRAIL: [
    {
      NAME: "SS RAILING GLASS -1200",
      PER_UNIT_RATE: 1200,
      IMAGE: "/product-images/ss-railing-glass-2.svg",
      PER_UNIT: "RFT",
      STANDARD_QUANTITY: 35,
    },
    {
      NAME: "SS RAILING GLASS -1500",
      IMAGE: "/product-images/ss-railing-glass-2.svg",
      PER_UNIT_RATE: 1500,
      PER_UNIT: "RFT",
      STANDARD_QUANTITY: 35,
    },
    {
      NAME: "SS RAILING GLASS -1000",
      PER_UNIT_RATE: 1000,
      PER_UNIT: "RFT",
      STANDARD_QUANTITY: 35,
      IMAGE: "/product-images/ss-railing-glass-2.svg",
    },
  ],
};

export const WATER_TANK_CATEGORY = {
  RATE: 10,
  IMAGE: "/brand-images/water-tank.svg",
  BRANDS: [
    { NAME: "500L*2", PER_UNIT_RATE: 10000, PER_UNIT: "RS" },
    { NAME: "1000L+500L", PER_UNIT_RATE: 15000, PER_UNIT: "RS" },
    { NAME: "5000L", PER_UNIT_RATE: 50000, PER_UNIT: "RS" },
    { NAME: "10000L", PER_UNIT_RATE: 100000, PER_UNIT: "RS" },
    { NAME: "50000L", PER_UNIT_RATE: 500000, PER_UNIT: "RS" },
  ],
};

export const KITCHEN_CATEGORY = {
  BRANDS: [
    {
      NAME: "PREMIUM",
      PER_UNIT_RATE: 150000,
      PER_UNIT: "RS",
      IMAGE: "/brand-images/kitchen.svg",
    },

    {
      NAME: "CLASSIC",
      PER_UNIT_RATE: 200000,
      PER_UNIT: "RS",
      IMAGE: "/product-images/classic-kitchen.svg",
    },
    {
      NAME: "BASIC",
      PER_UNIT_RATE: 100000,
      PER_UNIT: "RS",
      IMAGE: "/product-images/basic-kitchen.svg",
    },
  ],
};

export const MIX_CONCRETE_CATEGORY = {
  RMC: [
    {
      NAME: "M25",
      PER_UNIT_RATE: 4200,
      PER_UNIT: "CUM",
      STANDARD_QUANTITY: 0.04,
      IMAGE: "/product-images/ppc.svg",
    },
    {
      NAME: "M20",
      PER_UNIT_RATE: 4000,
      PER_UNIT: "CUM",
      STANDARD_QUANTITY: 0.04,
      IMAGE: "/product-images/ppc.svg",
    },
  ],
  PCC: [
    {
      NAME: "M7.5",
      PER_UNIT_RATE: 2800,
      PER_UNIT: "CUM",
      STANDARD_QUANTITY: 0.012,
      IMAGE: "/product-images/opc.svg",
    },
  ],
};

export const SAND_QUANTITY = {
  BRANDS: [
    {
      NAME: "RIVER SAND",
      PER_UNIT_RATE: 1250,
      PER_UNIT: "TON",
      STANDARD_QUANTITY: 0.05,
      IMAGE: "/brand-images/sand.svg",
    },
    {
      NAME: "M/E SAND",
      PER_UNIT_RATE: 900,
      PER_UNIT: "TON",
      STANDARD_QUANTITY: 0.05,
      IMAGE: "/brand-images/sand.svg",
    },
  ],
};

export const STONE_QUANTITY = {
  BRANDS: [
    {
      NAME: "STONE",
      PER_UNIT_RATE: 750,
      PER_UNIT: "TON",
      STANDARD_QUANTITY: 0.05,
      IMAGE: "/brand-images/rough-stone.svg",
    },
  ],
};

export const PLUMBING_QUANTITY = {
  "PVC-(INTERNAL & EXTERNAL)": [
    {
      NAME: "ASHIRVAD/ASTRAL",
      PER_SQRT_RATE: 35,
      IMAGE: "/product-images/ashirvad-pipe.svg",
    },
    {
      NAME: "SUPREME/PRINCE",
      PER_SQRT_RATE: 30,
      IMAGE: "/product-images/prince-pipe.svg",
    },
    {
      NAME: "KISAN",
      PER_SQRT_RATE: 35,
      IMAGE: "/product-images/kisan-pipe.svg",
    },
  ],
  "CPVC-(INTERNAL & EXTERNAL)": [
    {
      NAME: "ASHIRVAD/ASTRAL",
      PER_SQRT_RATE: 35,
      IMAGE: "/product-images/ashirvad-pipe.svg",
    },
    {
      NAME: "SUPREME/PRINCE",
      PER_SQRT_RATE: 30,
      IMAGE: "/product-images/prince-pipe.svg",
    },
    {
      NAME: "KISAN",
      PER_SQRT_RATE: 35,
      IMAGE: "/product-images/kisan-pipe.svg",
    },
  ],
  "CP-VITREOUS": [
    {
      NAME: "35K",
      PER_UNIT_RATE: 35000,
      PER_UNIT: "NOS",
      STANDARD_QUANTITY: 2,
      // IMAGE: "/brand-images/acc.svg",
    },
    {
      NAME: "50K",
      PER_UNIT_RATE: 50000,
      PER_UNIT: "NOS",
      STANDARD_QUANTITY: 2,
      // IMAGE: "/brand-images/acc.svg",
    },
  ],
};

export const STEPS_IMAGES = {
  BRICKS: "/steps-images/bricks.svg",
  CEMENT: "/steps-images/cement.svg",
  DOOR: "/steps-images/door.svg",
  ELECTRICAL: "/steps-images/electrical.svg",
  FLOORING: "/steps-images/flooring.svg",
  MIX_CONCRETE: "/steps-images/sand.svg",
  PLUMBING: "/steps-images/plumbing.svg",
  RAILINGS: "/steps-images/hand-rail.svg",
  TMT_STEEL: "/steps-images/steel.svg",
  WALL_FINISH: "/steps-images/wall-finish.svg",
  WINDOWS: "/steps-images/windows.svg",
  KITCHEN: "/steps-images/kitchen.svg",
  WATER_TANK: "/steps-images/water-tank.svg",
  SAND: "/steps-images/sand.svg",
};

export const BRAND_IMAGES = {};
