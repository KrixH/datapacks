execute as @e[type=minecraft:experience_orb,nbt={Age:0s}] at @s if entity @e[type=item,nbt={Age:0s,Item:{id:"minecraft:spawner"}},distance=..2] run kill @s
execute as @e[type=item,nbt={Item:{id:"minecraft:spawner"}}] run function krixh99tweaks:item


execute as @a[scores={sp_pl=1..}] at @s run function krixh99tweaks:block/detect

scoreboard players set @a sp_pl 0