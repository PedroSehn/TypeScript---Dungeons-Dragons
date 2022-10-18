import Race from './Race';

class Elf extends Race {
  private static _createdRacesInstances = 0;
  private _maxLifePoints = 99;

  static createdRacesInstances(): number {
    this._createdRacesInstances += 1;
    return this._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;