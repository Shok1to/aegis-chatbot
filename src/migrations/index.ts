import * as migration_20261027_234410_initial from './20261027_234410_initial';

export const migrations = [
  {
    up: migration_20261027_234410_initial.up,
    down: migration_20261027_234410_initial.down,
    name: '20261027_234410_initial'
  },
];
