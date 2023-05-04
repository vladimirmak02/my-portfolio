import robotfist from '../assets/robotfist.png';
// const Weapon = function (damage, )

export const weapons = [
  {
    name: 'Standard',
    icon: robotfist,
    damage: 5,
    range: 1,
    ability: () => {
      // knock enemy back x distance
    }
  },
  {
    name: 'Samurai Sword',
    damage: 10,
    range: 1,
    ability: () => {
      // dash x distance
      // slicing everything in the way
    }
  },
  {
    name: 'Rocket launcher',
    damage: 5,
    range: 10,
    ability: () => {
      // Rocket jump
      // Shoot rocket under yourslelf (explodes)
      // Propel yourself in the direction you're facing x distance
    }
  },
]