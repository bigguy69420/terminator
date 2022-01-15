// This script only works on Windows version of Minecraft!

import { World, Commands } from "mojang-minecraft";

World.events.tick.subscribe(() => {
  let date_ob = new Date();
  let day = ("0" + date_ob.getDate()).slice(-2);
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
  if ((month == 12 && 19 <= day <= 31) || (month == 1 && 1 <= day <= 8)) {
    Commands.run('event entity @e[type=entity:terminator] terminator:christmas_skin', World.getDimension('overworld'));
    Commands.run('event entity @e[type=entity:terminator] terminator:christmas_skin', World.getDimension('nether'));
    Commands.run('event entity @e[type=entity:terminator] terminator:christmas_skin', World.getDimension('the end'));
  } else {
    Commands.run('event entity @e[type=entity:terminator] terminator:default_skin', World.getDimension('overworld'));
    Commands.run('event entity @e[type=entity:terminator] terminator:default_skin', World.getDimension('nether'));
    Commands.run('event entity @e[type=entity:terminator] terminator:default_skin', World.getDimension('the end'));
  };
})