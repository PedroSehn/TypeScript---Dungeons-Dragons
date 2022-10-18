import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private readonly _energyType: EnergyType = 'mana';
  private static _NecromancerInstances = 0;

  static createdArchetypeInstances(): number {
    this._NecromancerInstances += 1;
    return this._NecromancerInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;