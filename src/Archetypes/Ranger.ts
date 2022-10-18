import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private readonly _energyType: EnergyType = 'stamina';
  private static _RangerInstances = 0;

  static createdArchetypeInstances(): number {
    this._RangerInstances += 1;
    return this._RangerInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;