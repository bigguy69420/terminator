import { Commands, World } from 'Minecraft';

function DimensionTest (dimension) {
  var playerdimcount = 0;
  var playercount = Commands.run('testfor @a[m=!c]').victim.length;
  const disableLogging = true;

  try {
    playerdimcount = Commands.run('testfor @a[rm=0,m=!c]', World.getDimension(dimension)).victim.length;
    if ((playerdimcount / playercount) > 0.5) {
      if (dimension == 'the end') {
        var dim_output = 'the_end';
      } else { var dim_output = dimension; };
      Commands.run(`event entity @e[type=entity:terminator] terminator:find_portal_to_${dim_output}`);
    };
  } catch (err) {
    if (disableLogging == false) {
      console.warn(`${dimension} test - ${err}`);
    };
  };
};

World.events.tick.subscribe(() => {  
  DimensionTest('overworld');
  DimensionTest('nether');
  DimensionTest('the end');
})
