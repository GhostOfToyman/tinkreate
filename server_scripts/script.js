const removed_items = [
  "minecraft:wooden_axe",
  "minecraft:golden_axe",
  "minecraft:iron_axe",
  "minecraft:diamond_axe",
  "minecraft:netherite_axe",
  "minecraft:wooden_hoe",
  "minecraft:stone_hoe",
  "minecraft:golden_hoe",
  "minecraft:iron_hoe",
  "minecraft:diamond_hoe",
  "minecraft:netherite_hoe",
  "minecraft:wooden_sword",
  "minecraft:stone_sword",
  "minecraft:iron_sword",
  "minecraft:golden_sword",
  "minecraft:diamond_sword",
  "minecraft:netherite_sword",
  "minecraft:wooden_shovel",
  "minecraft:stone_shovel",
  "minecraft:golden_shovel",
  "minecraft:iron_shovel",
  "minecraft:diamond_shovel",
  "minecraft:wooden_pickaxe",
  "minecraft:stone_pickaxe",
  "minecraft:golden_pickaxe",
  "minecraft:iron_pickaxe",
  "minecraft:diamond_pickaxe",
  "minecraft:netherite_pickaxe",
];

settings.logAddedRecipes = true;
settings.logRemovedRecipes = true;
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

console.info(
  "Hello, World! (You will see this line every time server resources reload)"
);

onEvent("recipes", (event) => {
  for (let i = 0; i < removed_items.length; i++) {
    event.remove({ output: removed_items[i] });
  }
});

onEvent("item.tags", (event) => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')
  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
});

onEvent("block.loot_tables", (event) => {
  // all dirt blocks have a 50% chance to drop an enchanted diamond sword named "test"
  event.modifyBlock(/^minecraft:.*dirt/, (table) => {
    table.addPool((pool) => {
      pool
        .addItem("minecraft:stone")
        .randomChance(0.5)
        .enchantWithLevels(1, true)
        .name(Text.of("Test").blue());
    });
  });
});
