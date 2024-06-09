// This file is required for Expo/React Native SQLite migrations - https://orm.drizzle.team/quick-sqlite/expo

import journal from './meta/_journal.json';
import m0000 from './0000_wakeful_franklin_richards.sql';
import m0001 from './0001_yellow_dazzler.sql';
import m0002 from './0002_massive_tombstone.sql';
import m0003 from './0003_wooden_warstar.sql';
import m0004 from './0004_tiny_firedrake.sql';
import m0005 from './0005_warm_sauron.sql';

  export default {
    journal,
    migrations: {
      m0000,
m0001,
m0002,
m0003,
m0004,
m0005
    }
  }
  