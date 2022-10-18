import Race from './Race';

class Halfling extends Race {
  private static _createdRacesInstances = 0;
  private _maxLifePoints = 60;

  static createdRacesInstances(): number {
    this._createdRacesInstances += 1;
    return this._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;