export const DICE_MODELS = {
  '2d6': {
    tn: 9,
    failure: 2,
    success: 12,
  },
  '2d10': {
    tn: 13,
    failure: 3,
    success: 19,
  },
  '2d12': {
    tn: 15,
    failure: 3,
    success: 23,
  },
  '3d6': {
    tn: 12,
    failure: 4,
    success: 17,
  },
}
export const DEFAULT_DICE_MODEL = DICE_MODELS["2d6"]
