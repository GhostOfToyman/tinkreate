// priority: 0
const removed_items = [
  "minecraft:wooden_axe",
  "minecraft:stone_axe",
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

console.info(
  "Hello, World! (You will see this line every time client resources reload)"
);

onEvent("jei.hide.items", (event) => {
  for (let i = 0; i < removed_items.length; i++) {
    event.hide(removed_items[i]);
  }
});
