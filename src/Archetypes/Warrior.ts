import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private readonly _energyType: EnergyType = 'stamina';
  private static _WarriorInstances = 0;

  static createdArchetypeInstances(): number {
    this._WarriorInstances += 1;
    return this._WarriorInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;