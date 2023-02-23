export interface neuron {
  index: number;
  originalPosX: number;
  originalPosY: number;
  posX: number;
  posY: number;
  newPosX: number;
  newPosY: number;
  radius: number;
  strokeWidth: number;
  strokeColor: string;
  bgColor: string;
  flags: { [key: string]: any }; // needed to easily identify a specific subset of neurons for effects
}

export interface layerParams {
  distanceNeurons: number;
  distanceLayers: number;
  layers: number[];
}

export interface circleParams {
  radius: number;
  neurons: number;
}

export interface coord {
  x: number;
  y: number;
}

export interface renderingParams {
  infinite: boolean;
  iterations?: number;
  transitionTime: number;
  transitionInterval: number;
  propertiesUpdater: propUpdater;
}
export type initialPositions = (neurons: neuron[]) => void; // assigning initial positions to neurons (posX and posY
export type propUpdater = (neurons: neuron[], iter: number) => void; // updating newPosX and newPosY
export type forceUpdater = (
  neurons: neuron[],
  forces: coord[],
  iter: number
) => void; // updating forces array
