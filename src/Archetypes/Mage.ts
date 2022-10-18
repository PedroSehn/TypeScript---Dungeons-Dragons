import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private readonly _energyType: EnergyType = 'mana';
  private static _MageInstances = 0;

  static createdArchetypeInstances(): number {
    this._MageInstances += 1;
    return this._MageInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;